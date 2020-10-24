import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function Boxes({ title, distance, logo }) {
    return (
        <View style={ styles.boxesView }>
            <View style={ styles.imageView }>
                <Image 
                    style={ styles.logoImage }
                    source={ logo }
                />
            </View>
            <Text>{ title }</Text>
            <Text>{ distance }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logoImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    imageView: {
        borderRadius: 10,
        elevation: 15,
    },
    boxesView: {
        marginHorizontal: 5,
    }
})
