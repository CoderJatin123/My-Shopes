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
      'inter':'Inter',
      },  
         
      fontWeight:{
        regular:'400',
        medium:'500',
        semibold:'600',
        bold:'700'
      },
      
      colors:{

        primary:{
          DEFAULT:"#465775",
          dark:"#37445C",
        },
        secondary:{
          DEFAULT:"#56E39F",
          dark:"#49C288",
        },
        card:{
          DEFAULT:"#EEEEEE"
        },
        red:{
          light:"#FFE5E5"
        },

        button:{
          gray:'#54688C',
          light:'#47BA82',
          
        }
      ,
      }
    },
    
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
