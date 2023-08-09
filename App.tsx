import React from 'react';
import {StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen, { getLoginHeader } from './src/routes/LoginScreen/LoginScreen';
import Orders, { getOrderHeader } from './src/routes/OrdersScreen/Orders';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{contentStyle: styles.navigator}}>
        <Stack.Screen name="Login" component={LoginScreen} options={getLoginHeader()} />
        <Stack.Screen name="Order" component={Orders} options={getOrderHeader()} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  navigator: {
    backgroundColor: 'white'
  },
});

export default App;
