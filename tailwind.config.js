/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: "linear-gradient(153deg, rgba(0,0,0,0.8295693277310925) 0%, rgba(0,0,0,0.4150035014005602) 100%),url(/assets/main-bg.jpg)",
        responsive:
          "linear-gradient(153deg, rgba(0,0,0,0.8295693277310925) 0%, rgba(0,0,0,0.4150035014005602) 100%),url(/assets/main-bg-responsive.jpg)",
        loading : "url(/assets/not-found.gif)"  
      },
      colors : {
        color: {
          white : "#fff",
          accent : "#17e9e1"
        }
      }
    },
   
  },
  plugins: [],
};
