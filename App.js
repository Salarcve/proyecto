import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateProduct from './createProduct';
import DetailProduct from './detailProduct';
import ListProduct   from './listProduct';
import UpdateProduct from './updateProduct';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen style={styles.container} name="Productos" component={ListProduct} />
        <Stack.Screen style={styles.container} name="Agregar producto" component={CreateProduct} />
        <Stack.Screen style={styles.container} name="Eliminar producto" component={DetailProduct} />
        <Stack.Screen style={styles.container} name="Actualizar producto" component={UpdateProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0F7F8',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
export default App;