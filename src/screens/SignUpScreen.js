import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const loginScreen = ({navigation}) => {
  return (
    <View>
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
    <View style={styles.girisinput}>
        <Image
        source={
            require('../../assets/Group 2.png')}
            style={styles.picture}
        />
        <TextInput 
        style={styles.input}
        placeholder= "ConfirmPassword"
        placeholderTextColor="#A0A0A0"
        autoCapitalize="none"
        />
        <TouchableOpacity>
            <Image
            source={require('../../assets/eye.png')}
            />
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
        <TouchableOpacity style={styles.createbutton}>
            <Text style={styles.createbuttontext}> Create Account </Text>
        </TouchableOpacity>
        </View>
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
        <Text>I Already Have an Account</Text>
        <TouchableOpacity onPress={() => navigation.navigate('loginScreen')}>
            <Text style={styles.Signuptext}> Login </Text>
        </TouchableOpacity>
        </View>
    </View>
    
    </View>
  )

}

export default loginScreen

const styles = StyleSheet.create({
  titletext: {
    paddingHorizontal:18,
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
},
registerButtonText:{
    color: '#f14545',
},
sozlesmeText:{
    paddingHorizontal: 18,
    color: '#14131364',
    marginBottom: 20,
    marginLeft: 5,
},
mainContainer: {
    paddingHorizontal: 18,
    paddingTop: 20,
  },
  backButton:{
    marginTop: 60,
    marginLeft: 15,
  }
});