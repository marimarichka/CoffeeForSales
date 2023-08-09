import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, ScrollView } from 'react-native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { MenuIcon } from '../../shared/icons/MenuIcon';
import { PersonIcon } from '../../shared/icons/PersonIcon';
import FilterDialog from './FilterDialog';

export const getOrderHeader = (): NativeStackNavigationOptions => ({
  title: 'Order',
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#ECBEB4',
  },
  headerLeft: () => <MenuIcon />,
  headerRight: () => <PersonIcon />,
})

const items = [{ id: 1, name: 'Espresso', price: '$5' }, { id: 2, name: 'Espresso', price: '$5' }, { id: 3, name: 'Espresso', price: '$5' }];

const Orders = () => {
  const [dialogVisible, setDialogVisible] = useState(false);

  const onCloseDialog = () => {
    setDialogVisible(false);
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.mainContent}>
        <TextInput placeholder='Client name' style={styles.input} />
        <View style={styles.itemsBlock}>
          {items.map((item) => <View style={styles.item} key={item.id}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>{item.price}</Text>
          </View>)}
        </View>
      </View>
      <View style={styles.plusButtonBlock}>
        <Pressable style={styles.plusButton} onPress={() => setDialogVisible(true)}>
          <Text style={styles.plusButtonText}>+</Text>
        </Pressable>
      </View>
      <FilterDialog dialogVisible={dialogVisible} onCloseDialog={onCloseDialog} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: { flexGrow: 1 },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    paddingHorizontal: 15
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginTop: 15,
    marginBottom: 18,
    fontSize: 16,
  },
  itemsBlock: {
    width: '100%',
  },
  item: {
    width: '100%',
    height: 40,
    backgroundColor: 'rgba(176, 143, 143, 0.10)',
    borderColor: 'rgba(43, 40, 40, 0.30)',
    borderWidth: 1,
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  itemText: {
    color: 'black',
    fontSize: 16,
  },
  plusButtonBlock: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 120,
    borderTopWidth: 1,
    borderTopColor: "rgba(43, 40, 40, 0.30)",
  },
  plusButton: {
    width: 70,
    height: 70,
    backgroundColor: '#ECBEB4',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1
  },
  plusButtonText: {
    fontSize: 30
  },
});

export default Orders;