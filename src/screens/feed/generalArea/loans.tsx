import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useQuery } from 'react-query';
import { Loan, LoansTypes } from '~/@types/customerTypesGeneral';
import { API } from '~/api/api';
import { Box, Text } from '~/theme';
import fetcher from '~/utils/network';
import { styles } from './customeStyle';
import  UpdatedComponent from './highOrderComponent';

function Loans() {
  // const [isOpen, setIsOpen] = useState(false);

  const _renderItem = ({ item }: { item: Loan }) => (
    <Box style={styles.container}>
      <Text>מטרת ההלוואה: {item.displayName}</Text>
      <Text>סכום ראשוני: {item.initialAmount}</Text>
      <Text>
        בתאריך: {item.asOfDate.substring(0, 10)} בשעה:{' '}
        {item.asOfDate.substring(14, 19)}
      </Text>
    </Box>
  );

  const { isLoading, error, data } = useQuery<LoansTypes, Error>(
    'repoData',
    async () => {
      const resp = await fetcher().get<LoansTypes>(API.GET.GET_LOANS);
      return resp.data;
    },
  );

  if (isLoading) return <Text>'Loading...'</Text>;

  if (error) return <Text>'An error has occurred: '+ {error.message}</Text>;
  // const onPress = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <View>
      {/* <TouchableOpacity onPress={onPress}>
        <Text style={styles.title}>להצגת ההלואות לחץ כאן</Text>
    </TouchableOpacity> */}
      <UpdatedComponent text={"להצגת ההלואות לחץ כאן"}>
        {data?.LoanItems.map((x) => (
            <Box style={styles.container}>
                <Text>
                תאריך תשלום ראשון: {x.asOfDate.substring(0, 10)} שעה:{' '}
                {x.asOfDate.substring(14, 19)}
                </Text>
                <Text>תאריך תשלום אחרון: {x.dateLastPayment.substring(0, 10)}</Text>
                <Text>תקופת ההלוואה: {x.loanTerm}</Text>
                <Text>מטרת ההלוואה: {x.displayName}</Text>
                <Text>סכום לתשלום: {x.amountDue}</Text>
                <Text>סכום ראשוני: {x.initialAmount}</Text>
                <Text> יתרת תשלומים: {x.numberOfPaymentsLeft}</Text>
            </Box>
            ))}
      </UpdatedComponent>

      {/* {isOpen &&
        data?.LoanItems.map((x) => (
          <Box style={styles.container}>
            <Text>
              תאריך תשלום ראשון: {x.asOfDate.substring(0, 10)} שעה:{' '}
              {x.asOfDate.substring(14, 19)}
            </Text>
            <Text>תאריך תשלום אחרון: {x.dateLastPayment.substring(0, 10)}</Text>
            <Text>תקופת ההלוואה: {x.loanTerm}</Text>
            <Text>מטרת ההלוואה: {x.displayName}</Text>
            <Text>סכום לתשלום: {x.amountDue}</Text>
            <Text>סכום ראשוני: {x.initialAmount}</Text>
            <Text> יתרת תשלומים: {x.numberOfPaymentsLeft}</Text>
          </Box>
        ))
        } */}
    </View>
  );
}

export default Loans;
// export default UpdatedComponent(Loans)
