import { createGlobalTheme } from '@vanilla-extract/css';

export const staticColors = {
  // GrayScale
  black: '#1a1a1a',
  gray5: '#444444',
  gray4: '#808080',
  gray3: '#bebebe',
  gray2: '#f0f0f0',
  gray1: '#f7f7f7',
  gray0: '#fafafa',
  white: '#ffffff',

  // MODAL
  modal: '#fffffe',

  // BACKGROUND
  // bg_primary: '#fffffe',
  // bg_secondary: '#fafafa',
  // bg_tertiary: '#f0f0f0',
  // BASE
  primary: '#6D55CF',
  primary_sub: '#8774d8',
  secondary: '#66659A',
  secondary_sub: '#d4cdf1',
  tertiary: '#2cb67d',
  tertiary_sub: '#7e69d5',

  // POINT
  point: '#2cb67d',
  point_sub: '#f99552',

  //DIM COLOR
  dim50: 'rgba(10, 10, 10, 0.5)',
  dim20: 'rgba(10, 10, 10, 0.2)',

  // ALERT
  warning: '#FF6060',
  warning_sub: '#ff8a8a',
  success: '#4575F5',
  error: '#FF3D00',
  info: '#429AEB',

  sidebar: '#242629',

  // BlueScale
  blue9: '#0C2C70',
  blue8: '#153F88',
  blue7: '#2159A9',
  blue6: '#3078CA',
  blue5: '#429AEB',
  blue4: '#6FBAF3',
  blue3: '#8DD0F9',
  blue2: '#B4E5FD',
  blue1: '#D9F4FE',

  // Gray Trans
  g_trans4: 'rgba(176, 179, 188, 0.7)',
  g_trans3: 'rgba(176, 179, 188, 0.5)',
  g_trnas2: 'rgba(176, 179, 188, 0.3)',
  g_trans1: 'rgba(176, 179, 188, 0.1)',

  // btn
  primary_btn: '#7f5af0',
  primary_pressed: '#8164F5',
  secondary_btn: '#464C53',
  secondary_pressed: '#26282B',
  tertiary_btn: '#E8EBED',
  tertiary_pressed: '#C9CDD2',

  disabled: '#E8EBED',
  disabled_text: '#9EA4AA',
  disabled_btn: '#E8EBED',

  // background
  bg: '#16161a',
  subBg: '#242629',

  // shadow
  shadow: '0 2px 8px rgb(0 0 0 / 15%)',
};

export const textColors = {
  text_base: staticColors.white,
  text_gray: staticColors.gray4,
  text_white: staticColors.white,
  text_disabled: staticColors.gray3,
  text_text: staticColors.gray3,
};

export const borderColors = {
  // border
  border: '#010101',
};

export const vars = createGlobalTheme(':root', {
  breakpoint: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
  },
  grid: {
    count: '12',
    gutter: '22px',
    padding: '15px',
  },
  space: {
    none: '0',
    s5: '5px',
    s10: '10px',
    s15: '15px',
    s20: '20px',
    s30: '30px',
    s40: '40px',
    s60: '60px',
    s80: '80px',
    s100: '100px',
  },
  borderRadius: {
    full: '9999px',
    sm: '5px',
    md: '10px',
    lg: '15px',
    xl: '20px',
  },
  fontFamily: {
    body: 'GmarketSansMedium, sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    untitled: 'Untitled Sans, apple-system, sans-serif',
    mono: 'Söhne Mono, menlo, monospace',
  },
  fontSize: {
    headline: '52px',
    h1: '32px',
    h2: '26px',
    h3: '20px',
    h4: '16px',
    body1: '14px',
    body2: '12px',
    body3: '11px',
    caption: '10px',
  },
  fontWeight: {
    bold: '700',
    semiBold: '500',
  },
  lineHeight: {},
  zIndices: {
    GNB: '1000',
    HEADER: '1000',
    DROPDOWN: '1001',
    CHECK_ICON: '11',
    CHECK_BOX: '10',
    TABLE_HEADER: '10',
    FIRST_DRAWER: '1002',
    SECOND_DRAWER: '1003',
    DRAWEROVERLAY: '1001',
    WIDGETINPUT: '1',
  },
  color: {
    ...staticColors,
    ...textColors,
    ...borderColors,
  },
});
