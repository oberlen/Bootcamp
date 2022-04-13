import Carousel from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';
import fetcher from '~/utils/network';
import { CardsFromTypes, CardsTypes } from '~/@types/customerTypesCards';
import { useQuery } from 'react-query';
import { API } from '~/api/api';
import { Box, Text } from '~/theme';
import { styles } from '../generalArea/customeStyle';
import CreditCardsTransaction from './creditCardsTransaction';
import { useEffect, useState } from 'react';

export function MyCarousel() {
  const [indexItem, setIndexItem] = useState(0);
  const sliderWidth = Dimensions.get('window').width;

  const { isLoading, error, data } = useQuery<CardsFromTypes[], Error>(
    'cardsKey1',
    async () => {
      const resp = await fetcher().get<CardsTypes>(API.GET.GET_CARDS);
      return resp.data.CardItems;
    },
  );

  if (isLoading) return <Text>'Loading...'</Text>;

  if (error) return <Text>'An error has occurred: '+ {error.message}</Text>;

  const _renderItem = ({
    item,
    index,
  }: {
    item: CardsFromTypes;
    index: number;
  }) => {
    return (
      <Box style={styles.container}>
        <Text>סוג הכרטיס: {item.cardNetwork}</Text>
        <Text>4 ספרות אחרונות: {item.cardLast4Digits}</Text>
        <Text> שם בעל הכרטיס: {item.cardHolderNameEnglish}</Text>
      </Box>
    );
  };


  return (
    <Box>

      {data && (
        <Carousel
          //   ref={(c) => { this._carousel = c; }}
          data={data}
          renderItem={_renderItem}
          sliderWidth={sliderWidth}
          itemWidth={sliderWidth * 0.7}
          useScrollView
          onSnapToItem={(index:number) => setIndexItem(index)}
          activeSlideAlignment="center"
        />
      )}
      <CreditCardsTransaction cardIndex={indexItem} />
    </Box>
  );
}
