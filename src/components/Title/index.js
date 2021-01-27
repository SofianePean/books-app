import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Title = ({ title }) => {

    const { container, bookTitle } = styles
    return(
        <View style={container}>
            <Text style={bookTitle}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bookTitle: {
        color: "white",
        fontFamily: "GTSectraFineRegular",
        fontSize: 30,
        fontWeight: '400',
        lineHeight: 30,
        marginTop: 40

    },
});

export default Title;