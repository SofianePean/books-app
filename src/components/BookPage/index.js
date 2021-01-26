import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { prefix } from '../../utils/constant';
import { Ionicons } from '@expo/vector-icons';

// Import composant
import Header from '../Header'


const BookPage = () => {
    return(
        <View style={styles.container}>
            <Header />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000"
    }
})

export default BookPage;