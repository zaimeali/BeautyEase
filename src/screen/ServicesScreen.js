import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Dimensions, ScrollView, ImageBackground } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default function ServicesScreen() {

    const image = require('./../../assets/ChooseService.jpg');

    return (
        <SafeAreaView style={ styles.container }>
            <ScrollView>
                <ImageBackground
                    source={ image }
                    style={ styles.image }
                    resizeMode="cover"
                >
                    <LinearGradient 
                        colors={[
                            '#DA1C5C',
                            '#C01B79'
                        ]} 
                        style={ styles.header }
                    >
                    </LinearGradient>
                    <Text style={ styles.headText }>Beauty Ease</Text>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    )
}

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        backgroundColor: '#2c2c3c',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        height: windowHeight * 0.35,
        opacity: 0.5,
    },
    image: {
      flex: 1,
      justifyContent: "center",
    },
    headText:{
        fontSize: 28,
        color:'white',
        position: "absolute",
        bottom: 5,
        alignSelf:'center',
        marginVertical:15
        
    },
})