import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, ImageBackground } from 'react-native'
// import LinearGradient from 'react-native-linear-gradient'

export default function BookAppointment() {

    const image = require('./../../assets/bgImage.png');
    const date = new Date();
    const year = date.getFullYear();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const month = months[date.getMonth()];
    const day = date.getDate();
    
    return (
        <SafeAreaView style={ styles.container }>       
            <ImageBackground
                source={ image }
                resizeMode="cover"
                style={ styles.image }
            >
                <View style={ styles.headScreen }>
                    <Text style={ styles.headText }>Book Appointment</Text>
                </View>
                <View style={ styles.bookAppointment }>
                    <View>
                        <Text>Select Your Date</Text>
                        <View style={ styles.selectDateButtonView }>
                            <TouchableOpacity style={ styles.selectDateButton }>
                                <Text>{ `${day}-${month}-${year}` }</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                    
                    </View>
                    <View>

                    </View>
                </View>
                <View style={ styles.buttonView }>
                    <TouchableOpacity activeOpacity={ 0.5 } style={ styles.confirmButton }>
                        <Text style={ styles.appointmentButton }>Confirm Appointment</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        margin: 0,
    },
    image: {
        flex: 1,
        justifyContent: "space-around",
        width: windowWidth,
        flexDirection: "column",
        padding: 0,
    },
    headScreen: {
        justifyContent: "center",
        flex: 0.5,
    },
    headText: {
        color: "white",
        fontSize: 24,
        fontWeight: "600",
        alignSelf: "center",
    },
    bookAppointment: {
        elevation: 15,
        borderRadius: 10,
        alignSelf: "center",
        backgroundColor: "white",
        width: windowWidth * 0.9,
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    selectDateButtonView: {

    },
    selectDateButton: {
        backgroundColor: "#F98CD1",
        width: windowWidth * 0.4,
        padding: 10,
        borderRadius: 10,
    },
    confirmButton: {
        backgroundColor: "#EA155D",
        width: windowWidth * 0.8,
        paddingVertical: 10,
        alignItems: "center",
        borderRadius: 10,
    },
    buttonView: { 
        alignItems: "center",
        flex: 0.5,
        justifyContent: "center",
    },
    appointmentButton: {
        color: "white",
        fontSize: 17,
    },
})