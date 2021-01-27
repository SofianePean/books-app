import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { prefix } from '../../utils/constant';
import { Ionicons } from '@expo/vector-icons';

// Import composant
import Header from '../Header';
import Cover from '../Cover';
import Title from '../Title';
import Rating from '../Rating';
import Action from '../Action';
import CoverList from '../CoverList';

// Récupération de l'image
const book1 = require('../../../assets/images/book1.png')

const images = [
    { imageSrc: require('../../../assets/images/book1.png'), id: "1" },
    { imageSrc: require('../../../assets/images/book2.png'), id: "2" },
    { imageSrc: require('../../../assets/images/book3.png'), id: "3" },
    { imageSrc: require('../../../assets/images/book4.png'), id: "4" },
    { imageSrc: require('../../../assets/images/book5.png'), id: "5" },
    { imageSrc: require('../../../assets/images/book6.png'), id: "6" },
    { imageSrc: require('../../../assets/images/book1.png'), id: "7" },
    { imageSrc: require('../../../assets/images/book2.png'), id: "8" },
    { imageSrc: require('../../../assets/images/book3.png'), id: "9" },
    { imageSrc: require('../../../assets/images/book4.png'), id: "10" }
]

const BookPage = () => {
    const { container, coverContainer } = styles
    return(
        <ScrollView>

        <View style={container}>
            <Header />
            <View style={coverContainer}>
                <Cover image={book1}/>
                <Title title="The Jungle Book" />
                <Title title="Rudyard Kliping" customStyle={styles.sbTitle}/>
                <Rating />
                <Action />
                <Title left title="You may also like" customStyle={styles.leftStyle}/>
                <CoverList images={images}/>
            </View>
        </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    coverContainer: {
        alignItems: 'center',
        marginTop: 20
    },
    sbTitle: {
        opacity: 0.7,
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 18,
        marginTop: 13
    },
    leftStyle: {
        color: 'white',
        fontFamily: 'MontserratSemiBold',
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 14
    }
})

export default BookPage;