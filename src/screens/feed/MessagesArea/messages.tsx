import React, { useState } from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useQuery } from 'react-query';
import { LeumiMailObject } from '~/@types/customerTypesMails';
import { API } from '~/api/api';
import { Text, Box } from '~/theme';
import fetcher from '~/utils/network';
import { styles } from '../generalArea/customeStyle';
import { useNavigation } from "@react-navigation/native";
import { RootNavigation, RootNavigationProps } from '~/@types/navigation';
import { Screen } from 'react-native-screens';
import { ROUTES } from '~/@types/common';


function Messages() {
  const { navigate } = useNavigation<RootNavigationProps>();

  
  const { data } = useQuery<LeumiMailObject, Error>(
    'mailKey',
    async () => {
      const resp = await fetcher().get<{LeumiMailObject:LeumiMailObject}>(API.GET.GET_MAILS, {
        params: {
          ServiceType: 0,
          ClientNumbers: 1,
          PageNum: 1,
          PageSize: 50,
        },
      });
      
      return resp.data.LeumiMailObject;
    },
    );
    
  return (
    <ScrollView>
      <Text>Messages Page...</Text>


     { data?.MailItems.ClientIndexs.ClientIndex.Docs.Doc.map((x)=>(
       <TouchableOpacity onPress={()=>{navigate(ROUTES.MESSAGEDETAIL,{docId:x.DocID})}}>
         <Text>{x.DocID}</Text>
       <Box style={styles.titleOpen}>
       <Text style={styles.styleMailText}>{x.MailTitle}</Text>
       <Text>{x.DeliveryDate}</Text>
       <Text>{x?.OpenDate}</Text>

       </Box>
       </TouchableOpacity>
     ))}
    </ScrollView>
  );
}

export default Messages;

