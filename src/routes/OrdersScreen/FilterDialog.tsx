import { Dialog } from '@rneui/themed';
import React from 'react';
import { View, StyleSheet, ScrollView, Text, TextInput, Pressable } from 'react-native';
import CloseIcon from '../../shared/icons/CloseIcon';

interface FilterDialogProps {
  dialogVisible: boolean,
  onCloseDialog: () => void
}

const items = [
  { id: 1, name: 'Espresso', price: '$5' }, 
  { id: 2, name: 'Americano', price: '$5' }, 
  { id: 3, name: "Latte", price: '$5' }];

const FilterDialog = ({dialogVisible, onCloseDialog}: FilterDialogProps) => {
  return (
    <Dialog isVisible={dialogVisible} overlayStyle={styles.dialogView} onBackdropPress={onCloseDialog}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.nameView}>
        <Text style={styles.nameText}>Product</Text>
        <Pressable style={styles.closeIcon} onPress={onCloseDialog}>
        <CloseIcon />
        </Pressable>
        </View>
        <TextInput placeholder='Filter' style={styles.input} />
        <View style={styles.itemsBlock}>
          {items.map((item) => <View style={styles.item} key={item.id}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>{item.price}</Text>
          </View>)}
        </View>
      </ScrollView>
    </Dialog>
  );
}

const styles = StyleSheet.create({
  dialogView: {
    backgroundColor: 'white',
    borderRadius: 6,
    elevation: 5,
    marginVertical: 50,
    position: 'relative'
  },
  scrollView: {
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  nameView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  nameText: {
    marginBottom: 10, 
    fontSize: 16, 
    color: 'black',
  },
  closeIcon: {
    position: 'absolute', 
    right: 0
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
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
});

export default FilterDialog;