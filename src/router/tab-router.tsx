import { Box, Text } from '~/theme';
import {
  NavigationContainer,
  useNavigation,
  useNavigationContainerRef,
  useNavigationState,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { RootNavigation } from '~/@types/navigation';
import { ROUTES } from '~/@types/common';
import Main from '~/screens/feed';
import messageDetail from '~/screens/feed/MessagesArea/messageDetail';

function noop() {
  return null;
}

const Router = (): JSX.Element => {
  const navigationRef = useNavigationContainerRef();
  const Root = createStackNavigator<RootNavigation>();
  return (
    <NavigationContainer ref={navigationRef}>
      <Root.Navigator screenOptions={{ presentation: 'modal', header: noop }}>
        <Root.Screen name={ROUTES.MAIN} component={Main} />
        <Root.Screen name={ROUTES.MESSAGEDETAIL} component={messageDetail}/>
      </Root.Navigator>
    </NavigationContainer>
  );
};
export default Router;


