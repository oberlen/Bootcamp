import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@user', value)
    } catch (e) {
      // saving error
      console.log(e);
      
    }
  }


  export const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null) {
          

        // value previously stored
      }
    } catch(e) {
      // error reading value
      console.log(e);

    }
  }
  