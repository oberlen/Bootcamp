import { useMemo } from 'react';
import { ViewStyle } from 'react-native';
import useTheme from './useTheme';

export default function useShadow(): ViewStyle {
  const theme = useTheme();

  return useMemo(
    () => ({
      shadowColor: theme.colors.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.55,
      shadowRadius: 3.84,

      elevation: 5,
    }),
    [theme],
  );
}
