import React, { useState } from "react";
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { navigationRef } from '../utils/index';
import { CommonActions, StackActions } from '@react-navigation/native';

function TabBar() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <View style={styles.tabBarContainer}>
      
      <TouchableOpacity 
        style={styles.tabItem} 
        onPress={() => {
          setActiveTab('Home');
                    const currentRoute = navigationRef?.getCurrentRoute()?.name;
          if (currentRoute === 'Home') {
            return;
          }
          navigationRef?.navigate('HomeScreen', { screen: 'Home' });
        }}
      >
        <Image 
          source={
            activeTab === 'Home'
              ? require('../../assets/home.png') 
              : require('../../assets/home 1.png')
          }
          style={styles.tabIconImage}
          resizeMode="contain"
        />
        <Text style={[styles.tabText, activeTab === 'Home' && styles.activeTabText]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.tabItem} 
        onPress={() => {
          setActiveTab('Wishlist');
          navigationRef?.navigate('Wishlist');
        }}
      >
        <Image 
          source={
            activeTab === 'Wishlist' 
              ? require('../../assets/heart 1.png') 
              : require('../../assets/Vectorhear.png')
          }
          style={styles.tabIconImage}
          resizeMode="contain"
        />
        <Text style={[styles.tabText, activeTab === 'Wishlist' && styles.activeTabText]}>Wishlist</Text>
      </TouchableOpacity>

      <View style={styles.cartButtonWrapper}>
        <TouchableOpacity 
          style={[styles.cartButton, activeTab === 'Cart' && styles.activeCartButton]} 
          onPress={() => setActiveTab('Cart')}
        >
          <Image 
            source={
              activeTab === 'Cart' 
                ? require('../../assets/shopping-cart 2.png') 
                : require('../../assets/shopping-cart 2.png')
            }
            style={styles.cartIconImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.tabItem} 
        onPress={() => setActiveTab('Search')}
      >
        <Image 
          source={
            activeTab === 'Search' 
              ? require('../../assets/search 1.png') 
              : require('../../assets/search 1.png')
          }
          style={styles.tabIconImage}
          resizeMode="contain"
        />
        <Text style={[styles.tabText, activeTab === 'Search' && styles.activeTabText]}>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.tabItem} 
        onPress={() => setActiveTab('Setting')}
      >
        <Image 
          source={
            activeTab === 'Setting' 
              ? require('../../assets/settings.png') 
              : require('../../assets/settings.png')
          }
          style={styles.tabIconImage}
          resizeMode="contain"
        />
        <Text style={[styles.tabText, activeTab === 'Setting' && styles.activeTabText]}>Setting</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 75,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 10,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabIconImage: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  tabText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#000000',
  },
  activeTabText: {
    color: '#FD6E8A',
    fontWeight: 'bold',
  },
  cartButtonWrapper: {
    position: 'relative',
    top: -20,
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  activeCartButton: {
    borderColor: '#FD6E8A',
    borderWidth: 1.5,
  },
  cartIconImage: {
    width: 26,
    height: 26,
  },
});

export default TabBar;