import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import composant
import BookPage from '../components/BookPage'

const { Screen, Navigator } = createStackNavigator();
// const Tab = createBottomTabNavigator();

const Navigation = () => {
    return(
      <NavigationContainer>
          <Navigator screenOptions={{headerTitleAlign: 'center'}}>
              <Screen name="Livre" component={BookPage} options={{ headerShown: false }}/>
          </Navigator>
      </NavigationContainer> 
    )
}

export default Navigation;