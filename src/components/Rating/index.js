import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { prefix } from '../../utils/constant';
import { Ionicons } from '@expo/vector-icons';

const Rating = ({}) => {

    const { container, star, rate, votes } = styles
    return(
        <View style={container}>
            <Ionicons style={star} name={`${prefix}-star`}/>
            <Text style={rate}>4.8</Text>
            <Text style={votes}>2578</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 148,
        height: 27,
        alignItems: 'center',
        paddingHorizontal: 27
    },
    star: {
        color: "#ffdd4f"
    },
    rate: {
        color: 'white',
        fontFamily: 'MontserratMedium',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 16
    },
    votes: {
        color: 'white',
        opacity: 0.5,
        fontFamily: 'MontserratBlack',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 14
    }
});

export default Rating;