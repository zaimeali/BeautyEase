import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default function Avatar({ avatarImg }) {

    const [isSelected, setIsSelected] = useState(false)

    return (
        <TouchableOpacity 
            onPress={ () => setIsSelected(!isSelected) } 
            activeOpacity={ 0.5 } 
            style={ [styles.container, isSelected && styles.btnSelected] }
        >
            <Image 
                source={ avatarImg }
                style={ [styles.avatar] }
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 3,
        marginBottom: 5,
    }, 
    avatar: {
        height: 80,
        width: 80,
    },
    btnSelected: {
        backgroundColor: "#EA155D",
        borderRadius: 50,
    },
})
