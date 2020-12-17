import React, { useEffect, useState } from 'react';
import {  StyleSheet, Text, TextInput, View } from 'react-native';



function CardComponent(props) {
  const { name, price, quantity } = props.date;
  return (
    <View>
      <Text>{name}</Text>
      <Text>{price}</Text>
      <Text>{quantity}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column"
  },
  styleButton: {
    backgroundColor: 'blue',
    padding: 15,
    alignItems: 'center'
  },
  textCreateButton: {
    color: 'white'
  }

});

export default CardComponent;