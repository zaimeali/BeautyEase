import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

// Components
import Boxes from './Boxes';

export default function SectionItem({ data }) {
    const nearbyPlaces = data.data;
    return (
        <View style={ styles.sections }>
            <Text>{ data.title }</Text>
            <FlatList 
                data={ nearbyPlaces }
                keyExtractor={ (item, i) => i }
                horizontal={ true }
                renderItem={(place, i) => (
                    <Boxes 
                        key={ i } 
                        title={ place.item.name } 
                        distance={ place.item.distance } 
                        logo={ place.item.logo }
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    sections: {
    }
})
