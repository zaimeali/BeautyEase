import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function SlotButton({ time, isSelected, isDisabled }) {

    const [selected, setSelected] = useState(isSelected)

    return (
        <TouchableOpacity 
            style={ [styles.slotBtn, selected ? styles.selectedBtn : styles.unselectedBtn, isDisabled && styles.disabledBtn] }
            onPress={ () => setSelected(!selected) }
            activeOpacity={ isDisabled && 1 }
        >
            <Text style={ !isDisabled && selected ? { color: "white" } : { color: "black" } }>{ time }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    slotBtn: {
        marginRight: 5,
        marginBottom: 5,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    selectedBtn: {
        backgroundColor: "#EA155D",
    },
    unselectedBtn: {
        backgroundColor: "#F98CD1",
    },
    disabledBtn: {
        backgroundColor: "#93878B",
    }
})
