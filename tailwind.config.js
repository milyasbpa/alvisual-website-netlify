/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: "Manrope",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        alvisual: "linear-gradient(135deg, #2B939D 0%, #2D528A 100%)",
      },
      colors: {
        "alvisual-gradient":
          "linear-gradient(135deg, #2B939D 0%, #2D528A 100%)",
        "eerie-black": "#1F1F1F",
        "granite-gray": "#666666",
        lotion: "#FAFAFA",
        "anti-flash-white": "#F3F3F3",
        "raisin-black": "#262626",
        "light-silver": "#D8D8D8",
        "blue-yonder": "#3A68B1",
        "cerulean-blue": "#2E59C6",
        "azureish-white": "#D5DEF4",
        "charleston-green": "#2D2D2D",
        flame: "#E84A27",
        "columbia-blue": "#CED4E3",
        "ghost-white": "#F9F9FB",
        "chinese-white": "#E0E0E0",
        "spanish-gray": "#999999",
        "outer-space": "#494c4f",
        "davys-grey": "#55595C",
        "black-80": "rgba(0,0,0,0.8)",
        "black-50": "rgba(0,0,0,0.5)",
        "raisin-black-50": "rgba(33,33,33,0.5)",

        primary: "#3A68B1",
      },
    },
  },
  plugins: [],
};
