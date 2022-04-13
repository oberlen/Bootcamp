import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { SCREENS } from '~/constants/strings';
import { getIsShowBtn } from '~/selectors';
import { useDispatch } from '~/store';
import { Box, Text } from '~/theme';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import General from './generalArea/general';
import CreditCards from './creditCardsArea/creditCard';
import Messages from './MessagesArea/messages';

const Tab = createMaterialTopTabNavigator();

const Main = (): JSX.Element => {
  const showBtn = useSelector(getIsShowBtn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'GET_HELLO'})
  }, []);
  return (
    <Tab.Navigator >
    <Tab.Screen name="כללי" component={General} />
    <Tab.Screen name="כרטיס אשראי" component={CreditCards} />
    <Tab.Screen name="הודעות" component={Messages} />
  </Tab.Navigator>
  );
};
export default Main;
