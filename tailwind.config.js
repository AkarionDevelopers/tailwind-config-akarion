/**
 * Use Tailwind CSS IntelliSense extention for class completion!
 * https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss
 */

// https://tailwindcss.com/docs/customizing-colors#using-css-variables
function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

function getRgb(rgb, opacity = null) {
  if (opacity === null) return `rgb(${rgb})`;

  return `rgba(${rgb}, ${opacity})`;
}

const colors = {
  gray: {
    lightest: '#F9F9F9',
    light: '#E8E8E8',
    DEFAULT: '#757575',
    dark: '#161718',
  },
  'bluish-gray': {
    lightest: '#EAECEF',
    light: '#D6D9E0',
    DEFAULT: '#6B7486',
    dark: '#0C2047',
  },
};

const colorsRgb = {
  red: {
    rgb: '213, 65, 42',
  },
  orange: {
    rgb: '245, 166, 35',
  },
  green: {
    rgb: '132, 195, 23',
  },
};

module.exports = {
  prefix: 'tw-',
  content: [
    // ACC
    './public/**/*.html',
    './src/**/*.vue',
    // Nuxt projects
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  safelist: [
    'fade-enter-active',
    'fade-leave-active',
    'fade-enter',
    'fade-leave-to',

    // the following is used in MdChanges.vue
    'tw-bg-green-30',
    'tw-bg-red-30',
    'tw-line-through',
  ],
  theme: {
    /**
     * Stylings here are overwritten
     */
    screens: {
      sm: '480px',
      md: '900px',
      lg: '1200px',
      xl: '1800px',
    },
    fontFamily: {
      body: ['Avenir', 'sans-serif'],
      code: ['SFMono-Regular','Menlo','monospace'],
    },
    /**
     * Use components for styling: AkH1, AkH2, AkH3, AkH4, AkEyebrow
     * For styling body text you should use only XS, SM and BASE (which is default anyways).
     */
    fontSize: {
      xs: ['0.688rem', '0.875rem'], // ['11px', '14px']
      sm: ['0.75rem', '1rem'], // ['12px', '16px']
      base: ['0.875rem', '1.25rem'], // ['14px', '20px']
      md: ['1rem', '1.25rem'], // ['16px', '20px']
      lg: ['1.125rem', '1.25rem'], // ['18px', '20px']
      xl: ['1.75rem', '2.25rem'], // ['28px', '36px']
      'icon-xs': '0.75rem', // 12px
      'icon-sm': '0.875rem', // 14px
      'icon-base': '1.125rem', // 18px
      'icon-lg': '1.5rem', // 24px
      'icon-xl': '2.25rem', // 36px
    },
    fontWeight: {
      normal: 400,
      heavy: 800,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      primary: withOpacityValue('--tw-color-primary'),
      dataprotection: '#226FFF',
      informationsecurity: '#9E498B',
      riskmanagement: '#814141',
      businesscontinuity: '#212DC2',
      elearning: '#66B400',
      whistleblowing: '#006B90',
      audit: '#00A5AE',
      internalcontrols: '#006166',
      white: '#FFFFFF', // $colorBorderTransparent[opacity]
      red: getRgb(colorsRgb.red.rgb), // $colorAlert, $colorCriticality4 - 6
      orange: getRgb(colorsRgb.orange.rgb), // $colorInfo, $colorCriticality3
      green: getRgb(colorsRgb.green.rgb), // $colorSuccess, $colorCriticality2
    },
    boxShadow: {
      small: '0 2px 4px 0 rgba(22, 23, 24, 0.08)', // more or less everything with a white background (like papers, cards, tables, toc, top navigation)
      large: '0 4px 16px 0 rgba(22, 23, 24, 0.1)', // log in box, report, hover effect for papers/cards and table records
      sharp: '0 2px 8px 1px rgba(22, 23, 24, 0.2)', // dropdowns
    },
    borderRadius: {
      none: 0,
      DEFAULT: '4px',
      full: '9999px',
    },
    borderWidth: {
      DEFAULT: '1px',
      0: 0,
      2: '2px',
      4: '4px',
    },
    borderStyle: {
      solid: 'solid',
      none: 'none',
    },
    zIndex: {
      auto: 'auto',
      1: 1,
      5: 5,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      60: 60,
      70: 70,
      80: 80,
      90: 90,
      100: 100,
      200: 200,
    },
    extend: {
      /**
       * Stylings here are extended
       */
      textColor: {
        blue: '#0054F0', // $colorLink
        gray: {
          DEFAULT: colors.gray.DEFAULT, // Use for light text ($colorTextLight)
          dark: colors.gray.dark, // Use for default text ($colorText)
        },
      },
      backgroundColor: {
        'primary-10': 'rgb(var(--tw-color-primary) / 0.1)', // Use for hover background ($colorHoverBackgroundOnWhite)
        'primary-20': 'rgb(var(--tw-color-primary) / 0.2)', // Use for active/focus background ($colorActiveBackgroundOnWhite)
        yellow: '#E6D574', // $colorInfo, $colorComplementary, $colorHighlightBackground[opacity]
        gray: {
          lightest: colors.gray.lightest, // Use for standard background ($colorBackground)
        },
        'bluish-gray': {
          lightest: colors['bluish-gray'].lightest, // Use for gray background on standard background ($colorListHeadBackground)
          dark: colors['bluish-gray'].dark, // Use for dark background ($colorSurface)
        },
        'red-5': getRgb(colorsRgb.red.rgb, 0.05), // $colorAlertBackground
        'red-30': getRgb(colorsRgb.red.rgb, 0.3), // $colorAlertBackgroundSolid
        'orange-5': getRgb(colorsRgb.orange.rgb, 0.05), // $colorInfoBackground
        'orange-30': getRgb(colorsRgb.orange.rgb, 0.3), // $colorInfoBackgroundSolid
        'green-5': getRgb(colorsRgb.green.rgb, 0.05), // $colorSuccessBackground
        'green-30': getRgb(colorsRgb.green.rgb, 0.3), // $colorSuccessBackgroundSolid
      },
      borderColor: {
        gray: {
          dark: colors.gray.dark, // Use for dark borders
        },
        'bluish-gray': {
          lightest: colors['bluish-gray'].lightest, // Use for standard border ($colorBorder, $colorListColumnBorder)
          light: colors['bluish-gray'].light, // Use for border on bluish-gray-lightest background ($colorFormBorder, $colorListHeadColumnBorder)
        },
        'red-50': getRgb(colorsRgb.red.rgb, 0.5), // $colorAlertBorder
        'orange-50': getRgb(colorsRgb.orange.rgb, 0.5), // $colorInfoBorder
        'green-50': getRgb(colorsRgb.green.rgb, 0.5), // $colorSuccessBorder
      },
      placeholderColor: {
        gray: {
          dark: colors.gray.dark,
        },
      },
      spacing: {
        88: '22rem',
        104: '26rem',
        120: '30rem',
        128: '32rem',
        144: '36rem',
        176: '44rem',
        200: '50rem',
        352: '88rem',
      },
      height: {
        '100vh': '100vh',
      },
      minHeight: {
        40: '10rem',
        60: '15rem',
        80: '20rem',
        88: '22rem',
        120: '30rem',
        200: '50rem',
        '100vh': '100vh',
      },
      maxHeight: {
        '100vh': '100vh',
      },
      minWidth: {
        20: '5rem',
        40: '10rem',
        60: '15rem',
        80: '20rem',
        88: '22rem',
        176: '44rem',
      },
      maxWidth: {
        40: '10rem',
        60: '15rem',
        72: '18rem',
        80: '20rem',
        88: '22rem',
        96: '24rem',
        104: '26rem',
        120: '30rem',
        128: '32rem',
        144: '36rem',
        200: '50rem',
        280: '70rem',
        352: '88rem',
      },
      listStyleType: {
        'lower-latin': 'lower-latin',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        },
        'slide-in': {
          '0%': { transform: 'translateX(50px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 200ms',
        'slide-in': 'slide-in 200ms',
      },
    },
    configViewer: {
      themeReplacements: {
        'var(--colorPrimary)': 'rgb(213, 0, 50)', // use akarion red as default
      },
    },
  },
  plugins: [],
};
