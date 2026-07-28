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

const SignUpScreen = ({ navigation }) => {
  // 1. Form state'leri
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // 2. Kayıt olma fonksiyonu
  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun!');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Hata', 'Şifreler birbiriyle eşleşmiyor!');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(ENDPOINTS.REGISTER, {
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
        Alert.alert('Başarılı 🚀', 'Kullanıcı kaydı başarıyla tamamlandı!', [
          { text: 'Giriş Yap', onPress: () => navigation.navigate('loginScreen') }
        ]);
      } else {
        Alert.alert('Kayıt Başarısız', data.message || 'Bir hata oluştu.');
      }
    } catch (error) {
      console.error('Kayıt hatası:', error);
      Alert.alert('Bağlantı Hatası', 'Sunucuya ulaşılamadı. Lütfen ağınızı ve sunucunuzu kontrol edin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
      >
        <Image 
          source={require('../../assets/Vector 3.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.titletext}>Create an {'\n'}account</Text>
      </View>

      <View style={styles.mainContainer}>
        {/* Email Input */}
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

        {/* Password Input */}
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

        {/* Confirm Password Input */}
        <View style={styles.girisinput}>
          <Image
            source={require('../../assets/Group 2.png')}
            style={styles.picture}
          />
          <TextInput 
            style={styles.input}
            placeholder="ConfirmPassword"
            placeholderTextColor="#A0A0A0"
            autoCapitalize="none"
            secureTextEntry={!showPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image source={require('../../assets/eye.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.sozlesmeText}>
        By clicking the{' '}
        <Text 
          style={styles.registerButtonText} 
          onPress={() => console.log('Register tıklandı!')}
        >
          Register
        </Text>
        {' '}button, you agree {'\n'} to the public offer
      </Text>

      <View style={styles.createbuttoncont}>
        <View style={styles.mainContainer}>
          <TouchableOpacity 
            style={styles.createbutton}
            onPress={handleRegister}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text style={styles.createbuttontext}> Create Account </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Text style={styles.ortatext}> -Or continue with-</Text>
        <View style={styles.socialmediacont}>
          <Image source={require('../../assets/Google.png')} />
          <Image source={require('../../assets/Facebook (1).png')} />
          <Image source={require('../../assets/ioss.png')} />
        </View>
        <View style={styles.container5}>
          <Text>I Already Have an Account</Text>
          <TouchableOpacity onPress={() => navigation.navigate('loginScreen')}>
            <Text style={styles.Signuptext}> Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;

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
    paddingTop: 35,
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
    marginBottom: 30,            
  },
  input: {
    flex: 1,             
    height: '100%',      
    fontSize: 14,
    color: '#000000',
  },
  createbuttoncont: {
    marginTop: 20,
    marginBottom: 10,
  },
  createbutton: {
    backgroundColor: '#F83758',     
    height: 55,                     
    borderRadius: 10,               
    justifyContent: 'center',       
    alignItems: 'center',           
  },
  createbuttontext: {
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
  container3: {
    alignItems: 'center',
    justifyContent: 'center',
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
  registerButtonText: {
    color: '#f14545',
  },
  sozlesmeText: {
    paddingHorizontal: 18,
    color: '#14131364',
    marginBottom: 20,
    marginLeft: 5,
  },
  mainContainer: {
    paddingHorizontal: 18,
    paddingTop: 20,
  },
  backButton: {
    marginTop: 60,
    marginLeft: 15,
  }
});