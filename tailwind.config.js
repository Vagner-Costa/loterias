/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '0px':'0px',
        '1px':'1px',
        '2px':'2px',
        '5px':'5px',
        '7px':'7px',
        '8px':'8px',
        '10px':'10px',
        '15px':'15px',
        '20px':'20px',
        '25px':'25px',
        '30px':'30px',
        '35px':'35px',
        '40px':'40px',
        '45px':'45px',
        '50px':'50px',
        '55px':'55px',
        '60px':'60px',
        '70px':'70px',
        '80px':'80px',
        '90px':'90px',
        '100px':'100px',
      },
      fontSize:{
        '16px':'16px',
        '18px':'18px',
        '20px':'20px',
        '22px':'22px',
        '24px':'24px',
        '25px':'25px',
        '28px':'28px',
        '30px':'30px',
        '35px':'35px',
      },
    },
    colors:{
      'megaSena': '#00AB5C',
      'duplaSena':'#A20E28',
      'quina':'#1C1C50',
      'lotofacil':'#51093B',
      'preto': '#000',
      'branco':'#fff',
      'vermelho':'#A20E28',
      'amarelo':'#FAF6DB',
      'azul': '#0953B6',
    },
    fontFamily:{
      titulo: ["Tilt Warp", 'sans-serif']
    }
  },
  plugins: [],
}

