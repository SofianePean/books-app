import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, } from 'react-native';
import Constants from 'expo-constants';
import * as Font from 'expo-font';

// Import composant
import Navigation from './src/navigation';
import Loading from './src/components/Loading'



export default function App() {
  const [loading, setLoading] = useState(true)

  const loadFont = async() => {
    try {
        await Font.loadAsync({
            'Gilroy-Bold': require('./assets/fonts/Gilroy-Bold.ttf'),
            "GT-Sectra-Fine-Regular": require('./assets/fonts/GT-Sectra-Fine-Regular.ttf'),
            "Montserrat-Black": require('./assets/fonts/Montserrat-Black.ttf')
        })
        setLoading(false);
    } catch (e) {
        console.log(e)
        setLoading(false);
    }
  }

  useEffect(() => {
    loadFont()
    console.log(Platform.OS)
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      { loading ? <Loading /> : <Navigation />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
});
