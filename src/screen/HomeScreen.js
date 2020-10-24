import React from 'react'
import { StyleSheet, Text, View, Dimensions, SafeAreaView, ScrollView, TextInput } from 'react-native'

// Components
import SectionItem from '../components/SectionItem';

const NEARBY_SALONS = {
    title: "Nearby Salons",
    layout: "lg",
    data: [
        {
            name: "Najla's Beauty\nSalon",
            distance: "2.2 km away",
            img: require("./../../assets/logos/najlas_logo.jpeg"),
        },
        {
            name: "Rose Beauty\nParlor",
            distance: "2.8 km away",
            img: require("./../../assets/logos/rose_logo.jpg"),
        },
        {
            name: "Kashee's Beauty\nSalon",
            distance: "3.7 km away",
            img: require("./../../assets/logos/kashees_logo.png"),
        },
        {
            name: "Saba Beauty\nSalon",
            distance: "4.3 km away",
            img: require("./../../assets/logos/saba_logo.jpg"),
        },
    ],
};
const OFFERS = {
    title: "Offers",
    layout: "sm",
    data: [
        {
            name: "Back Massage",
            originalPrice: "Rs.1,500",
            discountedPrice: "Rs.1,200",
            img: require("./../../assets/offers/rose_offer.jpeg"),
        },
        {
            name: "Mani Pedi",
            originalPrice: "Rs.1,100",
            discountedPrice: "Rs.800",
            img: require("./../../assets/offers/mani_pedi_kashees.jpg"),
        },
        {
            name: "Bridal Makeup",
            originalPrice: "Rs.15,000",
            discountedPrice: "Rs.11,800",
            img: require("./../../assets/offers/kashess_offer.jpg"),
        },
        {
            name: "Short Hair Cut",
            originalPrice: "Rs.300",
            discountedPrice: "Rs.200",
            img: require("./../../assets/offers/wavyShortBob.jpg"),
        },
    ],
};

const POPULAR_STYLES = {
    title: "Popular Styles",
    layout: "sm",
    data: [
        {
            name: "Smokey Eyes",
            img: require("./../../assets/popular/smokeyEyes.jpg"),
        },
        {
            name: "Glamour Haircut",
            img: require("./../../assets/popular/glamourMakeup.jpg"),
        },
        {
            name: "Bob Haircut",
            img: require("./../../assets/popular/BobHaircUt.jpg"),
        },
        {
            name: "Party Makeup",
            img: require("./../../assets/popular/partyMakeup.jpg"),
        },
    ],
};

export function HR() {
    return (
        <View
            style={{ width: windowWidth, alignItems: "center" }}
        >
            <View style={{
                borderWidth: 1,
                borderColor: "#C10E52",
                marginVertical: 10,
                width: windowWidth * 0.9,
                opacity: 0.2,
            }} />
        </View>
    )
}

export default function HomeScreen() {
    return (
        <SafeAreaView style={ styles.container }>
            <ScrollView>
                <View style={ styles.header }>
                    <Text>Beauty Ease</Text>
                </View>
                <View style={ styles.searchField }>
                    <TextInput 
                        style={ styles.input } 
                        placeholder="Search salons, services here..."
                        placeholderTextColor="#AD9393"
                    />
                </View>
                <SectionItem data={ NEARBY_SALONS } />
                <HR />
                <SectionItem data={ OFFERS } />
                <HR />
                <SectionItem data={ POPULAR_STYLES } />
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
        height: windowHeight * 0.15,
    },
    searchField: {
        alignItems: 'center',
        paddingVertical: 20,
    },  
    input: {
        height: 40, 
        borderColor: '#DF608B',
        borderWidth: 1,
        borderRadius: 20,
        width: windowWidth * 0.85,
        paddingHorizontal: 20,
        opacity: 0.8,
    },
    sectionHeader: {
        fontSize: 26,
    }
})
