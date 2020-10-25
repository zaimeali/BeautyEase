import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function Avatar({ avatarImg }) {
    return (
        <View style={ styles.container }>
            <Image 
                source={ avatarImg }
                style={ styles.avatar }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingRight: 10,
        paddingBottom: 10,
    }, 
    avatar: {
        height: 80,
        width: 80,
    }
})
