import {
    createTheme,
    genPageTheme,
    lightTheme,
    shapes,
  } from '@backstage/theme';
  
  const myTheme = createTheme({
    palette: {
      ...lightTheme.palette,
      primary: {
        main: '#343b58',
      },
      secondary: {
        main: '#565a6e',
      },
      error: {
        main: '#8c4351',
      },
      warning: {
        main: '#8f5e15',
      },
      info: {
        main: '#34548a',
      },
      success: {
        main: '#485e30',
      },
      background: {
        default: '#ffffff',
        paper: '#ffffff', // #d5d6db
      },
      banner: {
        info: '#34548a',
        error: '#8c4351',
        text: '#343b58',
        link: '#565a6e',
      },
      errorBackground: '#8c4351',
      warningBackground: '#8f5e15',
      infoBackground: '#343b58',
      navigation: {
        background: '#343b58',
        indicator: '#8f5e15',
        color: '#d5d6db',
        selectedColor: '#ffffff',
      },
    },
    defaultPageTheme: 'home',
    fontFamily: 'Open Sans', // Lato
    /* below drives the header colors */
    pageTheme: {
      home: genPageTheme(['#8c4351', '#343b58'], shapes.wave),
      documentation: genPageTheme(['#8c4351', '#343b58'], shapes.wave2),
      tool: genPageTheme(['#8c4351', '#343b58'], shapes.round),
      service: genPageTheme(['#8c4351', '#343b58'], shapes.wave),
      website: genPageTheme(['#8c4351', '#343b58'], shapes.wave),
      library: genPageTheme(['#8c4351', '#343b58'], shapes.wave),
      other: genPageTheme(['#8c4351', '#343b58'], shapes.wave),
      app: genPageTheme(['#8c4351', '#343b58'], shapes.wave),
      apis: genPageTheme(['#8c4351', '#343b58'], shapes.wave),
    },
  });

  export default myTheme;