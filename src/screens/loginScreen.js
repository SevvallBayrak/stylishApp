import AsyncStorage from '@react-native-async-storage/async-storage';
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

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun!');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(ENDPOINTS.LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // 🔑 TOKEN KAYDI: Backend'den userId/token geldiyse kaydediyoruz,
        // gelmediyse bile kullanıcının oturum açtığını belirten bayrağı yazıyoruz.
        const tokenToSave = data.userId || data.token || 'user_logged_in';
        await AsyncStorage.setItem('userToken', tokenToSave);

        Alert.alert('Başarılı 🚀', 'Giriş başarılı!', [
          { text: 'Devam Et', onPress: () => navigation.replace('MainApp') }
        ]);
      } else {
        Alert.alert('Giriş Başarısız', data.message || 'E-posta veya şifre hatalı.');
      }
    } catch (error) {
      console.error('Giriş Hatası:', error);
      Alert.alert('Bağlantı Hatası', 'Sunucuya ulaşılamadı. Lütfen ağınızı ve sunucunuzu kontrol edin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={styles.container}>
        <Text style={styles.titletext}>Welcome {'\n'}Back!</Text>
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.girisinput}>
          <Image
            source={require('../../assets/kullanıcıadı.png')}
            style={styles.picture}
          />
          <TextInput
            style={styles.input}
            placeholder="Username or Email"
            placeholderTextColor="#A0A0A0"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.girisinput}>
          <Image
            source={require('../../assets/Group 2.png')}
            style={styles.picture}
          />
          <TextInput 
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#A0A0A0"
            autoCapitalize="none"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image source={require('../../assets/eye.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.sifreunuttum}
        onPress={() => navigation.navigate('ForgotPasswordScreen')}
      >
        <Text style={styles.sifreunuttumtext}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.mainContainer}>
        <View style={styles.loginbuttoncont}>
          <TouchableOpacity 
            style={styles.loginbutton} 
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text style={styles.loginbuttontext}> Login </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Text style={styles.ortatext}>- Or continue with -</Text>
        <View style={styles.socialmediacont}>
          <Image source={require('../../assets/Google.png')} />
          <Image source={require('../../assets/Facebook (1).png')} />
          <Image source={require('../../assets/ioss.png')} />
        </View>
        <View style={styles.container5}>
          <Text style={{ color: '#575757' }}>Create An Account </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={styles.Signuptext}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  titletext: {
    paddingHorizontal: 18,
    fontSize: 56,
    fontWeight: '700',
    color: '#000000',
    lineHeight: 60,
    letterSpacing: -0.5,
  },
  container: {
    paddingHorizontal: 8,
    paddingTop: 80,
    paddingBottom: 15,
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
    height: 60,                  
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
  sifreunuttum: {
    alignSelf: 'flex-end', 
    marginBottom: 25,      
    paddingRight: 18,
  },
  sifreunuttumtext: {
    color: '#FD6E8A',      
    fontSize: 12,
    fontWeight: '500',
  },
  loginbuttoncont: {
    marginBottom: 10,
  },
  loginbutton: {
    backgroundColor: '#F83758',     
    height: 55,                     
    borderRadius: 10,               
    justifyContent: 'center',       
    alignItems: 'center',           
  },
  loginbuttontext: {
    color: '#FFFFFF',               
    fontSize: 18,                   
    fontWeight: 'bold',             
  },
  socialmediacont: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    marginTop: 5,
    marginBottom: 15,
  },
  container5: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Signuptext: {
    color: '#F83758',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  ortatext: {
    textAlign: 'center',
    color: '#575757',
    fontSize: 12,
    marginTop: 15,
    marginBottom: 5,
  },
  mainContainer: {
    paddingHorizontal: 18,
  },
});