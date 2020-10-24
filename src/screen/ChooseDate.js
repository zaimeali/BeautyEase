import React, { useState } from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, Text, View, Dimensions } from 'react-native'

import CalendarPicker from 'react-native-calendar-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

function onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  

export default function ChooseDate() {

    const image = require('./../../assets/bgImage.png');

    const [selectedDate, setSelectedDate] = useState('1');
    const [selectedMonth, setSelectedMonth] = useState('1');
    const [selectedYear, setSelectedYear] = useState('1');
    const [selectedDay, setSelectedDay] = useState('1');

    

    return (
        <SafeAreaView style={ styles.container }>
            <ImageBackground
                source={ image }
                resizeMode="cover"
                style={ styles.image }
            >
                <Text style={ styles.headText }>Choose Date</Text>
                <View style={ styles.bookAppointment }>
                    <CalendarPicker
                        selectedDayTextColor="#FFFFFF"
                        onDateChange={ (date) => console.warn(date) }
                        width={ windowWidth * 0.9 }
                        selectedDayStyle={{ backgroundColor: "#EA155D" }}
                    />
                </View>
                <View style={ styles.buttonView }>
                    <TouchableOpacity activeOpacity={ 0.5 } style={ styles.confirmButton }>
                        <Text style={ styles.dateButton }>Confirm Date</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

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
    bookAppointment: {
        elevation: 15,
        borderRadius: 10,
        alignSelf: "center",
        backgroundColor: "white",
    },
    headText: {
        color: "white",
        fontSize: 24,
        fontWeight: "600",
        alignSelf: "center",
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
    },
    dateButton: {
        color: "white",
        fontSize: 17,
    },
})
