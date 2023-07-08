import React from 'react';
// import { CryptoDetail, Transaction } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
// import SplashScreen from 'react-native-splash-screen'
import * as SplashScreen from 'expo-splash-screen';

import { NativeBaseProvider } from 'native-base';

import Tabs from "./navigation/tabs";
import { CryptoDetail, Transaction } from './screens';

const Stack = createStackNavigator();

const App = () => {

  React.useEffect(()=> {
    SplashScreen.hide()
  }, [])

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName={'Home'}
        >
          <Stack.Screen
            name="Home"
            component={Tabs}
          />
          <Stack.Screen
            name="CryptoDetail"
            component={CryptoDetail}
          />
          <Stack.Screen
            name="Transaction"
            component={Transaction}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default App;