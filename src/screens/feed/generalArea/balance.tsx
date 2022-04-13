import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useQuery } from 'react-query';
import { BalanceTypes } from '~/@types/customerTypesGeneral';
import { API } from '~/api/api';
import { Box } from '~/theme';
import fetcher from '~/utils/network';
import { styles } from './customeStyle';


function Balance() {

  const { isLoading, error, data } = useQuery<BalanceTypes, Error>(
    'key',
    async () => {
      const resp = await fetcher().get<BalanceTypes>(API.GET.GET_BALANCE);
      return resp.data;
    },
  );
  if (isLoading) return <Text>'Loading...'</Text>;

  if (error) return <Text>'An error has occurred: '+ {error.message}</Text>;

  return (
    <View>

      <Box style={styles.item}>
        <Text style={{ fontSize: 20 }}>יתרה: {data?.todayBalance}</Text>
        <Text>עבור התאריך: {data?.asOfDateFormat.substring(0, 10)}</Text>
        <Text>מספר חשבון : {data?.maskedNumber}</Text>
      </Box>
      <Box style={styles.item}>
        <Text style={{ fontSize: 20 }}>יתרה: {data?.todayBalance}</Text>
        <Text>עבור התאריך: {data?.asOfDateFormat.substring(0, 10)}</Text>
        <Text>מספר חשבון : {data?.maskedNumber}</Text>
      </Box>
    </View>
  );
}

export default Balance ;
