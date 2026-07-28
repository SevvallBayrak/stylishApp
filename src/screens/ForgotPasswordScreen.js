import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Alert, 
  ActivityIndicator 
} from 'react-native';
import { ENDPOINTS } from '../config/api';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async () => {
    if (!email.trim()) {
      Alert.alert('Hata', 'Lütfen e-posta adresinizi girin.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(ENDPOINTS.FORGOT_PASSWORD, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Başarılı 📩', data.message, [
          { text: 'Giriş Yap', onPress: () => navigation.navigate('loginScreen') }
        ]);
      } else {
        Alert.alert('Hata', data.message || 'Bir hata oluştu.');
      }
    } catch (error) {
      console.error('Şifre sıfırlama hatası:', error);
      Alert.alert('Bağlantı Hatası', 'Sunucuya ulaşılamadı. Lütfen ağınızı kontrol edin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
      >
        <Image 
          source={require('../../assets/Vector 3.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>
      
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>Forgot {'\n'}password?</Text>
      </View>

      <View style={styles.formContainer}>
        
        <View style={styles.girisinput}>
          <Image
            source={require('../../assets/Mail.png')}
            style={styles.picture}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your email address"
            placeholderTextColor="#A0A0A0"
            autoCapitalize="none"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.uyariCont}>
          <Text style={styles.uyariText}>
            * We will send you a message to set or reset {'\n'}your new password
          </Text>
        </View>

        <View style={styles.buttonCont}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={handleForgotPassword}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text style={styles.buttonText}>Submit</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    paddingHorizontal: 28,
    paddingTop: 80,
    paddingBottom: 20,
  },
  titleText: {
    fontSize: 36,
    fontWeight: '700',
    color: '#000000',
    lineHeight: 44,
    letterSpacing: -0.5,
  },
  formContainer: {
    paddingHorizontal: 28,
  },
  picture: {
    width: 18,
    height: 20,
    resizeMode: 'contain',
    marginRight: 12,
  },
  girisinput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',  
    height: 55,                  
    borderRadius: 10,            
    borderWidth: 1,              
    borderColor: '#A8A8A8',      
    paddingHorizontal: 16,       
    marginBottom: 20,            
  },
  input: {
    flex: 1,             
    height: '100%',      
    fontSize: 14,
    color: '#000000',
  },
  uyariCont: {
    marginBottom: 25,
  },
  uyariText: {
    color: '#676767',
    fontSize: 12,
    lineHeight: 18,
  },
  buttonCont: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#F83758',     
    height: 55,                     
    borderRadius: 10,               
    justifyContent: 'center',       
    alignItems: 'center',           
  },
  buttonText: {
    color: '#FFFFFF',               
    fontSize: 18,                   
    fontWeight: 'bold',             
  },
  backButton:{
    marginTop: 60,
    marginLeft: 15,
  }
});