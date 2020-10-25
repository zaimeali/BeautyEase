import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import Avatar from '../components/Avatar';
import SlotButton from '../components/SlotButton';
// import LinearGradient from 'react-native-linear-gradient'

export default function BookNow(props) {

    const avatar = [
        {
            "id": 1,
            "img": require("./../../assets/appointment/1.png"),
        },
        {
            "id": 2,
            "img": require("./../../assets/appointment/2.png"),
        },
        {
            "id": 3,
            "img": require("./../../assets/appointment/3.png"),
        },
        {
            "id": 4,
            "img": require("./../../assets/appointment/4.png"),
        },
    ]

    

    const [selectedAvatar, setSelectedAvatar] = useState();

    const [tokenNumber, setTokenNumber] = useState(0)

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
                    <Text style={ styles.headText }>Book Now</Text>
                </View>
                <View style={ styles.bookAppointment }>
                    <View style={ styles.sectionsAppointment }>

                        <View style={ [styles.anotherSection] }>
                            <Text style={ styles.dateHeadText }>Choose Your Specialist</Text>
                            <FlatList 
                                horizontal={ true }
                                data={ avatar }
                                keyExtractor={ item => item.id }
                                renderItem={(item) => (
                                    <Avatar 
                                        key={ item.item.id } 
                                        avatarImg={ item.item.img } 
                                    />
                                )}
                            />
                            <Text>Available in 30 Minutes</Text>
                        </View>
                        <View>
                        <Text style={ styles.dateHeadText }>Queue</Text>
                        </View>
 
                    </View>
                </View>
                <View style={ styles.buttonView }>
                    <TouchableOpacity onPress={ () => {
                        setTokenNumber(tokenNumber + 1)
                        console.warn(tokenNumber)
                        // props.navigation.navigate('Queue', {
                        //     token: tokenNumber
                        // })
                    } } activeOpacity={ 0.5 } style={ styles.confirmButton }>
                        <Text style={ styles.appointmentButton }>Get Token</Text>
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
        flex: 2.5,
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    sectionsAppointment: {
        flex: 1,
        justifyContent: "space-around",
        flexDirection: "column",
    }, 
    selectDateButtonView: {

    },
    dateHeadText: {
        fontSize: 16,
        fontWeight: "600",
        paddingBottom: 10,
    },
    selectDateButton: {
        backgroundColor: "#F98CD1",
        width: windowWidth * 0.4,
        padding: 10,
        borderRadius: 10,
    },
    appointmentSlotButton: {
        alignItems: "center",
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