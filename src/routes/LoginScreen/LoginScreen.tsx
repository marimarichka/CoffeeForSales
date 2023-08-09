import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export const getLoginHeader = (): NativeStackNavigationOptions => ({
  title: '', headerShadowVisible: false,
  headerStyle: {
    backgroundColor: 'white',
  }
})

const LoginScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Button title="Start" color="#ECBEB4" containerStyle={styles.button} onPress={() => navigation.navigate('Order')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    borderRadius: 6,
    paddingHorizontal: 7
  },
});

export default LoginScreen;