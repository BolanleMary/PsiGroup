/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        keyframes: {
          "sliding-background": {
            "0%": { transform: "translateY(0%)" },
            "100%": { transform: "translateY(-200%)" },
          },
        },
        },
      },

    },
    
    

  plugins: [
    require('tailwindcss-animate'),
  ]

}
