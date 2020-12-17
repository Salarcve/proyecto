import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TouchableHighlight } from 'react-native-gesture-handler';


function updateProduct({ navigation }) {
    const image = { uri: 'https://i.ytimg.com/vi/bORhxyV-AlE/maxresdefault.jpg' };
    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [quantity, setquantity] = useState(""); 

    const updateProduct = async () => {
        
    const res = await fetch('http://192.168.1.7:4000/Updateproducto',
           {
           method: "POST",
           headers: {
           Accept: "application/json",
                   "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: name,
                        price: price,
                        quantity: quantity        
                    })
                });
            await res.json();
            Alert.alert("Producto actualizado ")
            navigation.goBack()
        
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>                
                <TextInput style={styles.textInput} onChangeText={text => setname(text)} placeholder="Name"></TextInput>
                <TextInput style={styles.textInput} onChangeText={text => setprice(text)} placeholder="Price"></TextInput>
                <TextInput style={styles.textInput} onChangeText={text => setquantity(text)} placeholder="Quantity"></TextInput>
               
                <TouchableHighlight style={styles.styleButton} onPress={updateProduct} >
                    <Text style={styles.textCreateButton}>Actualizar producto</Text>
                </TouchableHighlight>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center'
    },
    textInput: {
        marginTop: 10,
        padding: 16,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 2,
        width: Dimensions.get('screen').width * 0.9,
        backgroundColor: "white"
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
        color: 'white'
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: Dimensions.get('screen').width * 1,
        alignItems: 'center',

    },

});

export default updateProduct;