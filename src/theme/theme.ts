import Fonts from '~/constants/fonts';

const palette = {
  defaultBackground: '#eeeeee',
  defaultBackgroundTransparent: '#eeeeee00',
  dodgerblue: '#4d8ff7',
  darkgrey: '#1d1d20',
  blueygrey: '#a2a2a4',
  slategrey: '#5d5d67',
  tomato: '#dc1919',
  greenyblue: '#39ac95',
  offwhite: '#f4f5f9',
  white: '#ffffff',
  blackWithOpacity: 'rgba(93, 93, 103, 0.75)',
  transparent: 'rgba(0, 0, 0, 0)',
  whiteWithOpacity: 'rgba(255, 255, 255, 0.8)',
  slategreyWithOpacity: 'rgba(93, 93, 103, 0.13)',
  greyWithOpacity: 'rgba(234, 235, 238, 0.5);',
  greyFullOpacity: 'rgba(234, 235, 238, 0);',
  blueygreyWithOpacity: 'rgba(162, 162, 164, 0.15)',
  lightgreyWithOpacity: 'rgba(169,176,187,0.15)',
  greyWithLowOpacity: 'rgba(192,194,206,0.13)',
  lightGrey: '#f8f9fd',
  grey: '#eee',
  tealish: '#22a6a6',
  blueblack: '#1d1d1f',
  grey2: '#ececec',
  coolGrey: '#a9b0bb',
  darkGreyTwo: '#1d1d1f',
  paleGrey: '#e7ebf1',
  cloudyBlue: '#c1cad7',
  purple: '#9477e8',
  lightBlue: '#90bbff',
  leumiBlue: '#297afa',
  darkBlue: '#7753e5',
  lightblueGray: '#dbe9fd',
  textFieldBackground: 'rgba(236, 236, 236, 0.32)',
  lightgrayWhite: '#f5f4f4',
};

export const defaultFont = Fonts.SimplerProRegular;
export const defaultSize = 14;

const variants = {
  base: {
    fontFamily: defaultFont,
    fontWeight: 'normal',
    fontSize: defaultSize,
    textAlign: 'right',
    color: 'dark',
  },
};

const theme = {
  colors: {
    defaultBackground: palette.defaultBackground,
    defaultBackgroundTransparent: palette.defaultBackgroundTransparent,
    mainBackground: palette.offwhite,
    dark: palette.darkgrey,
    white: palette.white,
    slateGrey: palette.slategrey,
    grey: palette.darkgrey,
    main: palette.dodgerblue,
    navigationTabs: palette.white,
    noColor: palette.transparent,
    warning: palette.tomato,
    positive: palette.greenyblue,
    greyBorder: palette.slategreyWithOpacity,
    lightGreyBorder: palette.greyWithOpacity,
    blueGreyBorder: palette.blueygreyWithOpacity,
    lightGreySeparator: palette.lightgreyWithOpacity,
    greyWithLowOpacity: palette.greyWithLowOpacity,
    headerBackground: palette.whiteWithOpacity,
    headerTransparent: palette.greyFullOpacity,
    modalOverlay: palette.blackWithOpacity,
    skeleton: palette.lightGrey,
    skeletonEffect: palette.grey,
    tealish: palette.tealish,
    black: palette.blueblack,
    greyBg: palette.grey2,
    coolGrey: palette.coolGrey,
    darkGrey2: palette.darkGreyTwo,
    paleGrey: palette.paleGrey,
    cloudyBlue: palette.cloudyBlue,
    unreadCounter: palette.purple,
    lightDot: palette.lightBlue,
    leumiBlueDot: palette.leumiBlue,
    darkBlueDot: palette.darkBlue,
    progressBackground: palette.lightblueGray,
    textFieldBackground: palette.textFieldBackground,
    cancel: palette.lightgrayWhite,
  },
  spacing: {
    xxs: 2,
    xs: 4,
    s: 8,
    m: 12,
    l: 16,
    xl: 24,
    xxl: 32,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    cardHolderName: {
      ...variants.base,
      color: 'grey',
      fontSize: 11,
    },
    tabRoute: {
      ...variants.base,
      fontSize: 12,
      fontWeight: 'bold',
    },
    comment: {
      ...variants.base,
      fontSize: 13,
    },
    accountItem: {
      ...variants.base,
      fontSize: 14,
      fontWeight: '600',
    },
    accountItemSelected: {
      ...variants.base,
      fontSize: 14,
      fontWeight: 'bold',
    },
    tab: {
      ...variants.base,
      fontSize: 14,
      fontWeight: 'bold',
    },
    collapseText: {
      ...variants.base,
      color: 'grey',
      fontSize: 14,
    },
    creditLinesTitleText: {
      ...variants.base,
      color: 'darkGrey2',
      fontSize: 14,
      fontWeight: 'bold',
    },
    creditLinesBodyText: {
      ...variants.base,
      color: 'darkGrey2',
      fontSize: 14,
    },
    button: {
      ...variants.base,
      fontSize: 15,
      fontWeight: 'bold',
      color: 'white',
    },
    buttonMore: {
      ...variants.base,
      fontSize: 15,
      fontWeight: 'bold',
      color: 'main',
    },
    collapseTitle: {
      ...variants.base,
      fontSize: 16,
      color: 'grey',
    },
    editAccount: {
      ...variants.base,
      fontSize: 16,
    },
    header: {
      ...variants.base,
      fontSize: 16,
      fontWeight: '600',
    },
    goodies: {
      ...variants.base,
      fontSize: 16,
      fontWeight: '600',
      textAlign: 'right',
    },
    accountName: {
      ...variants.base,
      fontWeight: 'bold',
      fontSize: 16,
    },
    editInput: {
      ...variants.base,
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: 'right',
    },
    actionTitle: {
      ...variants.base,
      fontWeight: 'normal',
      fontSize: 16,
      textAlign: 'right',
    },
    progressBarNumber: {
      ...variants.base,
      fontWeight: 'bold',
      fontSize: 14,
      textAlign: 'right',
    },
    insightText: {
      ...variants.base,
      fontWeight: '600',
      fontSize: 20,
    },
    accountTitle: {
      ...variants.base,
      fontSize: 20,
      fontWeight: 'bold',
    },
    title: {
      ...variants.base,
      fontWeight: 'bold',
      fontSize: 24,
    },
    h1: {
      ...variants.base,
      fontWeight: 'bold',
      fontSize: 22,
    },
    h2: {
      ...variants.base,
      fontWeight: 'bold',
      fontSize: 18,
    },
    h3: {
      ...variants.base,
      fontWeight: 'bold',
      fontSize: 16,
    },
    h4: {
      ...variants.base,
      fontWeight: 'bold',
      fontSize: 14,
    },
    failure: {
      ...variants.base,
      color: 'warning',
      fontSize: 14,
    },
    noResultsTitle: {
      ...variants.base,
      color: 'dark',
      fontSize: 16,
    },
    noResultsDescription: {
      ...variants.base,
      color: 'grey',
      textAlign: 'center',
      fontSize: 14,
    },
    link: {
      ...variants.base,
      paddingEnd: 'xxs',
      color: 'main',
      fontWeight: 'bold',
      fontSize: 16,
    },
    listHeader: {
      ...variants.base,
      fontSize: 16,
      fontWeight: '600',
      textAlign: 'right',
    },
    ratesTableItem: {
      ...variants.base,
      textAlign: 'right',
      fontSize: 12,
      color: 'darkGrey2',
    },
    pageHeader: {
      ...variants.base,
      fontSize: 18,
      color: 'black',
      fontWeight: 'bold',
    },
    promotionTitle: {
      ...variants.base,
      fontSize: 20,
      color: 'dark',
      fontWeight: 'bold',
    },
  },
};

export type Theme = typeof theme;
export type ThemeSpacing = keyof typeof theme.spacing;
export type ThemeVariant = keyof typeof theme.textVariants;
export type ThemeColor = keyof typeof theme.colors;

export default theme;
