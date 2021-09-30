/* eslint-disable import/no-extraneous-dependencies */
/* istanbul ignore file */

const plugin = require("tailwindcss/plugin");

/**
 * Include this file in other apps using presets
 * https://tailwindcss.com/docs/presets
 *
 * module.exports = {
 *   presets: [
 *     require('@shc/component-library/tailwind.config')
 *   ],
 *   theme: ...
 * }
 */

module.exports = {
  purge: [],
  // prefix: "scl-", // must write all classes with this prefix

  // This feature is not ready for prod yet. Stay updated with latest bug patches in Tailwind.
  // "Just in time" mode is in preview but works well. Saves 5 seconds at build,
  // smaller files, and ensures we don't get caught with by any css purge issues in prod.
  // https://tailwindcss.com/docs/just-in-time-mode

  // mode: 'jit',

  // TODO: The reset (preflight) futz with sharp.com styles when loaded last
  // https://tailwindcss.com/docs/preflight#extending-preflight
  preflight: false,
  darkMode: false,
  // Any key (besides "extend") under "theme" completely replace the default theme from tailwind
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: "var(--theme-border-radius-base)", // 5px if base font-size is 16px
        none: "0px",
        full: "9999px",
      },
      boxShadow: {
        DEFAULT: "var(--theme-shadow-box-base)",
        checkboxFocus: "var(--theme-color-primary)",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "link-dark": "#3e6d85",
        primary: "var(--theme-color-primary)",
        "primary-dark": "var(--theme-color-primary-dark)",
        secondary: "var(--theme-color-secondary)",
        "secondary-dark": "var(--theme-color-secondary-dark)",
        "accent-1": "var(--theme-color-accent-1)",
        "accent-1-dark": "var(--theme-color-accent-1-dark)",
        "accent-2": "var(--theme-color-accent-2)",
        "accent-2-dark": "var(--theme-color-accent-2-dark)",
        "accent-3": "var(--theme-color-accent-3)",
        "accent-3-dark": "var(--theme-color-accent-3-dark)",
        "accent-4": "var(--theme-color-accent-4)",
        "accent-4-dark": "var(--theme-color-accent-4-dark)",
        "gray-50": "var(--theme-color-gray-50)",
        "gray-100": "var(--theme-color-gray-100)",
        "gray-200": "var(--theme-color-gray-200)",
        "gray-700": "var(--theme-color-gray-700)",
        "gray-800": "var(--theme-color-gray-800)",
        "gray-900": "var(--theme-color-gray-900)",
        info: "var(--theme-color-info)",
        success: "var(--theme-color-success)",
        warning: "var(--theme-color-warning)",
        danger: "var(--theme-color-danger)",
        muted: "var(--theme-color-muted)",
        link: "var(--theme-color-link)",
        heading: "var(--theme-color-heading)",
        // These functions enable rgba opacities necessary for overlays
        white: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--theme-color-white-rgb), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--theme-color-white-rgb), var(${opacityVariable}, 1))`;
          }
          return `rgb(var(--theme-color-white-rgb))`;
        },
        black: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--theme-color-black-rgb), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--theme-color-black-rgb), var(${opacityVariable}, 1))`;
          }
          return `rgb(var(--theme-color-black-rgb))`;
        },
      },
      fill: (theme) => ({
        current: theme("colors.current"),
        "accent-1": theme("colors[accent-1]"),
        "gray-700": theme("colors[gray-700]"),
        "gray-900": theme("colors[gray-900]"),
        primary: theme("colors.primary"),
        warning: theme("colors.warning"),
      }),
      fontSize: {
        xs: [
          "var(--theme-font-size-xs)",
          { lineHeight: "var(--theme-font-size-xs-line-height)" },
        ],
        sm: [
          "var(--theme-font-size-sm)",
          { lineHeight: "var(--theme-font-size-sm-line-height)" },
        ],
        base: [
          "var(--theme-font-size-base)",
          { lineHeight: "var(--theme-font-size-base-line-height)" },
        ],
        lg: [
          "var(--theme-font-size-lg)",
          { lineHeight: "var(--theme-font-size-lg-line-height)" },
        ],
        xl: [
          "var(--theme-font-size-xl)",
          { lineHeight: "var(--theme-font-size-xl-line-height)" },
        ],
        "2xl": [
          "var(--theme-font-size-2xl)",
          { lineHeight: "var(--theme-font-size-2xl-line-height)" },
        ],
        "3xl": [
          "var(--theme-font-size-3xl)",
          { lineHeight: "var(--theme-font-size-3xl-line-height)" },
        ],
        "4xl": [
          "var(--theme-font-size-4xl)",
          { lineHeight: "var(--theme-font-size-4xl-line-height)" },
        ],
      },
      fontFamily: {
        sans: [
          "Montserrat",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      fontWeight: {
        light: "var(--theme-font-weight-light)", // aka regular (400)
        normal: "var(--theme-font-weight-normal)", // aka medium (500)
        semibold: "var(--theme-font-weight-semibold)", // (600)
        bold: "var(--theme-font-weight-bold)", // (700)
      },
      gridTemplateColumns: {
        "faq-mobile": "11fr 1fr",
        accordion: "65px 9fr 40px",
        checklist: "1fr 11fr",
        getCarePromo: "8fr 4fr",
      },
      gridTemplateRows: {
        "three-image": "auto auto",
      },
      screens: {
        xs: "var(--breakpoint-xs)",
        sm: "var(--root-breakpoint-sm)",
        "3xl": "var(--breakpoint-3xl)",
        print: { raw: "print" }, // => @media print { ... }
      },
      transitionDuration: {
        DEFAULT: "var(--theme-transition-duration-base)",
      },
      transitionTimingFunction: {
        DEFAULT: "var(--theme-transition-timing-function-base)",
      },
      // Any key here does a deep merge with the default theme from tailwind
      // Ensuring we have line height consistency for the utility classes
      lineHeight: {
        normal: "var(--theme-font-size-base-line-height)",
        3: "var(--theme-font-size-xs-line-height)",
        6: "var(--theme-font-size-sm-line-height)",
        7: "var(--theme-font-size-base-line-height)",
        8: "var(--theme-font-size-xl-line-height)",
        9: "var(--theme-font-size-2xl-line-height)",
        10: "var(--theme-font-size-3xl-line-height)",
        11: "var(--theme-font-size-4xl-line-height)",
      },
      // Add custom spacing hacks for that pixel perfect render!
      spacing: {
        1.25: "0.3125rem", // 5px; eg: small button with outline
        2.25: "0.5625rem", // 9px; eg: medium button with outline
        4.5: "1.1875rem", // 19px; eg: large button with outline
        18.75: "18.75rem", // 300px; eg: size of button on getCare promo
        19: "4.875rem", // 78px; eg: The size of the 78 X 78 ProfilePicture
        25: "6.25rem", // 100px; eg: size of three promo icon mobile, ProfilePicture 100 x 100
        36.375: "9.375rem", // 150px; eg: size of three promo icon LG
        46.5: "11.563rem", // 185px; eg: The size of the 185 X 185 ProfilePicture
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked", "even", "odd", "active"],
      appearance: ["checked"],
      textColor: ["checked"],
      outline: ["checked", "focus", "active"],
      opacity: ["disabled"],
      transitionTimingFunction: ["checked", "focus", "active"],
    },
  },
  plugins: [
    // Add a text-shadow util (automatically respects prefix)
    plugin(({ addUtilities }) =>
      addUtilities(
        {
          ".text-shadow": {
            "text-shadow": "var(--theme-shadow-text-base)",
          },
        },
        ["responsive", "hover"]
      )
    ),
  ],
};
