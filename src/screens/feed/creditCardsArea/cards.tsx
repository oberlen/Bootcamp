import React, { useState } from "react";
import {TouchableOpacity,View, StyleSheet} from "react-native"
import { FlatList } from "react-native-gesture-handler";
import Carousel from "react-native-snap-carousel";
import { useQuery } from "react-query";
import { CardsFromTypes, CardsTypes } from "~/@types/customerTypesCards";
import { Loan, LoansTypes } from "~/@types/customerTypesGeneral";
import { API } from "~/api/api";
import { Box } from "~/theme";
import fetcher from "~/utils/network";
import { styles } from "../generalArea/customeStyle";
import CreditCardsTransaction from "./creditCardsTransaction";
 
import { Text } from '~/theme';

function Cards() {
    const [isOpen,setIsOpen] =useState(false)

    // const _renderItem = ({ item }: { item: CardsFromTypes }) =>
    // <Box style={styles.container}>
    //     <Text>סוג הכרטיס: {item.cardNetwork}</Text>
    //     <Text>4 ספרות אחרונות: {item.cardLast4Digits}</Text>
    //     </Box>

    const { isLoading, error, data } = useQuery<CardsTypes,Error>('cardsKey',async() =>{
    const resp=await fetcher().get<CardsTypes>(API.GET.GET_CARDS)
        return resp.data
    } )
    
    
   if (isLoading) return <Text>'Loading...'</Text>
 
   if (error) return <Text>'An error has occurred: '+ {error.message}</Text>
    const onPress=()=>
    {
        setIsOpen(!isOpen)
    }
    return ( <View>
    <TouchableOpacity onPress={onPress}>
        <Text style={styles.title}>להצגת הכרטיסים לחץ כאן</Text>
    </TouchableOpacity>
     {isOpen &&
      < Box>
         <Text style={styles.item}>תאריך: {data?.asOfDate.substring(0, 10)}</Text> 
         <Text style={styles.item}>יתרה בשקלים: {data?.totalCurrentBalanceNIS}</Text> 
         <Text style={styles.item}>יתרה בדולרים: {data?.totalCurrentBalanceUSD}</Text> 
         {/* <Text>יתרה ביורו: {data?.totalCurrentBalanceEURO}</Text>  */}
        
        {data?.CardItems.map((x) => (
            <Box style={styles.container}>
        <Text style={styles.title}>סוג הכרטיס: {x.cardNetwork}</Text>
        <Text>4 ספרות אחרונות: {x.cardLast4Digits}</Text>
        <CreditCardsTransaction cardIndex={x.cardIndex}/>
        </Box>
         
        ))}
         {/* <FlatList
                    data={data?.CardItems}
                    renderItem={_renderItem} /> */}
      </Box>
              
            }
       
        
       </View> );
}

export default Cards
    