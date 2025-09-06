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
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-up-delayed': 'fadeInUp 0.8s ease-out 0.2s forwards',
        'slide-in-horizontal': 'slideInHorizontal 1s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(30px) scale(0.95)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0) scale(1)' 
          },
        },
        slideInHorizontal: {
          '0%': { 
            opacity: '0', 
            transform: 'translateX(-100px) scale(0.95)' 
          },
          '50%': {
            opacity: '0.7',
            transform: 'translateX(10px) scale(1.02)'
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateX(0) scale(1)' 
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0px 4px 4px #d81c1e, 0 0 20px rgba(216, 28, 30, 0.3)' 
          },
          '50%': { 
            boxShadow: '0px 6px 8px #d81c1e, 0 0 30px rgba(216, 28, 30, 0.5)' 
          },
        },
        bounceGentle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-4px)' },
          '60%': { transform: 'translateY(-2px)' },
        },
      }
    }
  },
  plugins: []
};