/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "22":"5.625rem",//90px
        "8-5":"2.125rem",//34px
        "0-5":"0.125rem",//2px
      },
      colors:{
        "black1": "#141414",
        "gray1":"#CBCBCB",
        "gray2":"#545454",
        "gray3":"#EEEEEE",
        "blue1":"#0099FF",
        "blue2":"#D9F0FF",
        "pink1":"#9835FF",
        "pink2":"#F0E1FF",
        "red1":"#FF4F66",
        "red2":"#FFEDF0"
        
      }
    },
  },
  plugins: [],
};
