module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',   
      md: '768px',    
      lg: '1024px',   
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        // Primary text colors
        text: {
          primary: "var(--text-primary)",
          accent: "var(--text-accent)",
          light: "var(--text-light)"
        },
        // Background colors
        background: {
          dark: "var(--bg-dark)",
          light: "var(--bg-light)",
          white: "var(--bg-white)"
        },
        // Border colors
        border: {
          dark: "var(--border-dark)",
          'dark-opacity': "var(--border-dark-opacity)"
        },
        // Component-specific colors
        header: {
          text: "var(--header-text)",
          accent: "var(--header-accent)"
        },
        footer: {
          background: "var(--footer-bg)"
        },
        link: {
          text: "var(--link-text)"
        }
      },
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'md': 'var(--font-size-md)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)'
      },
      fontWeight: {
        'light': 'var(--font-weight-light)',
        'normal': 'var(--font-weight-normal)',
        'semibold': 'var(--font-weight-semibold)',
        'bold': 'var(--font-weight-bold)'
      },
      lineHeight: {
        'xs': 'var(--line-height-xs)',
        'sm': 'var(--line-height-sm)',
        'md': 'var(--line-height-md)',
        'lg': 'var(--line-height-lg)',
        'xl': 'var(--line-height-xl)',
        '2xl': 'var(--line-height-2xl)',
        '3xl': 'var(--line-height-3xl)',
        '4xl': 'var(--line-height-4xl)',
        '5xl': 'var(--line-height-5xl)'
      },
      letterSpacing: {
        'tight': 'var(--letter-spacing-tight)',
        'normal': 'var(--letter-spacing-normal)',
        'wide': 'var(--letter-spacing-wide)',
        'wider': 'var(--letter-spacing-wider)'
      },
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)'
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)'
      },
      borderWidth: {
        'thin': 'var(--border-width-thin)'
      },
      fontFamily: {
        'anton': ['Anton', 'sans-serif'],
        'homenaje': ['Homenaje', 'sans-serif'],
        'instrument': ['Instrument Sans', 'sans-serif'],
        'kaisei': ['Kaisei Decol', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'open': ['Open Sans', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'oxygen': ['Oxygen', 'sans-serif']
      }
    }
  },
  plugins: []
};