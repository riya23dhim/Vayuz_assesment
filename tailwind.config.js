// tailwind.config.js

export default {
    content: ['./src/@syncfusion/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
      fontFamily: {
        display: ['Inter','Open Sans', 'sans-serif'],
        body: ['Inter','Open Sans', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      extend: {
        keyframes: {
            swirl: {
              '0%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
              '100%': { backgroundPosition: '0% 50%' },
            }
          },
          animation: {
            swirl: 'swirl 5s ease infinite',
          },
        colors: {
            // Base shades
            background: "#0E0E0E",     
            border: "#2C2C2C",         // Soft separators
    
            
    
            
           //if req
            code: {
              blue: "#61AFEF",
              green: "#98C379",
              yellow: "#E5C07B",
              red: "#E06C75",
            } },
        fontSize: {
          14: '14px',
        },
        backgroundColor: {
         


          'main-bg': '#FAFBFB',
          'main-dark-bg': '#20232A',
          'secondary-dark-bg': '#33373E',
          'light-gray': 'red',
          'half-transparent': 'rgba(0, 0, 0, 0.5)',
        },
        borderWidth: {
          1: '1px',
        },
        borderColor: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        width: {
          400: '400px',
          760: '760px',
          780: '780px',
          800: '800px',
          1000: '1000px',
          1200: '1200px',
          1400: '1400px',
        },
        height: {
          80: '80px',
        },
        minHeight: {
          590: '590px',
        },
       
      },
    },
    plugins: [require('tailwind-scrollbar-hide')],

  };
  