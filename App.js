import React, { useState } from 'react';
import HomeStack from './routes/homeStack';

import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

// load fonts
const getFonts = () => Font.loadAsync({
  'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
});


export default function App() {

  // fonts loaded is false meaning the first screen of the app
  // won't load until fonts have been loaded in order to prevent
  // errors when the screen display is loaded with requested fonts
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    // call the screenstack to load the first screen
    return (
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    )
  } else {
    // load the neccessary data for the app to work
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => console.log(error)}
      />
    )
  }

}


