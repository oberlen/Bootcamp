import React from 'react';
import { View } from 'react-native';
import { useQuery } from 'react-query';
import {
  SecurityDataFromTypes,
  SecurityDataTypes,
} from '~/@types/customerTypesGeneral';
import { API } from '~/api/api';
import { Box, Text } from '~/theme';
import fetcher from '~/utils/network';
import { styles } from './customeStyle';
import UpdatedComponent from './highOrderComponent';
import { SecurityItemTypes } from '~/@types/customerTypesGeneral';

function SecurityData() {
  const { isLoading, error, data } = useQuery<SecurityDataTypes, Error>(
    'repoSecurityData',
    async () => {
      const resp = await fetcher().get<SecurityDataTypes>(
        API.GET.GET_SECURITYDATA,
      );
      return resp.data;
    },
  );

  if (isLoading) return <Text>'Loading...'</Text>;
  if (error) return <Text>'An error has occurred: '+ {error.message}</Text>;

  return (
    <View>
      <UpdatedComponent text={'להצגת ניירות ערך לחץ כאן'}>
        {data?.SecuritiesDataItems.map((x, key) => (
          <Box style={styles.container}>
            <SecurityDataItem item={x} />
          </Box>
        ))}
      </UpdatedComponent>
    </View>
  );
}

export default SecurityData;

interface IProps {
  item: SecurityDataFromTypes;
}
function SecurityDataItem(props: IProps) {
  const { isLoading, error, data } = useQuery<SecurityItemTypes, Error>(
    'repoSecurityDataItem',
    async () => {
      const resp = await fetcher().post<SecurityItemTypes>(
        API.GET.GET_SECURITYITEMS,
        { portfolioID: props.item.portfolioID },
      );
      return resp.data;
    },
  );
  if (isLoading) return <Text>'Loading...'</Text>;
  if (error) return <Text>'An error has occurred: '+ {error.message}</Text>;
  return (
    <View>
      <Box >
        <Text>מספר חשבון: {props.item.maskedNumber}</Text>
        <Text>תאריך: {props.item.timestamp.substring(0, 10)}</Text>
        <Text>אינדיקצית שנוי יומי:{data?.dailyChangeIndication}</Text>
        <Text>שינוי יומי:{data?.dailyChange}</Text>
        <Text>שינוי כולל:{data?.totalChange}</Text>
      </Box>
    </View>
  );
}
