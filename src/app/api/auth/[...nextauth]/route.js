import NextAuth from "next-auth";
import githubAuth from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import prisma from "../../../libs/prisma.js";

const authOption = {
  providers: [
    githubAuth({
      clientId: process.env.GITHUB_CLIENT,
      clientSecret: process.env.GITHUB_SECRET,
      async profile(profile){
        const existingUser = await prisma.user.findUnique({
          where : { 
            email : profile.email
          }
        })

        if(existingUser){
          return {
            id: existingUser.id,
            email: existingUser.email,
            name: existingUser.name,
            image: existingUser.avatar_url
          }
        } else {
          const newUser = await prisma.user.create({
            data : {
              email : profile.email,
              name: profile.name,
              image: profile.avatar_url,
              authProvider : "github"
            }
          })

          return {
            id: newUser.id,
            email: newUser.email,
            name: newUser.name,
            image: newUser.image
          }
        }
      }
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          throw new Error("No user found with the given email");
        }

        const isValidPassword = await compare(
          credentials.password,
          user.password
        );
        if (!isValidPassword) {
          throw new Error("Password is incorrect");
        }
        return { id: user.id, email: user.email, name: user.name, image: user.image }; 
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin/",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name; 
        token.image = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.name = token.name; 
      session.user.image = token.image;
      return session;
    },
    async redirect({ url, baseUrl }) {
      if (url.includes("/auth/signin") && url.includes("provider=github")) {
        return baseUrl + "/api/auth/signin?provider=github";
      }

      return baseUrl + "/users/dashboard";
    },
  },
  debug: true,
};

const handler = NextAuth(authOption);
export { handler as GET, handler as POST };
