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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        JioTypeBlack: ["JioType-Black"], // font-weight : 900
        JioTypeBold: ["JioType-Bold"], // font-weight:700
        JioTypeMedium: ["JioType-Medium"], //font-weight : 500
        JioTypeMediumItalic: ["JioType-MediumItalic"],
        JioTypeLight: ["JioType-Light"], // font-weight : 300
        JioTypeLightItalic: ["JioType-LightItalic"],
      },
      colors:{
        'navbgcolor': '#D8AA67',
        'navtitlecolor':'#623C1F',
        'lightbrown':"#906E39",
        'yellow':'#FFD700',
        'lightblue':'#E3E3E3',
        'brown':'#6F542C',
        'dividerbrown':'#AC660C',
        'resourcebg':'#7B5D32',
        'resourcebtncolor':'#E1B675',
        'footerbg':'#F5F5F5',
        'carouseltext':'#141414',
      }
    },
  },
  plugins: [],
};
