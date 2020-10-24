import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

// Components
import Boxes from './Boxes';

export default function SectionItem({ data }) {
    const nearbyPlaces = data.data;
    return (
        <View style={ styles.sections }>
            <Text style={ styles.sectionHeading }>{ data.title }</Text>
            <FlatList 
                style={ styles.flatList }
                data={ nearbyPlaces }
                keyExtractor={ (item, i) => i }
                horizontal={ true }
                renderItem={(place, i) => (
                    <Boxes 
                        key={ i } 
                        title={ place.item.name } 
                        distance={ place.item.distance } 
                        image={ place.item.img }
                        orgPrice={ place.item.originalPrice }
                        disPrice={ place.item.discountedPrice }
                        layout={ data.layout }
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    sections: {
        marginHorizontal: 10,
    },
    sectionHeading: {
        fontSize: 20,
        marginBottom: 15,
        color: '#2D2D2D',
        opacity: 0.8,
    },  
    flatList: {
        paddingBottom: 15,
        backgroundColor: "white"
    },
})
