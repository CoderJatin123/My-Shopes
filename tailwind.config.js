/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/components/**/*.{js,ts,jsx,tsx}",
    "./styles/**"
  ],
  theme: {
    extend: {
      fontFamily:{
        'open-sans':['Open Sans']
      },
      fontSize:{
        sm: ['15px', '21px'],
        base: ['16px', '24px'],
        lg: ['24px', '32px'],
        xl: ['32px', '38px'],
        '2xl':['42px','50px']
      },
      
      colors:{
        primary:{
          DEFAULT:"#465775",
          dark:"#37445C",
        },
        secondary:{
          DEFAULT:"#56E39F",
          dark:"#56E39F",
        },
      }
    },
    
  },
  plugins: [],
}
