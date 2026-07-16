import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

const ProfileScreen = ({ navigation }) => {
  // Girdi Alanları için State Tanımlamaları (Görseldeki varsayılan değerlerle)
  const [email, setEmail] = useState('aashifa@gmail.com');
  const [password, setPassword] = useState('************');
  const [pincode, setPincode] = useState('450116');
  const [address, setAddress] = useState('216 St Paul\'s Rd,');
  const [city, setCity] = useState('London');
  const [stateVal, setStateVal] = useState('N1 2LL,');
  const [country, setCountry] = useState('United Kingdom');
  const [bankAccountNumber, setBankAccountNumber] = useState('204356XXXXXXXX');
  const [accountHolderName, setAccountHolderName] = useState('Abhiraj Sisodiya');
  const [ifscCode, setIfscCode] = useState('SBIN00428');

  return (
    <SafeAreaView style={styles.container}>
      {/* Klavye açıldığında inputların kapanmaması için */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        {/* Üst Bar / Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backArrow}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Checkout</Text>
          <View style={{ width: 40 }} />{/* Başlığı ortalamak için boş spacer */}
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
          {/* 1. Profil Resmi ve Düzenle İkonu */}
          <View style={styles.avatarContainer}>
            <View style={styles.avatarWrapper}>
              <Image
                source={require('../../assets/2289_SkVNQSBGQU1PIDEwMjgtMTE2 1.png')}
                style={styles.avatar}
              />
              <TouchableOpacity style={styles.editBadge} activeOpacity={0.8}>
                <Text style={styles.editBadgeText}>✎</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* 2. Personal Details Bölümü */}
          <View style={styles.section}>
            <Text style={styles.sectionHeaderTitle}>Personal Details</Text>
            
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            
            <TouchableOpacity style={styles.changePasswordButton}>
              <Text style={styles.changePasswordText}>Change Password</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          {/* 3. Business Address Details Bölümü */}
          <View style={styles.section}>
            <Text style={styles.sectionHeaderTitle}>Business Address Details</Text>

            <Text style={styles.inputLabel}>Pincode</Text>
            <TextInput
              style={styles.input}
              value={pincode}
              onChangeText={setPincode}
              keyboardType="numeric"
            />

            <Text style={styles.inputLabel}>Address</Text>
            <TextInput
              style={styles.input}
              value={address}
              onChangeText={setAddress}
            />

            <Text style={styles.inputLabel}>City</Text>
            <TextInput
              style={styles.input}
              value={city}
              onChangeText={setCity}
            />

            <Text style={styles.inputLabel}>State</Text>
            <View style={styles.dropdownContainer}>
              <TextInput
                style={styles.dropdownInput}
                value={stateVal}
                onChangeText={setStateVal}
              />
              <Text style={styles.dropdownArrow}>⌃</Text> 
            </View>

            <Text style={styles.inputLabel}>Country</Text>
            <TextInput
              style={styles.input}
              value={country}
              onChangeText={setCountry}
            />
          </View>

          <View style={styles.divider} />

          {/* 4. Bank Account Details Bölümü */}
          <View style={styles.section}>
            <Text style={styles.sectionHeaderTitle}>Bank Account Details</Text>

            <Text style={styles.inputLabel}>Bank Account Number</Text>
            <TextInput
              style={styles.input}
              value={bankAccountNumber}
              onChangeText={setBankAccountNumber}
              keyboardType="numeric"
            />

            <Text style={styles.inputLabel}>Account Holder's Name</Text>
            <TextInput
              style={styles.input}
              value={accountHolderName}
              onChangeText={setAccountHolderName}
            />

            <Text style={styles.inputLabel}>IFSC Code</Text>
            <TextInput
              style={styles.input}
              value={ifscCode}
              onChangeText={setIfscCode}
              autoCapitalize="characters"
            />
          </View>

          {/* 5. Kaydet Butonu */}
          <TouchableOpacity style={styles.saveButton} activeOpacity={0.9}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 56,
    backgroundColor: '#FAFAFA',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 32,
    color: '#000',
    fontWeight: '300',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  avatarContainer: {
    alignItems: 'center',
    marginVertical: 24,
  },
  avatarWrapper: {
    position: 'relative',
    width: 100,
    height: 100,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#EAEAEA',
  },
  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#4B97FA', // Görseldeki mavi düzenleme butonu rengi
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  editBadgeText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 10,
  },
  sectionHeaderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  input: {
    height: 48,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
    marginBottom: 16,
  },
  changePasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 8,
  },
  changePasswordText: {
    color: '#FD6E8A', // Temadaki pembe renk tonu
    fontSize: 12,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#EAEAEA',
    marginVertical: 16,
  },
  dropdownContainer: {
    position: 'relative',
    justifyContent: 'center',
    marginBottom: 16,
  },
  dropdownInput: {
    height: 48,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    paddingHorizontal: 16,
    paddingRight: 40,
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  dropdownArrow: {
    position: 'absolute',
    right: 16,
    fontSize: 16,
    color: '#888',
    transform: [{ rotate: '180deg' }], // Ok simgesini aşağı döndürmek için
  },
  saveButton: {
    backgroundColor: '#FD6E8A', // Buton pembe rengi
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    shadowColor: '#FD6E8A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;