/**
 * ----- CLASS ORDER
 *
 * When writing tailwind classes it makes sense to stick to a specific order to make it easier
 * to read and find stylings. The order should be like this:
 *
 * [position] [display] [heights/widths] [spacings] [all the rest]
 * followed by [selectors:] [breakpoints:]
 *
 * Example:
 * class="absolute top-0 left-0 h-20 w-full py-5 text-center text-sm hover:text-primary md:py-10"
 *
 *
 * ----- VS CODE EXTENTION
 *
 * Use Tailwind CSS IntelliSense extention for class completion!
 * https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss
 *
 *
 * ----- MIGRATION GUIDE
 *
 * Can be found on the bottom of this file.
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

const colors = {
  gray: {
    lightest: '#F9F9F9',
    light: '#E8E8E8',
    DEFAULT: '#797979',
    dark: '#161718',
  },
  'bluish-gray': {
    lightest: '#EAECEF',
    light: '#D6D9E0',
    DEFAULT: '#6B7486',
    dark: '#0C2047',
  },
  // TODO: remove after creating HighlightBox.vue component
  // green: {
  //   rgb: '132, 195, 23',
  // },
  // orange: {
  //   rbg: '245, 166, 35',
  // },
  // red: {
  //   rgb: '214, 73, 51',
  // },
};
  // TODO: remove after creating HighlightBox.vue component
// function getRgb(rgb, opacity = null) {
//   if (opacity === null) return `rgb(${rgb})`;

//   return `rgba(${rgb}, ${opacity})`;
// }

module.exports = {
  prefix: 'tw-',
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  purge: {
    content: [
      './public/**/*.html',
      './src/**/*.vue',
    ],
    safelist: [
      'fade-enter-active',
      'fade-leave-active',
      'fade-enter',
      'fade-leave-to',
    ],
  },
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
    },
    /**
     * Use components for styling: AkH1, AkH2, AkH3, AkH4, AkEyebrow
     * For styling body text you should use only XS, SM and BASE (which is default anyways).
     */
    fontSize: {
      '2xs': ['0.688rem', '0.875rem'], // ['11px', '14px']
      xs: ['0.75rem', '1rem'], // ['12px', '16px']
      sm: ['0.875rem', '1.25rem'], // ['14px', '20px']
      base: ['16px', '1.25rem'], // ['16px', '20px']
      lg: ['1.125rem', '1.25rem'], // ['18px', '20px']
      xl: ['1.75rem', '2.25rem'], // ['28px', '36px']
    },
    fontWeight: {
      normal: 400,
      heavy: 800,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
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
      green: '#84C317', // $colorSuccess, $colorCriticality2
      orange: '#F5A623', // $colorInfo, $colorCriticality3
      red: '#D64933', // $colorAlert, $colorCriticality4, $colorCriticality5, $colorCriticality6
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
        blue: '#226FFF', // $colorLink, same as dataprotection (defined in theme.css)
        gray: {
          DEFAULT: colors.gray, // $colorTextLight
          dark: colors.gray.dark, // $colorText
        },
        // TODO: remove after creating HighlightBox.vue component
        // green: getRgb(colors.green.rgb),
        // orange: getRgb(colors.info.rgb),
        // red: getRgb(colors.red.rgb),
      },
      backgroundColor: {
        yellow: '#E6D574', // $colorInfo, $colorComplementary, $colorHighlightBackground[opacity]
        gray: {
          lightest: colors.gray.lightest, // $colorBackground, $colorHoverBackgroundOnWhite
          light: colors.gray.light, // $colorActiveBackgroundOnWhite, $colorListHeadBackground
        },
        'bluish-gray': {
          dark: colors['bluish-gray'].dark, // $colorSurface
        },
        // TODO: remove after creating HighlightBox.vue component
        // red: getRgb(colors.red.rgb, 0.3),
        // 'red-solid': getRgb(colors.red.rgb, 0.04),
        // orange: getRgb(colors.orange.rgb, 0.3),
        // 'orange-solid': getRgb(colors.orange.rgb, 0.04),
        // green: getRgb(colors.green.rgb, 0.3),
        // 'green-solid': getRgb(colors.green.rgb, 0.04),
      },
      borderColor: {
        gray: {
          lightest: colors.gray.lightest, // $colorListColumnBorder
        },
        'bluish-gray': {
          lightest: colors['bluish-gray'].lightest, // $colorBorder
          light: colors['bluish-gray'].light, // $colorFormBorder, $colorListHeadColumnBorder
        },
        // TODO: remove after creating HighlightBox.vue component
        // red: getRgb(colors.red.rgb, 0.5),
        // orange: getRgb(colors.orange.rgb, 0.5),
        // green: getRgb(colors.green.rgb, 0.5),
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
        200: '50rem',
        '100vh': '100vh',
      },
      maxHeight: {
        '100vh': '100vh',
      },
      minWidth: {
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
        352: '88rem',
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

/**
 * --- MIGRATION GUIDE
 *
 *
 * -- FONTS
 *
 * We removed Light and Black fonts. Now only Roman (400) and Heavy (800)
 * can be used.
 *
 * We defined 4 Headlines + one Eyebrow and 3 body text sizes.
 *
 * - HEADLINES (old → new)
 *
 * H1 → removed
 * H2 → H1 (28px)
 * H3 → H2 (18px)
 * H4 → Eyebrow (11px)
 * H5 → H3 (16px)
 * Table Head → H4 (14px)
 *
 * - BODY
 * base (16px)
 * sm (14px)
 * xs (12px)
 *
 *
 * -- COLORS
 *
 * The old variable names are written next to the new color names.
 * Our 40 shades of gray have been reduced to 8 (gray and bluish-gray).
 *
 * If you can't map a color directly, just use the closest one or talk
 * to design department.
 *
 *
 * -- SPACINGS
 *
 * Spacings are defined in 4px steps.
 *
 *
 * -- BORDER WIDTH
 *
 * Use 2px for everything. If smth can't be mapped nicely talk to design
 * department.
 */
