import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import Avatar from '../components/Avatar';
import SlotButton from '../components/SlotButton';
// import LinearGradient from 'react-native-linear-gradient'

export default function BookAppointment() {

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

    const availableSlot = [
        {
            "id": 1,
            "isSelected": false,
            "isDisabled": false,
            "time": "10:00 AM",
        },
        {
            "id": 2,
            "isSelected": false,
            "isDisabled": false,
            "time": "11:00 AM",
        },
        {
            "id": 3,
            "isSelected": false,
            "isDisabled": false,
            "time": "11:30 AM",
        },
        {
            "id": 4,
            "isSelected": false,
            "isDisabled": false,
            "time": "12:30 PM",
        },
        {
            "id": 5,
            "isSelected": false,
            "isDisabled": false,
            "time": "01:00 PM",
        },
        {
            "id": 6,
            "isSelected": false,
            "isDisabled": false,
            "time": "03:00 PM",
        },
        {
            "id": 7,
            "isSelected": false,
            "isDisabled": false,
            "time": "03:30 PM",
        },
        {
            "id": 8,
            "isSelected": false,
            "isDisabled": false,
            "time": "04:00 PM",
        },
        {
            "id": 9,
            "isSelected": false,
            "isDisabled": false,
            "time": "04:30 PM",
        },
        {
            "id": 10,
            "isSelected": false,
            "isDisabled": true,
            "time": "05:30 PM",
        },
        {
            "id": 11,
            "isSelected": false,
            "isDisabled": true,
            "time": "06:00 PM",
        },
        {
            "id": 12,
            "isSelected": false,
            "isDisabled": true,
            "time": "06:30 PM",
        },
    ]

    const [selectedAvatar, setSelectedAvatar] = useState();

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
                    <View style={ styles.sectionsAppointment }>
                        <View>
                            <Text style={ styles.dateHeadText }>Select Your Date</Text>
                            <View style={ styles.selectDateButtonView }>
                                <TouchableOpacity style={ styles.selectDateButton }>
                                    <Text>{ `${day}-${month}-${year}` }</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
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
                        </View>
                        <View style={ [styles.anotherSection] }>
                            <Text style={ styles.dateHeadText }>Available Slot</Text>
                            <View style={ styles.appointmentSlotButton }>
                                <FlatList 
                                    numColumns={ 3 }
                                    data={ availableSlot }
                                    keyExtractor={ item => item.id }
                                    renderItem={ (item) => (
                                        <SlotButton 
                                            key={ item.item.id } 
                                            time={ item.item.time } 
                                            isSelected={ item.item.isSelected } 
                                            isDisabled={ item.item.isDisabled }
                                        /> 
                                    )}
                                />
                            </View>
                        </View>
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