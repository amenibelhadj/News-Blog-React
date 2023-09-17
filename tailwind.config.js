module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_7f": "#0000007f",
          "900_90": "#00000090",
          "900_87": "#00000087",
          "900_00": "#00000000",
          "900_4c": "#0000004c",
          "900_a2": "#000000a2",
          "900_a5": "#000000a5",
          "900_cc": "#000000cc",
        },
        white: {
          A700_b2: "#ffffffb2",
          A700_4f: "#ffffff4f",
          A700_87: "#ffffff87",
          A700: "#ffffff",
        },
        red: { 900: "#b01b24" },
        green: { 700: "#1eb01b" },
        amber: { A100: "#ffe174" },
        gray: { 50: "#f8f7fc", 100: "#f6f6f6", 200: "#ebebeb", 900: "#222226" },
        deep_purple: { A700: "#3d0ef9" },
        purple: { 500: "#ad1bb0" },
        deep_orange: { A400: "#f9250f" },
        orange: { A700: "#f9630e" },
        bluegray: { 100: "#d1d4d8", 400: "#8e8e8e", 900: "#2b2d42" },
      },
      fontFamily: { inter: "Inter", poppins: "Poppins" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#00000000,#000000a5)",
        gradient1: "linear-gradient(180deg ,#00000000,#0000007f)",
        gradient2: "linear-gradient(180deg ,#00000000,#000000)",
        gradient3: "linear-gradient(180deg ,#00000000,#000000cc)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
