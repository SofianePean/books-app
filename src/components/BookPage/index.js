import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { prefix } from '../../utils/constant';
import { Ionicons } from '@expo/vector-icons';

// Import composant
import Header from '../Header';
import Cover from '../Cover';

// Récupération de l'image
const book1 = require('../../../assets/images/book1.png')


const BookPage = () => {
    const { container, coverContainer } = styles
    return(
        <View style={container}>
            <Header />
            <View style={coverContainer}>
                <Cover image={book1}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    coverContainer: {
        alignItems: 'center'
    }
})

export default BookPage;