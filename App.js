import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import GetStartedScreen from './src/screens/GetStartedScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen'; 
import WishlistScreen from './src/screens/Wishlist'; 
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import SignUpScreen from './src/screens/SignUpScreen'; // ✅ ./src yapıldı
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import loginScreen from './src/screens/loginScreen';
import Header from './src/navigation/Header';
import TabBar from './src/navigation/TabBar';
import { navigationRef } from './src/utils/index';


const RootStack = createStackNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator 
      initialRouteName="loginScreen"
      screenOptions={{ header: () => <Header /> }}
    >
      <Stack.Group screenOptions={{ animation: 'fade' }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Wishlist" component={WishlistScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarButton: () => <TabBar />, headerShown: false }}>
      <Tab.Screen name="HomeScreen" component={HomeStackScreen} />
    </Tab.Navigator>
  );
};

export default function App() {

  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const hasLaunched = await AsyncStorage.getItem('hasLaunched');
        if (hasLaunched === 'true') {
          setIsFirstLaunch(false);
        } else {
          setIsFirstLaunch(true);
        }
      } catch (error) {
        setIsFirstLaunch(false);
      }
    };

    checkFirstLaunch();
  }, []);

  if (isFirstLaunch === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
        <ActivityIndicator size="large" color="#FD6E8A" />
      </View>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      
      <RootStack.Navigator
       initialRouteName="ForgotPasswordScreen"
       screenOptions={{ headerShown: false}}>
        <RootStack.Screen name="loginScreen" component={loginScreen} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
        <RootStack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />

        {isFirstLaunch ? (
          
          <>
            <RootStack.Screen name="GetStarted" component={GetStartedScreen} />
            <RootStack.Screen name="MainApp" component={MainTabNavigator} />
          </>
        ) : (
          <>
            <RootStack.Screen name="MainApp" component={MainTabNavigator} />
          </>
        )}
        <RootStack.Screen name="Profile" component={ProfileScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}