import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { prefix } from '../../utils/constant';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
    const { container, closeIcon, cartIcon } = styles
    return(
        <View style={container}>
            <Ionicons name={`${prefix}-close`} style={closeIcon}/>
            <Ionicons name={`${prefix}-cart`} style={cartIcon} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 38,
        marginVertical: 20
    },
    closeIcon: {
        fontSize: 45,
        color: "white"
    },
    cartIcon: {
        fontSize: 45,
        color: "white"
    }
})

export default Header;