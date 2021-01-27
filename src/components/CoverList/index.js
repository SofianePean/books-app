import React from 'react';
import { Image, View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// Import composant
import Cover from '../Cover';

const CoverList = ({images}) => {

    const renderCover = ({ item }) => {
        return(
            <TouchableOpacity>
                <Cover small image={item.imageSrc}/>
            </TouchableOpacity>
        )
    }
    return(
        <FlatList
            style={styles.flex}
            contentContainerStyle={styles.padding}
            data={images}
            horizontal={true}
            renderItem={item => renderCover(item)}
            keyExtractor={item => item.id}
        />
    )
};

const styles = StyleSheet.create({
    padding: {
        paddingHorizontal: 20
    },
    flex: {
        flex: 1
    }
})

export default CoverList;