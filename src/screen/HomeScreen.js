import React from 'react'
import { StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

// Components
import Boxes from '../components/Boxes';

export default function HomeScreen() {
    return (
        <SafeAreaView style={ styles.container }>
            <View style={ styles.header }>
                <Text>Beauty Ease</Text>
            </View>
            <FlatList 
                renderItem={ Boxes }
            />
        </SafeAreaView>
    )
}

const windowHeight = Dimensions.get('window').height;

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
})
