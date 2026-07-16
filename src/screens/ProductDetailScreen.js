import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const sizes = ['6 UK', '7 UK', '8 UK', '9 UK', '10 UK'];

const ProductDetail = () => {
  const navigation = useNavigation();
  const [selectedSize, setSelectedSize] = useState('7 UK');
  const [activeTab, setActiveTab] = useState('Home'); // Detay sayfası genel akışta Home altında olduğu için varsayılan Home

  return (
    <SafeAreaView style={styles.container}>
      {/* ScrollView'ın altındaki Tab Bar yüksekliği kadar boşluk kalması için paddingBottom ekledik */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 110 }}>
        
        {/* Üst Bar / Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backArrow}>‹</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartButton}>
            <Text style={styles.cartIcon}>🛒</Text>
          </TouchableOpacity>
        </View>

        {/* 1. Ürün Görseli ve Slider Alanı */}
        <View style={styles.imageContainer}>
          <Image 
            source={require('../../assets/jordan_detail.png')} 
            style={styles.productImage}
            resizeMode="cover"
          />
          <TouchableOpacity style={styles.nextArrowContainer} activeOpacity={0.8}>
            <Text style={styles.nextArrow}>›</Text>
          </TouchableOpacity>
          
          {/* Sayfalama Noktaları */}
          <View style={styles.dotsContainer}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        {/* 2. Beden Seçimi */}
        <View style={styles.sizeSection}>
          <Text style={styles.sizeTitle}>Size: {selectedSize}</Text>
          <View style={styles.sizeRow}>
            {sizes.map((size) => {
              const isSelected = size === selectedSize;
              return (
                <TouchableOpacity
                  key={size}
                  style={[styles.sizeBtn, isSelected && styles.sizeBtnActive]}
                  onPress={() => setSelectedSize(size)}
                >
                  <Text style={[styles.sizeBtnText, isSelected && styles.sizeBtnTextActive]}>
                    {size}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* 3. Ürün Bilgileri */}
        <View style={styles.infoSection}>
          <Text style={styles.productTitle}>Nike Sneakers</Text>
          <Text style={styles.productSubtitle}>Vision Alta Men's Shoes Size (All Colours)</Text>
          
          <View style={styles.ratingRow}>
            <Text style={styles.starText}>⭐ ⭐ ⭐ ⭐ ⭐</Text>
            <Text style={styles.reviewCount}>56,890</Text>
          </View>

          <View style={styles.priceRow}>
            <Text style={styles.oldPrice}>₹2,999</Text>
            <Text style={styles.currentPrice}>₹1,500</Text>
            <Text style={styles.discountText}>50% Off</Text>
          </View>
        </View>

        {/* 4. Ürün Detayları Açıklaması */}
        <View style={styles.detailsSection}>
          <Text style={styles.detailsTitle}>Product Details</Text>
          <Text style={styles.detailsBody}>
            Perhaps the most iconic sneaker of all-time, this original "Chicago" colorway is the cornerstone to any sneaker collection. Made famous in 1985 by Michael Jordan, the shoe has stood the test of time, becoming the most famous colorway of the Air Jordan 1. This 2015 release saw the...
            <Text style={styles.moreText}> More</Text>
          </Text>
        </View>

        {/* 5. Özellik Rozetleri */}
        <View style={styles.badgeRow}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>📍 Nearest Store</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>🔒 VIP</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>🔄 Return policy</Text>
          </View>
        </View>

        {/* 6. Satın Alma Butonları */}
        <View style={styles.actionRow}>
          <TouchableOpacity style={[styles.actionBtn, styles.btnCart]}>
            <Text style={styles.actionBtnText}>🛒 Go to cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionBtn, styles.btnBuy]}>
            <Text style={styles.actionBtnText}>👆 Buy Now</Text>
          </TouchableOpacity>
        </View>

        {/* 7. Teslimat Banner'ı */}
        <View style={styles.deliveryBanner}>
          <Text style={styles.deliveryTitle}>Delivery in</Text>
          <Text style={styles.deliveryTime}>1 within Hour</Text>
        </View>

        {/* 8. Ek İşlem Butonları */}
        <View style={styles.extraActionsRow}>
          <TouchableOpacity style={styles.extraBtn}>
            <Text style={styles.extraBtnText}>👁️ View Similar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.extraBtn}>
            <Text style={styles.extraBtnText}>📊 Add to Compare</Text>
          </TouchableOpacity>
        </View>

        {/* 9. Benzer Ürünler Bölümü */}
        <View style={styles.similarSection}>
          <View style={styles.similarHeader}>
            <View>
              <Text style={styles.similarTitle}>Similar To</Text>
              <Text style={styles.similarCount}>282+ Items</Text>
            </View>
            <View style={styles.filterGroup}>
              <TouchableOpacity style={styles.smallFilterBtn}><Text style={styles.smallFilterText}>Sort ⇅</Text></TouchableOpacity>
              <TouchableOpacity style={styles.smallFilterBtn}><Text style={styles.smallFilterText}>Filter ⏳</Text></TouchableOpacity>
            </View>
          </View>

          {/* İki Benzer Ürün Kartı */}
          <View style={styles.similarGrid}>
            <View style={styles.similarCard}>
              <Image source={require('../../assets/jordan_detail.png')} style={styles.similarCardImage} />
              <View style={styles.similarCardInfo}>
                <Text style={styles.similarCardTitle}>Nike Sneakers</Text>
                <Text style={styles.similarCardDesc}>Nike Air Jordan Retro 1 Low Mystic Black</Text>
                <Text style={styles.similarCardPrice}>₹1,900</Text>
                <Text style={styles.similarCardStars}>⭐ ⭐ ⭐ ⭐ ⭐ <Text style={{color: '#999', fontSize: 9}}>46,890</Text></Text>
              </View>
            </View>

            <View style={styles.similarCard}>
              <Image source={require('../../assets/peach_sneaker.png')} style={styles.similarCardImage} />
              <View style={styles.similarCardInfo}>
                <Text style={styles.similarCardTitle}>Nike Sneakers</Text>
                <Text style={styles.similarCardDesc}>Mid Peach Mocha Shoes For Man White Black Pink S...</Text>
                <Text style={styles.similarCardPrice}>₹1,900</Text>
                <Text style={styles.similarCardStars}>⭐ ⭐ ⭐ ⭐ ⭐ <Text style={{color: '#999', fontSize: 9}}>2,56,890</Text></Text>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>

      {/* GÖRSELLERLE BOTTOM TAB BAR */}
      <View style={styles.tabBarContainer}>
        {/* Home Sekmesi */}
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>
          <Image 
            source={require('../../assets/home.png')} // Home sekmesi aktif veya yönlendirilebilir
            style={styles.tabIconImage}
            resizeMode="contain"
          />
          <Text style={[styles.tabText, styles.activeTabText]}>Home</Text>
        </TouchableOpacity>

        {/* Wishlist Sekmesi */}
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Wishlist')}>
          <Image 
            source={require('../../assets/Vectorhear.png')}
            style={styles.tabIconImage}
            resizeMode="contain"
          />
          <Text style={styles.tabText}>Wishlist</Text>
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
    height: 56,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 36,
    color: '#000',
    fontWeight: '300',
  },
  cartButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartIcon: {
    fontSize: 18,
  },
  imageContainer: {
    position: 'relative',
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: 'hidden',
    height: 250,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  nextArrowContainer: {
    position: 'absolute',
    right: 16,
    top: '40%',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextArrow: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 12,
    left: 0,
    right: 0,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#DDD',
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#FD6E8A',
    width: 14,
  },
  sizeSection: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  sizeTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
  },
  sizeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sizeBtn: {
    flex: 1,
    height: 36,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#FD6E8A',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
  },
  sizeBtnActive: {
    backgroundColor: '#FD6E8A',
  },
  sizeBtnText: {
    fontSize: 12,
    color: '#FD6E8A',
    fontWeight: 'bold',
  },
  sizeBtnTextActive: {
    color: '#FFF',
  },
  infoSection: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  productSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  starText: {
    fontSize: 12,
    marginRight: 6,
  },
  reviewCount: {
    fontSize: 11,
    color: '#999',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  oldPrice: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  currentPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 8,
  },
  discountText: {
    fontSize: 14,
    color: '#FD6E8A',
    fontWeight: 'bold',
  },
  detailsSection: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  detailsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  detailsBody: {
    fontSize: 12,
    color: '#666',
    lineHeight: 18,
  },
  moreText: {
    color: '#FD6E8A',
    fontWeight: 'bold',
  },
  badgeRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 8,
  },
  badgeText: {
    fontSize: 10,
    color: '#555',
  },
  actionRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  actionBtn: {
    flex: 1,
    height: 48,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  btnCart: {
    backgroundColor: '#3F62E2',
  },
  btnBuy: {
    backgroundColor: '#49DF8B',
  },
  actionBtnText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  deliveryBanner: {
    backgroundColor: '#FFD3DD',
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
  },
  deliveryTitle: {
    fontSize: 12,
    color: '#000',
  },
  deliveryTime: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 2,
  },
  extraActionsRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  extraBtn: {
    flex: 1,
    height: 40,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  extraBtnText: {
    fontSize: 12,
    color: '#333',
    fontWeight: '500',
  },
  similarSection: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  similarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  similarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  similarCount: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  filterGroup: {
    flexDirection: 'row',
  },
  smallFilterBtn: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#EAEAEA',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    marginLeft: 6,
  },
  smallFilterText: {
    fontSize: 11,
    color: '#333',
  },
  similarGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  similarCard: {
    width: (width - 44) / 2,
    backgroundColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  similarCardImage: {
    width: '100%',
    height: 150,
  },
  similarCardInfo: {
    padding: 8,
  },
  similarCardTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  similarCardDesc: {
    fontSize: 10,
    color: '#666',
    marginVertical: 4,
    height: 28,
  },
  similarCardPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  similarCardStars: {
    fontSize: 8,
    marginTop: 4,
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
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 10,
    zIndex: 999,
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

export default ProductDetail;