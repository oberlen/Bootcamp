import { useSafeAreaInsets as RNSAuseSafeArea } from 'react-native-safe-area-context';
import { max } from 'lodash/fp';
import { ThemeSpacing } from './theme';
import { getNearestSizing } from './helpers';
import useTheme from './useTheme';

export default function useSafeAreaInsets(defaultSize?: ThemeSpacing): {
  top: ThemeSpacing;
  bottom: ThemeSpacing;
  right: ThemeSpacing;
  left: ThemeSpacing;
} {
  const { top, bottom, left, right } = RNSAuseSafeArea();
  const theme = useTheme();
  const min = theme.spacing[defaultSize ?? 'xxs'];

  return {
    top: getNearestSizing(theme, max([top, min])),
    bottom: getNearestSizing(theme, max([bottom, min])),
    left: getNearestSizing(theme, max([left, min])),
    right: getNearestSizing(theme, max([right, min])),
  };
}

// Usage
// const { left, right } = useSafeAreaInsets("m"); // "m" / "l"
// <Box paddingHorizontal={left} />
