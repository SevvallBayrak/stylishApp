import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GetStartedScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../assets/get_started_bg.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.overlayContainer}>
        <View style={styles.bottomContent}>
          
          <Text style={styles.mainTitle}>
            You want{'\n'}Authentic, here{'\n'}you go!
          </Text>

          <Text style={styles.subTitle}>
            Find it here, buy it now!
          </Text>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
  bottomContent: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingBottom: 40,
  },
  mainTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 44,
    marginBottom: 12,
  },
  subTitle: {
    fontSize: 14,
    color: '#EAEAEA',
    textAlign: 'center',
    marginBottom: 32,
    fontWeight: '400',
  },
  button: {
    backgroundColor: '#FD6E8A',
    width: '100%',
    height: 54,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FD6E8A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GetStartedScreen;