import React from "react";
import {View, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { navigationRef } from '../utils/index';

function Header() {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Text style={styles.menuIcon}>☰</Text>
          </TouchableOpacity>
          <Image
            source={require('../../assets/logoipsum-255 1.png')}
          />
          <TouchableOpacity 
            onPress={() => navigationRef?.navigate('Profile')} 
            activeOpacity={0.7}
            >
            <Image 
              source={require('../../assets/2289_SkVNQSBGQU1PIDEwMjgtMTE2 1.png')} 
              style={styles.profileImage} 
            />
          </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    height: 120,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  menuIcon: { fontSize: 24, color: '#333' },
  logoText: { fontSize: 20, fontWeight: 'bold', color: '#4361EE' },
  profileImage: { width: 40, height: 40, borderRadius: 20 },
});

export default Header;