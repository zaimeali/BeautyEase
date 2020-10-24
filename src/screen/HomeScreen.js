import React from 'react'
import { StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native'
import { FlatList, TextInput } from 'react-native-gesture-handler'

// Components
import SectionItem from '../components/SectionItem';

const DATA = [
    {
        title: "Nearby Salons",
        data: ["Kashee's Beauty Salon", "Najla's Beauty Salon", "Rose Beauty Parlor"]
    },
    {
        title: "Offers",
        data: ["Back Massage", "Mani Pedi", "Bridal Makeup"]
    },
    {
        title: "Popular Styles",
        data: ["Smokey Eyes Makeup", "Glamour Makeup", "Bob Haircut"]
    },
];

const NEARBY_SALONS = {
    title: "Nearby Salons",
    data: [
        {
            name: "Najla's Beauty Salon",
            distance: "2.2 km away",
            logo: require("./../../assets/logos/najlas_logo.jpeg"),
        },
        {
            name: "Rose Beauty Parlor",
            distance: "2.8 km away",
            logo: require("./../../assets/logos/rose_logo.jpg"),
        },
        {
            name: "Kashee's Beauty Salon",
            distance: "3.7 km away",
            logo: require("./../../assets/logos/kashees_logo.png"),
        },
        {
            name: "Saba Beauty Salon",
            distance: "4.3 km away",
            logo: require("./../../assets/logos/saba_logo.jpg"),
        },
    ],
};

export default function HomeScreen() {
    return (
        <SafeAreaView style={ styles.container }>
            <View style={ styles.header }>
                <Text>Beauty Ease</Text>
            </View>
            <View style={ styles.searchField }>
                <TextInput 
                    style={ styles.input } 
                    placeholder="Search salons, services here..."
                />
            </View>
            <SectionItem data={ NEARBY_SALONS } />
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
        height: windowHeight * 0.15,
    },
    searchField: {
        alignItems: 'center',
        paddingVertical: 20,
    },  
    input: {
        height: 40, 
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        width: windowWidth * 0.85,
        paddingHorizontal: 20,
    },
    sectionHeader: {
        fontSize: 26,
    }
})
