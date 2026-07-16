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
  Dimensions 
} from 'react-native'; // 📍 FlatView hatası temizlendi!
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const COLUMN_WIDTH = (width - 48) / 2; // İki sütunlu yapı için genişlik hesabı

// Görseldeki Ürün Verileri
const wishlistProducts = [
  {
    id: '1',
    title: 'Black Winter...',
    description: 'Autumn And Winter Casual cotton-padded jacket...',
    price: '499',
    rating: '4.2',
    reviewCount: '6,890',
    image: require('../../assets/black_winter_hoodie.png'), 
  },
  {
    id: '2',
    title: 'Mens Starry',
    description: 'Mens Starry Sky Printed Shirt 100% Cotton Fabric',
    price: '399',
    rating: '4.5',
    reviewCount: '1,52,344',
    image: require('../../assets/mens_starry_shirt.png'),
  },
  {
    id: '3',
    title: 'Black Dress',
    description: 'Solid Black Dress for Women, Sexy Chain Shorts Lady...',
    price: '2,000',
    rating: '4.3',
    reviewCount: '5,23,456',
    image: require('../../assets/black_dress.png'),
  },
  {
    id: '4',
    title: 'Pink Embroide...',
    description: 'EARTHEN Rose Pink Embroidered Tiered Max...',
    price: '1,900',
    rating: '4.1',
    reviewCount: '45,678',
    image: require('../../assets/pink_embroidered.png'),
  },
  {
    id: '5',
    title: 'Flare Dress',
    description: 'Antheia Black & Rust Orange Floral Print Tiered Midi F...',
    price: '1,990',
    rating: '4.4',
    reviewCount: '3,35,566',
    image: require('../../assets/flare_dress.png'),
  },
  {
    id: '6',
    title: 'denim dress',
    description: 'Blue cotton denim dress Look 2 Printed cotton dr...',
    price: '999',
    rating: '4.2',
    reviewCount: '27,344',
    image: require('../../assets/denim_dress.png'),
  },
  {
    id: '7',
    title: 'Jordan Stay',
    description: 'The classic Air Jordan 12 to create a shoe that\'s fres...',
    price: '4,599',
    rating: '4.6',
    reviewCount: '10,23,456',
    image: require('../../assets/jordan_stay.png'),
  },
  {
    id: '8',
    title: 'Realme 7',
    description: '6 GB RAM | 64 GB ROM | Expandable Upto 256...',
    price: '3,499',
    rating: '4.3',
    reviewCount: '3,44,507',
    image: require('../../assets/realme_7.png'),
  },
  {
    id: '9',
    title: 'Sony PS4',
    description: 'Sony PS4 Console, 1TB Slim with 3 Games: Gran Turis...',
    price: '1,999',
    rating: '4.0',
    reviewCount: '8,35,566',
    image: require('../../assets/sony_ps4.png'),
  },
  {
    id: '10',
    title: 'Black Jacket 12...',
    description: 'This warm and comfortable jacket is great for learni...',
    price: '2,999',
    rating: '4.5',
    reviewCount: '2,23,569',
    image: require('../../assets/black_jacket_12.png'),
  },
  {
    id: '11',
    title: 'D7200 Digital C...',
    description: 'D7200 Digital Camera (Nikon) In New Area...',
    price: '26,999',
    rating: '4.7',
    reviewCount: '67,454',
    image: require('../../assets/nikon_d7200.png'),
  },
  {
    id: '12',
    title: "men's & boys s...",
    description: 'George Walker Derby Brown Formal Shoes',
    price: '999',
    rating: '4.1',
    reviewCount: '13,45,678',
    image: require('../../assets/brown_formal_shoes.png'),
  },
];

const Wishlist = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Wishlist');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 110 }}>
        
        {/* 1. Üst Bar */}
        <View style={styles.header}>
          <TouchableOpacity><Text style={styles.menuIcon}>☰</Text></TouchableOpacity>
          <Image
            source={require('../../assets/logoipsum-255 1.png')}
          />
          {/* Profil resmine tıklandığında Profile gitme entegrasyonu */}
          <TouchableOpacity onPress={() => navigation.navigate('Profile')} activeOpacity={0.7}>
            <Image 
              source={require('../../assets/2289_SkVNQSBGQU1PIDEwMjgtMTE2 1.png')} 
              style={styles.profileImage} 
            />
          </TouchableOpacity>
        </View>

        {/* 2. Arama Çubuğu */}
        <View style={styles.searchContainer}>
          <Image source={require('../../assets/Vector (1).png')} />
          <TextInput 
            placeholder="Search any Product..." 
            style={styles.searchInput} 
            placeholderTextColor="#999"
          />
          <Image source={require('../../assets/Vector.png')} />
        </View>

        {/* 3. Başlık, Sayı ve Filtreleme */}
        <View style={styles.titleContainer}>
          <Text style={styles.mainTitle}>52,082+ Items</Text>
          <View style={styles.filterButtons}>
            <TouchableOpacity style={styles.filterBtn}>
              <Text style={styles.filterBtnText}>Sort</Text>
              <Image source={require('../../assets/Component 1.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterBtn}>
              <Text style={styles.filterBtnText}>Filter</Text>
              <Image source={require('../../assets/Vector (3).png')} />
            </TouchableOpacity>
          </View>
        </View>

        {/* 4. İki Sütunlu Grid Yapısında Ürünler */}
        <View style={styles.gridContainer}>
          {wishlistProducts.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={styles.card}
              activeOpacity={0.9}
              onPress={() => navigation.navigate('ProductDetail')} // 📍 Detay sayfasına yönlendirme
            >
              <Image source={item.image} style={styles.cardImage} resizeMode="cover" />
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.cardDescription} numberOfLines={2}>{item.description}</Text>
                <Text style={styles.cardPrice}>₹{item.price}</Text>
                
                <View style={styles.ratingRow}>
                  <Text style={styles.starText}>⭐ ⭐ ⭐ ⭐ ⭐</Text>
                  <Text style={styles.reviewText}>{item.reviewCount}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>

      {/* GÖRSELLERLE BOTTOM TAB BAR */}
      <View style={styles.tabBarContainer}>
        {/* Home Sekmesi */}
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>
          <Image 
            source={require('../../assets/home 1.png')}
            style={styles.tabIconImage}
            resizeMode="contain"
          />
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>

        {/* Wishlist Sekmesi (Aktif) */}
        <TouchableOpacity style={styles.tabItem} onPress={() => setActiveTab('Wishlist')}>
          <Image 
            source={require('../../assets/heart 1.png')}
            style={styles.tabIconImage}
            resizeMode="contain"
          />
          <Text style={[styles.tabText, styles.activeTabText]}>Wishlist</Text>
        </TouchableOpacity>

        {/* Ortadaki Yuvarlak Sepet Butonu */}
        <View style={styles.cartButtonWrapper}>
          <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Home')}>
            <Image source={require('../../assets/shopping-cart 2.png')} style={styles.cartIconImage} resizeMode="contain" />
          </TouchableOpacity>
        </View>

        {/* Search Sekmesi */}
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>
          <Image source={require('../../assets/search 1.png')} style={styles.tabIconImage} resizeMode="contain" />
          <Text style={styles.tabText}>Search</Text>
        </TouchableOpacity>

        {/* Setting Sekmesi */}
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>
          <Image source={require('../../assets/settings.png')} style={styles.tabIconImage} resizeMode="contain" />
          <Text style={styles.tabText}>Setting</Text>
        </TouchableOpacity>
      </View>

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
    paddingVertical: 12,
  },
  menuIcon: { fontSize: 24, color: '#333' },
  profileImage: { width: 40, height: 40, borderRadius: 20 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginHorizontal: 16,
    borderRadius: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#EFEFEF',
  },
  searchInput: { flex: 1, height: 44, fontSize: 14, marginLeft: 5 },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 16,
  },
  mainTitle: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  filterButtons: { flexDirection: 'row' },
  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    marginLeft: 8,
    borderWidth: 1,
    borderColor: '#EFEFEF',
  },
  filterBtnText: { fontSize: 12, color: '#333', marginRight: 4 },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  card: {
    width: COLUMN_WIDTH,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  cardImage: {
    width: '100%',
    height: 180,
  },
  cardInfo: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 11,
    color: '#666',
    lineHeight: 14,
    marginBottom: 6,
    height: 28,
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 6,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starText: {
    fontSize: 10,
    marginRight: 4,
  },
  reviewText: {
    fontSize: 9,
    color: '#999',
  },
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
  cartIconImage: {
    width: 26,
    height: 26,
  },
});

export default Wishlist;