import React, { useEffect, useState } from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import CardComponent from './cardComponent'
import { useIsFocused } from '@react-navigation/native';

function ListProducts({ navigation }) {
  const image = { uri: 'https://i.ytimg.com/vi/bORhxyV-AlE/maxresdefault.jpg'};
  const isFocused = useIsFocused();
  const [producto, setProducts] = useState();
  const Producto = async () => {
    let response = await fetch('http:/192.168.1.7:4000/getProducto');
    let json = await response.json();
    setProducts(json);
}

const images= [
  '../../assets/automotriz.jpg',
  '../../assets/aseo.jpg',
  '../../assets/comida.jpg',
  '../../assets/escuela.jpg',
  '../../assets/herramientas.jpg',
  '../../assets/industria.jpg',
  '../../assets/maquillaje.jpg',
  '../../assets/tecnologia.jpg'
]

const Randomimages = Math.floor(Math.random() * images.length);
  
  const detailproduct = (item) => {
    navigation.navigate('name', {Proc:item});
  }
  useEffect(() => {
    console.log("isFocused" + isFocused)
    Producto();
  }, [isFocused]);
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <TouchableHighlight style={styles.styleButton} onPress={(navigation) => navigation.navigate('createProduct')}>
          <Text style={styles.textCreateButton} >Agregar productos</Text>
        </TouchableHighlight>
        <FlatList data={producto}
          renderItem={({ item }) => <TouchableHighlight onPress={() => detailproduct(item)} style={styles.listButton}>
            <CardComponent date={item} />
          </TouchableHighlight>}
          keyExtractor={item => item._id.toString()} />
      </ImageBackground>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0F7F8',
    flexDirection: "column",
    alignItems: "center"
  },
  styleButton: {
    backgroundColor: 'red',
    padding: 20,
    width: Dimensions.get('screen').width * 0.6,
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 50,
    marginBottom: 5
  },
  textCreateButton: {
    color: 'white',
  },
  listButton: {
    marginTop: 5,
    padding: 10,
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 3,
    width: Dimensions.get('screen').width * 0.9,
    backgroundColor: "white",
    alignItems: 'center',
  },
  image: {
    flex: 1,    
    justifyContent: 'center',
    width: Dimensions.get('screen').width * 1,   

  },

});

export default ListProducts;