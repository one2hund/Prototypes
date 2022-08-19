import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';


if ((Text as any).defaultProps == null) (Text as any).defaultProps = {};
(Text as any).defaultProps.allowFontScaling = false; 


//스플래시 스크린이 띄운다
SplashScreen.preventAutoHideAsync(); 

const Stack = createNativeStackNavigator(); 


export default function App() {
  
  useEffect(() => {
    async function prepare() {
      try {
        // API 로드 대기 후 로드 완료시 스플래시 스크린을 치운다
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        SplashScreen.hideAsync();      
      }
    }

    prepare();
  }, []);



  return (
    <NavigationContainer >
    <Stack.Navigator initialRouteName='Home' screenOptions={{
headerShown : false , }}  >
      <Stack.Screen name ="Home"  component = {HomeScreen}  />
    </Stack.Navigator>
  </NavigationContainer>



  );
}