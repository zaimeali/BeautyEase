import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Dimensions, ScrollView, ImageBackground } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default function BookAppointment() {

    const image = require('./../../assets/ChooseService.jpg');

    
    return (
        <SafeAreaView style={ styles.container }>
            <ScrollView>
                <LinearGradient 
                    colors={[
                        '#DA1C5C',
                        '#C01B79'
                    ]} 
                    style={ styles.header }
                >
                </LinearGradient>
                <Text style={ styles.headText }>Book Appointment</Text>
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
    },
    image: {
      flex: 1,
      justifyContent: "center",
    },
    headText:{
        fontSize: 20,
        color:'white',
        position: "absolute",
        alignSelf:'center',
        marginVertical:20,
        top:3
        
    },
})