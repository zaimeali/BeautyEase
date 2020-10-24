import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default function Boxes({ title, distance, image, layout, orgPrice, disPrice }) {
    return (
        <TouchableOpacity activeOpacity={ 0.5 } style={ styles.boxesView }>
            <View style={ styles.imageView }>
                <Image 
                    style={ layout === "lg" ? styles.logoImageLg : styles.logoImageSm }
                    source={ image }
                />
            </View>
            <Text style={ styles.titleText }>{ title }</Text>
            { distance && <Text style={ styles.distanceText }>{ distance }</Text> }
            {
                orgPrice && (
                    <View style={ styles.disOrgPrice }>
                        { orgPrice && <Text style={ [styles.priceStyle, styles.original] }>{ orgPrice }</Text> } 
                        { disPrice && <Text style={ [styles.priceStyle, styles.discount] }>{ disPrice }</Text> }
                    </View>
                )
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    logoImageLg: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    logoImageSm: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    imageView: {
        borderRadius: 10,
        elevation: 15,
    },
    boxesView: {
        marginRight: 10,
        paddingRight: 5,
    },
    titleText: {
        fontSize: 15,
        color: "#707070",
        fontWeight: "600",
        marginTop: 5,
    },
    distanceText: {
        fontSize: 13,
        color: "#707070",
        opacity: 0.75,
    },
    disOrgPrice: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
    },  
    priceStyle: {
        fontSize: 11,
    },
    discount: {
        color: "#00A80C",
    },
    original: {
        color: '#FF0909',
        textDecorationLine: "line-through",
    },
})
