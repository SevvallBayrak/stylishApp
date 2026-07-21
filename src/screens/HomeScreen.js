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
  ImageBackground 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProductCard from '../components/ProductCard';

const categories = [
  { id: '1', name: 'Beauty', image: require('../../assets/Ellipse 4.png')},
  { id: '2', name: 'Fashion', image: require('../../assets/unsplash__3Q3tsJ01nc.png')},
  { id: '3', name: 'Kids', image: require('../../assets/unsplash_GCDjllzoKLo.png')},
  { id: '4', name: 'Mens', image: require('../../assets/unsplash_xPJYL0l5Ii8.png')},
  { id: '5', name: 'Womens', image: require('../../assets/unsplash_OYYE4g-I5ZQ.png') },
];

const productsData = [
  {
    id: '1',
    title: 'Women Printed Kurta',
    description: 'Neque porro quisquam est qui dolorem ipsum quia',
    price: '1500',
    originalPrice: '2499',
    discount: '40',
    rating: '4.3',
    reviewCount: '56,890',
    image: require('../../assets/Mask Group.png'),
  },
  {
    id: '2',
    title: 'HRX by Hrithik Roshan',
    description: 'Neque porro quisquam est qui dolorem ipsum quia',
    price: '2499',
    originalPrice: '4999',
    discount: '50',
    rating: '4.6',
    reviewCount: '144,567',
    image: require('../../assets/Mask Group (1).png'),
  },
];

const trendingProductsData = [
  {
    id: 't1',
    title: "IWC Schaffhausen 2021 Pilot's Watch",
    description: '"SIHH 2019" 44mm',
    price: '650',
    originalPrice: '1599',
    discount: '60',
    rating: '4.8',
    reviewCount: '1,245',
    image: require('../../assets/saat.png'),
  },
  {
    id: 't2',
    title: 'Labbin White Sneakers',
    description: 'For Men and Female',
    price: '650',
    originalPrice: '1250',
    discount: '70',
    rating: '4.5',
    reviewCount: '3,892',
    image: require('../../assets/whiteshoe.png'),
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 110 }}>
        {/* <View style={styles.header}>
          <TouchableOpacity><Text style={styles.menuIcon}>☰</Text></TouchableOpacity>
          <Image
            source={require('../../assets/logoipsum-255 1.png')}
          />
          <TouchableOpacity 
            onPress={() => navigation.navigate('Profile')} 
            activeOpacity={0.7}
          >
            <Image 
              source={require('../../assets/2289_SkVNQSBGQU1PIDEwMjgtMTE2 1.png')} 
              style={styles.profileImage} 
            />
          </TouchableOpacity>
        </View> */}

        <View style={styles.searchContainer}>
          <Image
            source={require('../../assets/Vector (1).png')}
          />
          <TextInput 
            placeholder="Search any Product..." 
            style={styles.searchInput} 
            placeholderTextColor="#999"
          />
          <Image
            source={require('../../assets/Vector.png')}
          />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.mainTitle}>All Featured</Text>
          <View style={styles.filterButtons}>
            <TouchableOpacity style={styles.filterBtn}>
              <Text>Sort</Text>
              <Image
                source={require('../../assets/Component 1.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterBtn}>
              <Text style={styles.filterText}>Filter</Text>
              <Image
                source={require('../../assets/Vector (3).png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
          {categories.map((cat) => (
            <View key={cat.id} style={styles.categoryItem}>
              <Image source={cat.image} style={styles.categoryImage} />
              <Text style={styles.categoryName}>{cat.name}</Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.bannerContainer}>
          <ImageBackground 
            source={require('../../assets/Rectangle 48.png')}
            style={styles.bannerCard}
            imageStyle={{ borderRadius: 19 }}
          >
            <View style={styles.bannerTextContainer}>
              <Text style={styles.bannerTitle}>50-40% OFF</Text>
              <Text style={styles.bannerSubtitle}>Now in (product){'\n'}All colours</Text>
              <TouchableOpacity style={styles.bannerButton}>
                <Text style={styles.bannerButtonText}>Shop Now →</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>

          <View style={styles.dotsContainer}>
            <View style={styles.dot} />
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <View style={styles.sectionHeaderLeft}>
            <Text style={styles.sectionTitle}>Deal of the Day</Text>
            <Text style={styles.timerText}>⏳ 22h 55m 20s remaining</Text>
          </View>
          <TouchableOpacity style={styles.viewAllBtn}><Text style={styles.viewAllText}>View all →</Text></TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingLeft: 16, marginBottom: 24 }}>
          {productsData.map((item) => (
            <ProductCard key={`deal-${item.id}`} {...item} cardWidth={160} />
          ))}
        </ScrollView>

        <View style={styles.specialOffersContainer}>
          <View style={styles.specialOffersLeft}>
            <Image 
              source={require('../../assets/Rectangle 56.png')}
              style={styles.specialOffersImage}
              resizeMode="contain"
            />
          </View>
          
          <View style={styles.specialOffersRight}>
            <View style={styles.specialOffersTitleRow}>
              <Text style={styles.specialOffersTitle}>Special Offers</Text>
              <Text style={styles.emojiText}>😱</Text>
            </View>
            <Text style={styles.specialOffersSubtitle}>
              We make sure you get the offer you need at best prices
            </Text>
          </View>
        </View>

        <View style={styles.flatDiscountContainer}>
          <View style={styles.flatLeftSection}>
            <View style={styles.goldBar}/>
            <Image
              source={require('../../assets/Rectangle 55.png')}
              style={styles.flatImage}
              resizeMode="contain"
            />
          </View>

          <View style={styles.flatRightSection}>
            <Text style={styles.flatTitle}>Flat 50% OFF</Text>
            <Text style={styles.flatSubtitle}>Stand a chance to win...</Text>
            <TouchableOpacity style={styles.flatButton}>
              <Text style={styles.flatButtonText}>Visit now →</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.sectionHeader, { backgroundColor: '#FD6E8A', borderRadius: 8, padding: 12, marginHorizontal: 16, marginBottom: 16 }]}>
          <View>
            <Text style={[styles.sectionTitle, { color: '#fff' }]}>Trending Products</Text>
            <Text style={styles.trendingDateText}>📅 Last Date 29/02/22</Text>
          </View>
          <TouchableOpacity style={[styles.viewAllBtn, { backgroundColor: 'transparent', borderColor: '#fff', borderWidth: 1 }]}>
            <Text style={{ color: '#fff' }}>View all →</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingLeft: 16, marginBottom: 24 }}>
          {trendingProductsData.map((item) => (
            <ProductCard key={`trending-${item.id}`} {...item} cardWidth={160} />
          ))}
        </ScrollView>

        <View style={styles.newArrivalsContainer}>
          <Image 
            source={require('../../assets/Mask Group (5).png')} 
            style={styles.newArrivalsImage}
            resizeMode="cover"
          />
          <View style={styles.newArrivalsFooter}>
            <View>
              <Text style={styles.newArrivalsTitle}>New Arrivals</Text>
              <Text style={styles.newArrivalsSubtitle}>Summer' 25 Collections</Text>
            </View>
            <TouchableOpacity style={styles.pinkButton}>
              <Text style={styles.pinkButtonText}>View all →</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.sponsoredContainer}>
          <Text style={styles.sponsoredHeaderTitle}>Sponsored</Text>
          <ImageBackground
            source={require('../../assets/Mask Group (6).png')} 
            style={styles.sponsoredBanner}
            imageStyle={{ borderRadius: 12 }}
          >
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
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
  searchIcon: { fontSize: 16, marginRight: 8 },
  searchInput: { flex: 1, height: 44, fontSize: 14, marginLeft: 5 },
  micIcon: { fontSize: 16, marginLeft: 8 },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 20,
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
  filterText: { fontSize: 12, color: '#333' },
  categoriesContainer: {
    paddingLeft: 16,
    marginTop: 16,
    marginBottom: 20,
    flexDirection: 'row',
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  categoryImage: { width: 56, height: 56, borderRadius: 28, marginBottom: 6 },
  categoryName: { fontSize: 12, color: '#333', fontWeight: '500' },
  bannerContainer: {
    marginHorizontal: 16,
    marginBottom: 10,
  },
  bannerCard: {
    backgroundColor: '#FD6E8A',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
    height: 180,
  },
  bannerTextContainer: { padding: 16, justifyContent: 'center' },
  bannerTitle: { fontSize: 22, fontWeight: 'bold', color: '#FFF' },
  bannerSubtitle: { fontSize: 12, color: '#FFF', marginVertical: 8, opacity: 0.9 },
  bannerButton: {
    backgroundColor: 'transparent',
    borderColor: '#FFF',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  bannerButtonText: { color: '#FFF', fontSize: 12, fontWeight: 'bold' },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#DDD', marginHorizontal: 3 },
  activeDot: { backgroundColor: '#FD6E8A', width: 14 },
  
  specialOffersContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginBottom: 10,
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  specialOffersLeft: {
    marginRight: 16,
  },
  specialOffersImage: {
    width: 65,
    height: 65,
  },
  specialOffersRight: {
    flex: 1,
    justifyContent: 'center',
  },
  specialOffersTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  specialOffersTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
  },
  emojiText: {
    fontSize: 16,
    marginLeft: 6,
  },
  specialOffersSubtitle: {
    fontSize: 12,
    color: '#666666',
    lineHeight: 16,
  },

  // Yeni İndirim Banner'ı Stilleri
  flatDiscountContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 12,
    height: 140,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  flatLeftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    height: '100%',
  },
  goldBar: {
    width: 6,
    height: '80%',
    backgroundColor: '#FFD700',
    borderRadius: 3,
    marginLeft: 12,
  },
  flatImage: {
    flex: 1,
    height: '90%',
    marginLeft: 4,
  },
  flatRightSection: {
    width: '50%',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  flatTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  flatSubtitle: {
    fontSize: 11,
    color: '#666',
    marginBottom: 12,
  },
  flatButton: {
    backgroundColor: '#ff006a',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  flatButtonText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: 'bold',
  },

  trendingDateText: {
    fontSize: 11,
    color: '#ffffff',
    opacity: 0.9,
    marginTop: 4,
  },
  newArrivalsContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  newArrivalsImage: {
    width: '100%',
    height: 180,
  },
  newArrivalsFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  newArrivalsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  newArrivalsSubtitle: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
  pinkButton: {
    backgroundColor: '#FD6E8A',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  pinkButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  sponsoredContainer: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  sponsoredHeaderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 12,
  },
  sponsoredBanner: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    backgroundColor: '#5a75ee',
    alignItems: 'center',
    alignSelf: 'center', 
    width: '92%',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 12,
    borderRadius: 8,
  },
  sectionHeaderLeft: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  sectionTitle: { fontSize: 16, fontWeight: '500', color: '#fff' },
  timerText: { fontSize: 11, color: '#ffffff', marginTop: 2 },
  viewAllBtn: { backgroundColor: '#5a75ee', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6 },
  viewAllText: { 
    color: '#fff', 
    fontSize: 12, 
    fontWeight: 'bold', 
    borderWidth: 1,
    borderColor: '#fff',
    padding: 6,
    borderRadius: 4,
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
  activeCartButton: {
    borderColor: '#FD6E8A',
    borderWidth: 1.5,
  },
  cartIconImage: {
    width: 26,
    height: 26,
  },
});

export default HomeScreen;