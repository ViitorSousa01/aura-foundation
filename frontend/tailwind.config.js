module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}', 
    './lib/**/*.{js,ts,jsx,tsx}', 
    './public/**/*.html', 
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '0.75rem', 
        sm: '0.875rem', 
        base: '1rem', 
        lg: '1.125rem', 
        xl: '1.25rem', 
        '2xl': '1.5rem', 
        '3xl': '1.875rem', 
        '4xl': '2.25rem', 
        '5xl': '3rem',
      },
      spacing: {
        0: '0', 
        1: '0.25rem', 
        2: '0.5rem', 
        3: '0.75rem', 
        4: '1rem', 
        5: '1.25rem', 
        6: '1.5rem', 
        8: '2rem', 
        10: '2.5rem', 
        12: '3rem', 
        16: '4rem', 
        20: '5rem', 
        24: '6rem',
      },
      screens: {
        sm: '640px', 
        md: '768px', 
        lg: '1024px', 
        xl: '1280px', 
        '2xl': '1536px',
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'], // ou o nome correto da sua fonte
      },
    },
  },
  plugins: [],
};