import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const loginScreen = () => {
  return (
    <View>
    <View style={styles.container}>
      <Text style={styles.titletext}>Welcome {'\n'}Back!</Text>
    </View>
    <View style={styles.girisinput}>
        <Image
        source={
            require('../../assets/kullanıcıadı.png')}
            style={styles.picture}
        />
        <TextInput
            style={styles.input}
            placeholder="Username or Email"
            placeholderTextColor="#A0A0A0"
            autoCapitalize="none"
        />
    </View>
    <View style={styles.girisinput}>
        <Image
        source={
            require('../../assets/Group 2.png')}
            style={styles.picture}
        />
        <TextInput 
        style={styles.input}
        placeholder= "Password"
        placeholderTextColor="#A0A0A0"
        autoCapitalize="none"
        />
        <TouchableOpacity>
            <Image
            source={require('../../assets/eye.png')}
            />
        </TouchableOpacity>
    </View>
    <TouchableOpacity style={styles.sifreunuttum}>
        <Text style={styles.sifreunuttumtext}>Forgot Password?</Text>
    </TouchableOpacity>
    <View style={styles.loginbuttoncont}>
        <TouchableOpacity style={styles.loginbutton}>
            <Text style={styles.loginbuttontext}> Login </Text>
        </TouchableOpacity>
    </View>

    <View >
        <Text Text style={styles.ortatext}> -Or continue with-</Text>
        <View style={styles.socialmediacont}>
            <Image
            source={require('../../assets/Google.png')}
            />
            <Image
            source={require('../../assets/Facebook (1).png')}
            />
            <Image
            source={require('../../assets/ioss.png')}
            />
        </View>
        <View style={styles.container5}>
        <Text>Create An Account</Text>
        <TouchableOpacity>
            <Text style={styles.Signuptext}> Sign up </Text>
        </TouchableOpacity>
        </View>
    </View>
    
    </View>
  )

}

export default loginScreen

const styles = StyleSheet.create({
  titletext: {
    fontSize: 36, // Ekrana daha iyi oturması için ideale çekildi
    fontWeight: '700',
    color: '#000000',
    lineHeight: 44,
    letterSpacing: -1,
  },
  container: {
    paddingHorizontal: 8,
    paddingTop: 40,
    paddingBottom: 20, // Tırnak kaldırıldı (sayısal yapıldı)
  },
  picture: {
    width: 18,
    height: 20,
    resizeMode: 'contain',
    marginRight: 12,
  },
  girisinput: {
    flexDirection: 'row',
    alignItems: 'center',        // İçerideki elemanları dikeyde ortalar
    backgroundColor: '#F3F3F3',  
    height: 55,                  
    borderRadius: 10,            
    borderWidth: 1,              
    borderColor: '#A8A8A8',      
    paddingHorizontal: 16,       
    marginBottom: 18,            
  },
  input: {
    flex: 1,             
    height: '100%',      
    fontSize: 14,
    color: '#000000',
  },
  sifreunuttum: {
    alignSelf: 'flex-end', 
    marginBottom: 28,      
    paddingRight: 2,
  },
  sifreunuttumtext: {
    color: '#FD6E8A',      
    fontSize: 12,
    fontWeight: '500',
  },
  loginbuttoncont: {
    marginBottom: 30, // Alt kısımla arayı açmak için
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
    gap: 16,            // İkonların arasını eşit mesafeyle açar
    marginTop: 5,
    marginBottom: 15,
  },
  container3: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container5: {
    flexDirection: 'row',
    justifyContent: 'center', // Alt metinleri ekranın ortasına getirir
    alignItems: 'center',
  },
  Signuptext: {
    color: '#F83758',
    fontWeight: 'bold',
    textDecorationLine: 'underline', // Tasarımdaki gibi altı çizili
  },
  ortatext: {
  textAlign: 'center', // Metni tam ortalar
  color: '#575757',
  fontSize: 12,
  marginTop: 15,
  marginBottom: 5,
}
});