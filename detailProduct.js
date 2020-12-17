import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, ImageBackground, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';


function DetailProducts({ route, navigation }) {
    const image = { uri: 'https://i.ytimg.com/vi/bORhxyV-AlE/maxresdefault.jpg'};
 
    console.log(route.params.name);
    const { price,quantity} = route.params.name;
    const producto = async () => {
        Alert.alert(
            "Esta seguro de eliminar su producto?"            
            [
                {
                    text: "NO",
                    onPress: () => console.log("Cancelar solicitud"),
                    style: "cancel"
                },
                { text: "SI", onPress: () => deleteproduct() }
            ],
            { cancelable: false }
        )
    };
    const deleteproduct = async () => {
        try {
            const res = await fetch(`http://192.168.1.7:4000/deleteProducto/${_id}`,
                {
                    method: "DELETE"
                })
            const data = await res.json();
            console.log(data);
            Alert.alert("El producto a sido eliminado con exito  ")
            navigation.goBack();
        } catch (error) {
            alert(error)
        }
    }
    const updateProduct = () => {
        navigation.navigate('Modificar producto', { Proc: route.params.name })
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.datailcard}>
                    <Text>Name: {name}</Text>
                    <Text>Price: {price}</Text>
                    <Text>Quantity: {quantity}</Text>                 
                    <View style={styles.ButonView}>
                        <TouchableHighlight onPress={updateProduct} style={styles.EditCrud}>
                            <Text style={styles.textCreateButton}>Modificar producto</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={producto} style={styles.ButtonCrud} >
                            <Text style={styles.textCreateButton}>Eliminar producto</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: "column",
        alignItems: 'center',
    },
    styleButton: {
        backgroundColor: 'blue',
        padding: 15,
        alignItems: 'center'
    },
    textCreateButton: {
        color: 'white'
    },
    datailcard: {
        borderColor: "#FADADA",
        borderRadius: 20,
        borderWidth: 1,
        alignItems: 'center',
        width: Dimensions.get('screen').width * 0.9,
        backgroundColor: "#FADADA",
        color: "white",
        marginTop: 50
    },
    ButonView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    ButtonCrud: {
        backgroundColor: '#F94545',
        padding: 15,
        width: Dimensions.get('screen').width * 0.4,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 4

    },
    EditCrud: {
        backgroundColor: '#6336C2',
        padding: 15,
        width: Dimensions.get('screen').width * 0.4,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 4
    },
    textCreateButton: {
        color: 'white'
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        width: Dimensions.get('screen').width * 1,
        alignItems: 'center'

    },
    doc: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    contdoc: {
        flexDirection: "row"
    },
    contdoc1: {
        flexDirection: "column",
        marginTop: 80,
        marginLeft: 100,
        width: Dimensions.get('screen').width * 0.55,
        backgroundColor: "#FADADA",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },
    textdoc: {
        backgroundColor: "#FADADA",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginRight: 10


    }
});

export default DetailProducts;