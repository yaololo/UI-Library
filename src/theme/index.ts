const easeInSwift = "cubic-bezier(0.900,  0.000, 0.450, 1.000)";
const easeOutSwift = "cubic-bezier(0.550,  0.000, 0.100, 1.000)";
// const easeInOutSwift = "cubic-bezier(0.900,  0.000, 0.100, 1.000)";

const theme = {
  timings: {
    enter: easeOutSwift,
    leave: easeInSwift
  },
  colors: {
    transparent: "transparent",
    brandPrimary: "#00adef",

    buttonPrimary: "#00adef",
    buttonPrimaryHover: "#0088c6",
    buttonPrimaryPressed: "#009ed8",
    buttonPrimaryOutlineDark: "#4a90e2",
    buttonPrimaryOutlineLight: "#57cdf5",

    backgroundLight: "#ececec",
    backgroundLightSecondary: "#f8f8f8",
    backgroundDark: "#333333",
    backgroundDarkSecondary: "#1f1f1f",
    backgroundBrandPrimary: "#009ed8",
    backgroundGrey: "#666",
    backgroundDivider: "#696969",
    backgroundError: "#fbf5f5",
    backgroundSuccess: "#e3ffea",
    backgroundLightGrey: "#d8d8d8",

    borderLight: "#bfbfbf",
    borderLightOpacity: "#00000116",
    borderDark: "#1f1f1f",
    borderTableDark: "#333333",
    borderSilver: "#464646",
    borderGrey: "#DDDDDD",

    textGrey: "#999",
    textDark: "#212529",
    textBrand: "#00adef",
    textWhiteOpacity: "#ffffff48",

    white: "#ffffff",
    grey1: "#f8f8f8",
    grey2: "#f4f4f4",
    grey3: "#ececec",
    grey4: "#e5e5e5",
    grey5: "#bfbfbf",
    grey6: "#999999",
    grey7: "#767676",
    grey8: "#666666",
    grey9: "#333333",
    grey10: "#262626",
    grey11: "#1f1f1f",
    grey12: "#848484",
    grey13: "#3c3c3c",
    grey14: "#424242",
    grey15: "#232323",
    black: "#000000",
    red: "#e60003",
    orange: "#f55523",
    green: "#67c500",
    red1: "#e02020",
    green1: "#6dd400",
    yellow1: "#f7b500",
    ok: "#008a00",
    caution: "#ffbf00",
    error: "#e1292b",

    customizedOrange: "#EFC231"
  },
  fontFamily: {
    primary: "MBCorpo Text",
    secondary: "MBCorpo Title"
  },
  fontSize: {
    xxl: "78px",
    xl: "64px",
    l: "48px",
    m: "34px",
    xm: "32px",
    s: "24px",
    xs: "20px",
    xxs: "16px",
    xxxs: "14px",
    xxxxs: "12px",
    smallest: "10px"
  },
  spacing: {
    small: {
      xxxs: "0.25rem",
      xxs: "0.5rem",
      xs: "1rem",
      s: "1.5rem",
      m: "2rem",
      xm: "2.4rem",
      l: "3rem",
      xl: "4rem",
      xxl: "5rem"
    },
    medium: {
      xxxs: "0.25rem",
      xxs: "0.5rem",
      xs: "1.5rem",
      s: "2rem",
      m: "3rem",
      l: "4rem",
      xl: "5rem",
      xxl: "5.5rem"
    },
    large: {
      xxxs: "0.25rem",
      xxs: "0.5rem",
      xs: "1.5rem",
      s: "2rem",
      m: "3rem",
      l: "4.5rem",
      xl: "5.5rem",
      xxl: "6rem"
    },
    wb: {
      xxs: "var(--wb2-spacing-scale-xxs)",
      xs: "var(--wb2-spacing-scale-xs)",
      s: "var(--wb2-spacing-scale-s)",
      m: "var(--wb2-spacing-scale-m)",
      l: "var(--wb2-spacing-scale-l)"
    }
  },
  fontWeight: {
    bold: "600"
  },
  breakpoints: {
    ipad: {
      portrait: "768px",
      landscape: "1024"
    },
    desktop: "1024px"
  },
  mediaQueries: {
    ipad: `@media only screen
      and (min-width: 768px)
      and (max-width: 1024px)`,
    ipadProPortrait: `@media only screen
      and (min-width: 834px)
      and (max-width: 834px)
      and (orientation: portrait)`,
    ipadProLandscape: `@media only screen
      and (min-width: 1024px)
      and (max-width: 1112px)
      and (orientation: landscape)`,
    ipadProLargePortrait: `@media only screen
      and (min-width: 1024px)
      and (max-width: 1024px)
      and (orientation: portrait)`,
    ipadProLargeLandscape: `@media only screen
      and (min-width: 1112px)
      and (max-width: 1366px)
      and (orientation: landscape)`,
    desktop: `@media only screen
      and (min-width: 1200px)
      and (max-width: 1680px)
      and (orientation: landscape)`,
    desktopRetina: `@media only screen
      and (min-width: 1200px)
      and (max-width: 1680px)
      and (min-resolution: 192dpi)`,
    desktopLarge: `@media only screen
      and (min-width: 1681px)`
  },
  zIndex: {
    base: "0",
    stack1: "1",
    stack2: "2",
    stack3: "3",
    dropdownMenu: "4",
    formActionHeader: "5",
    breadCrumbIndex: "999",
    modal: "1000",
    sessionModal: "1001",
    toastMessage: "10000",
    roof: "9999",
    pageLoader: "10000"
  },
  opacity: {
    overlay: "0.6"
  },
  containerWidth: "1300px",
  flex: {
    justifyContent: {
      center: "center",
      spaceBetween: "space-between"
    }
  }
};

export default theme;
