/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        slide:{
          '0%':{transform: ' translateX(0)'},
          '100%':{transform: 'translateX(-100%)'}
        }
      },
      animation:{
        'slider': 'slide 40s linear infinite'
      }
    },
    colors:{
      pri: '#FAD007',
      dark:'#000000',
      white:'#FFFFFF',
      sec:'#39393B',
    },
    backgroundImage:{
      radialHome:"radial-gradient(68.97% 53.76% at 55.18% 39.85%, #5A5B09 0%, #000 62.49%);"
    }
  },
  plugins: [],
}
