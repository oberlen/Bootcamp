import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { getIsShowHelloMessage } from '../../../selectors';
import Balance from './balance';
import { styles } from './customeStyle';
import Loans from './loans';
import SecurityData from './securityData';
import { Text } from '~/theme';

function General() {
  let user = useSelector(getIsShowHelloMessage);

  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Text>General Page...</Text> */}
        <View>
          <Text style={styles.styleWelcome}>{user}</Text>
        </View>
        <Balance />
        <Loans />
        <SecurityData />
      </ScrollView>
    </SafeAreaView>
  );
}

export default General;
