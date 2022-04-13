import React, { memo, useContext } from 'react';
import { PixelRatio, Platform, Text as RNText, View } from 'react-native';
import { getOr, omit } from 'lodash/fp';
import { getComputedTextProps, TextProps } from './helpers';
import ThemeContext from './context';

import { defaultFont, defaultSize } from './theme';
import FONTS from '~/constants/fonts';

function Text(props: TextProps) {
  const $theme = useContext(ThemeContext);
  const $props = getComputedTextProps(props, $theme);
  const {
    style,
    children,
    amount,
    numberOfLines,
    accessibilityLiveRegion,
    testID,
  } = props;
  const fontSize = getOr(style?.fontSize ?? defaultSize, 'fontSize', $props);
  let font = getOr(style?.fontFamily ?? defaultFont, 'fontFamily', $props);
  const fontWeight = getOr(style?.fontWeight, 'fontWeight', $props);

  if ($theme === null) {
    throw new Error('No context provided');
  }
  const omitArr = ['fontSize'];
  if (Platform.OS === 'android' && !amount) {
    omitArr.push('fontWeight');
  }

  const $base = omit(omitArr, { ...$props, ...style });

  if (amount) {
    return (
      <View
        testID={testID}
        accessibilityLabel={`${amount.value} ${amount.mark}`}
        style={{
          flexDirection: 'row',
          alignItems: Platform.select({ ios: 'flex-end', default: 'baseline' }),
        }}>
        <Text
          style={{
            ...$base,
            paddingRight: PixelRatio.roundToNearestPixel(fontSize * 0.1),
            paddingBottom: PixelRatio.roundToNearestPixel(fontSize * 0.08),
            fontSize: fontSize * 0.7,
          }}>
          {`${amount.mark}`}
        </Text>
        <Text
          style={{
            ...$base,
            fontSize,
          }}>
          {amount.value}
        </Text>
      </View>
    );
  }

  if (
    !!fontWeight &&
    fontWeight !== 'normal' &&
    Platform.OS === 'android' &&
    font === FONTS.SimplerProRegular
  ) {
    font = FONTS.SimplerProBold;
  }

  return (
    <RNText
      testID={testID}
      numberOfLines={numberOfLines}
      accessibilityLiveRegion={accessibilityLiveRegion}
      allowFontScaling={false}
      style={{
        ...$base,
        fontSize,
        fontFamily: font,
        // in IOS we need to override the textAlign to `right`
        textAlign: Platform.select({
          default: $base.textAlign,
          ios: $base.textAlign ?? 'right',
        }),
      }}>
      {children}
    </RNText>
  );
}

export default memo(Text);
