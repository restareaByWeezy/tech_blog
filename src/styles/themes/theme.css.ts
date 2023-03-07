import { createTheme } from '@vanilla-extract/css';

//FIX: NOT WORKING PROPERLY
export const [lightTheme, themeVars] = createTheme({
  color: {
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
    modal: '#ffffff',

    // BACKGROUND
    bg_primary: '#ffffff',
    bg_secondary: '#fafafa',
    bg_tertiary: '#f0f0f0',
  },
});

export const darkTheme = createTheme(themeVars, {
  color: {
    // GrayScale - Dark mode
    white: '#444444',
    gray0: '#535353',
    gray1: '#585858',
    gray2: '#808080',
    gray3: '#a7a7a7',
    gray4: '#bebebe',
    gray5: '#ebebeb',
    black: '#ffffff',

    // MODAL - Dark mode
    modal: '#444444',

    // BACKGROUND - Dark mode
    bg_primary: '#363636',
    bg_secondary: '#2b2b2b',
    bg_tertiary: '#1a1a1a',
  },
});
