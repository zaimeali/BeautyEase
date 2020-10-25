import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import CountDown from 'react-native-countdown-component';
// import LinearGradient from 'react-native-linear-gradient'

export default function Queue(props) {

    const tokenNumber = props.route.params.token;
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
                    <Text style={ styles.headText }>Queue</Text>
                </View>
                <View style={ styles.bookAppointment }>
 
                    <View style={ styles.sectionsAppointment }>
                    <View>
                    <Text style={ styles.dateHeadText }>Queue</Text>
                    </View>
                    <View>
                    <Text style={ styles.dateHeadText }>Token Number</Text>
                        <View style={ styles.token }>
                        <Text style={ styles.tokenNum}>{ tokenNumber }</Text>
                        </View>
                    </View>
                    <View>
                    <Text style={ styles.dateHeadText }>Waiting Time</Text>
                        
                        <Text style={ styles.timer}>
                        <CountDown
                        until={30}
                        onFinish={() => alert('Your Waiting Time is Over')}
                        size={20}
                        digitStyle={{backgroundColor:"white"}}
                        digitTxtStyle={{color:"#EA155D"}}
                      /></Text>
                    </View>
                    </View>
                </View>
                <View style={ styles.buttonView }>
                    <TouchableOpacity onPress={ () => props.navigation.navigate('Book Now') } activeOpacity={ 0.5 } style={ styles.confirmButton }>
                        <Text style={ styles.appointmentButton }>Cancel</Text>
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
    token :{
        height:140,
        width:140,
        backgroundColor:"#EA155D",
        borderRadius:70,
        borderWidth:1,
        borderColor:"#EA155D",
        alignSelf:'center',
        marginVertical:6,
        elevation: 15,
    },
    tokenNum: {
        alignSelf:'center',
        paddingVertical:20,
        fontSize:70,
        color:'white'
    },
    timer: {
        fontSize: 30,
        alignSelf:'center',

    }

})