const fonts = {
  SimplerProBlack: 'SimplerPro_Leumi_H-Black',
  SimplerProBold: 'SimplerPro_Leumi_H-Bold',
  SimplerProLight: 'SimplerPro_Leumi_H-Light',
  SimplerProMedium: 'SimplerPro_Leumi_H-Medium',
  SimplerProRegular: 'SimplerPro_Leumi_H-Regular',
};

type Font = typeof fonts;
function getFonts(): Font {
  return fonts;
}

const FONTS = getFonts();

export default FONTS;
