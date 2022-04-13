import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useQuery } from 'react-query';
import {
  NearRealTimeTransactionsItemsArr,
  CardTransTypes,
} from '~/@types/customerTypesCards';
import { API } from '~/api/api';
import { SCREENS } from '~/constants/strings';
import { Box } from '~/theme';
import fetcher from '~/utils/network';
import { styles } from '../generalArea/customeStyle';
interface IProps{
  cardIndex:number;
}

function CreditCardsTransaction(props:IProps) {

  const { isLoading, error, data } = useQuery<CardTransTypes, Error>(
  ['cardTransKey',props.cardIndex],
    async () => {
      const resp = await fetcher().get<CardTransTypes>(API.GET.GET_CARDS_TRANS(props.cardIndex))
     
      return resp.data;
    },
  );

  if (isLoading) return <Text>'Loading...'</Text>;

  if (error) return <Text>'An error has occurred: '+ {error.message}</Text>;
 
  return (
    <View>
      <Box > 
        <Text style={styles.title}>עסקאות בזמן אמת : </Text>

        {data?.NearRealTimeTransactionsItems.map((x) => (
          <Box style={styles.container}>
            <Text>
              {SCREENS.DATE}: {x.originalTransactionDate.substring(0, 10)} בשעה:{' '}
              {x.originalTransactionDate.substring(14, 19)}
            </Text>
            <Text>{x.businessName}</Text>
            <Text>סכום : {x.nrtOriginalAmount}</Text>

            
          </Box>
        ))}

<Text style={styles.title}>עסקאות בשקלים: </Text>

{data?.NisTransactionsItems.map((x) => (
  <Box style={styles.container}>
    <Text> סכום כולל: {x.totalNISTransactionsAmount}</Text>
    <Text>שם העסק:{x['businessName']} </Text>
    <Text>תאריך: {x['originalTransactionDate']}</Text>
  
  </Box>
))}

<Text style={styles.title}>עסקאות בדולרים: </Text>

{data?.ForeignTransactionsUSDItems.map((x) => (
  <Box style={styles.container}>
    <Text>סכום כולל: {x.totalForeignTransactionsAmountUSD}</Text>
    <Text>שם העסק: {x['businessName']} </Text>
    <Text>תאריך: {x['originalTransactionDate']}</Text>
  
  </Box>
))}
<Text style={styles.title}>עסקאות ביורו: </Text>

{data?.ForeignTransactionsEURItems.map((x) => (
  <Box style={styles.container}>
    <Text>סכום כולל: {x.totalForeignTransactionsAmountEur}</Text>
    <Text>שם העסק: {x['businessName']} </Text>
    <Text>תאריך: {x['originalTransactionDate']}</Text>

  
  </Box>
))}
      </Box>
    </View>
  );
}

export default CreditCardsTransaction;
