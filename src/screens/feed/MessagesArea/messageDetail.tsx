import { useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useQuery } from 'react-query';
import { ROUTES } from '~/@types/common';
import { IMessage } from '~/@types/customerTypesMails';
import { RootRouteProps } from '~/@types/navigation';
import { API } from '~/api/api';
import { Text, Box } from '~/theme';
import fetcher from '~/utils/network';
import { WebView } from 'react-native-webview';
import AutoHeightWebView from 'react-native-autoheight-webview';



interface IProps{
  DocID:number;
}

function MessageDetail(props:IProps) {
  const { params } = useRoute<RootRouteProps<ROUTES.MESSAGEDETAIL>>()
  
  const { data } = useQuery<IMessage>(
    ['mailDetailKey',props.DocID],
    async () => {
      const resp = await fetcher().get<IMessage>(
        API.GET.GET_MAIL,
        {
          params: {
            ServiceType: 1,
            Action: 1,
            ClientNumbers: 1,
            DocID: props.DocID,
          },
        },
      );

      return resp.data;
    },
  );

  console.log(data?.LeumiMailObject.MailFile);
  console.log(data?.LeumiMailObject.DocID);
  
  const myUri=data?.LeumiMailObject.MailFile
  
  return (<Box flex={1} style={{height:1000}}>


  { myUri && (<AutoHeightWebView source={{ html: myUri }} style={{  marginTop:220 }}minimumFontSize={30} scalesPageToFit />)}
  </Box>)
}

export default MessageDetail;
