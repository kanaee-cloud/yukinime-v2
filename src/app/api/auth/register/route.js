import { hash } from "bcryptjs";
import prisma from "../../../libs/prisma.js";  

export async function POST(req) {
    const { email, password, name } = await req.json();

    const existingUser = await prisma.user.findUnique({
        where: { email },
    });

    if (existingUser) {
        return new Response(JSON.stringify({ message: 'Email already exists' }), {
            status: 400,
        });
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await prisma.user.create({
        data: {
            email,
            name,
            password: hashedPassword,
            authProvider: 'manual',
        },
    });

    return new Response(JSON.stringify({ message: 'User created', newUser }), {
        status: 201,
    });
}
