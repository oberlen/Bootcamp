import React from 'react';
import {  ScrollView, SafeAreaView } from 'react-native';
import { MyCarousel } from './carouselCard';
function CreditCards() {
  return (
    <SafeAreaView>
      <ScrollView>
          <MyCarousel/>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CreditCards;
