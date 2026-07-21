import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetStartedScreen from './src/screens/GetStartedScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen'; 
import WishlistScreen from './src/screens/Wishlist'; 
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import Header from './src/navigation/Header';
import TabBar from './src/navigation/TabBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {navigationRef} from './src/utils/index';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {

  const HomeStackScreen = () => {
    return (
 <Stack.Navigator 
        initialRouteName="GetStarted"
        screenOptions={{
          header: () => <Header/>
        }}>
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name="GetStarted" component={GetStartedScreen} />

        </Stack.Group>

        <Stack.Group screenOptions={{animation: 'fade'}}>

          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Wishlist" component={WishlistScreen} />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        </Stack.Group>
        
      </Stack.Navigator>
    );
  }
  return (
     <NavigationContainer ref={navigationRef}>
      <Tab.Navigator screenOptions={{tabBarButton: () => <TabBar/>, headerShown: false}}>
        <Tab.Screen name="HomeScreen" component={HomeStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}