import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const sizes = ['6 UK', '7 UK', '8 UK', '9 UK', '10 UK'];

const productImages = [
  require('../../assets/jordan_detail.png'),
  require('../../assets/ayakkabı2.png'),
  require('../../assets/ayakkabı3.png'),
  require('../../assets/ayakkabı4.png'),
  require('../../assets/ayakkabı5.png'),
];

const ProductDetail = () => {
  const navigation = useNavigation();
  const flatListRef = useRef(null);

  const [selectedSize, setSelectedSize] = useState('7 UK');
  const [activeTab, setActiveTab] = useState('Home');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const sliderWidth = width - 32;

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / sliderWidth);
    if (index !== activeImageIndex && index >= 0 && index < productImages.length) {
      setActiveImageIndex(index);
    }
  };
  const handleNextImage = () => {
    if (activeImageIndex < productImages.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: activeImageIndex + 1,
        animated: true,
      });
    }
  };
  const handlePrevImage = () => {
    if (activeImageIndex > 0) {
      flatListRef.current?.scrollToIndex({
        index: activeImageIndex - 1,
        animated: true,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 110 }}>
        
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backArrow}>‹</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartButton}>
            <Text style={styles.cartIcon}>🛒</Text>
          </TouchableOpacity>
        </View>

        {/* --- KAYDIRMALI SLIDER ALANI --- */}
        <View style={styles.imageContainer}>
          <FlatList
            ref={flatListRef}
            data={productImages}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={handleScroll}
            renderItem={({ item }) => (
              <Image 
                source={item} 
                style={[styles.productImage, { width: sliderWidth }]}
                resizeMode="cover"
              />
            )}
          />
          {activeImageIndex > 0 && (
            <TouchableOpacity 
              style={[styles.arrowContainer, styles.prevArrowContainer]} 
              activeOpacity={0.8}
              onPress={handlePrevImage}
            >
              <Text style={styles.arrowText}>‹</Text>
            </TouchableOpacity>
          )}
          {activeImageIndex < productImages.length - 1 && (
            <TouchableOpacity 
              style={[styles.arrowContainer, styles.nextArrowContainer]} 
              activeOpacity={0.8}
              onPress={handleNextImage}
            >
              <Text style={styles.arrowText}>›</Text>
            </TouchableOpacity>
          )}
          
          <View style={styles.dotsContainer}>
            {productImages.map((_, index) => (
              <View 
                key={index} 
                style={[
                  styles.dot, 
                  activeImageIndex === index && styles.activeDot
                ]} 
              />
            ))}
          </View>
        </View>

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

        <View style={styles.detailsSection}>
          <Text style={styles.detailsTitle}>Product Details</Text>
          <Text style={styles.detailsBody}>
            Perhaps the most iconic sneaker of all-time, this original "Chicago" colorway is the cornerstone to any sneaker collection. Made famous in 1985 by Michael Jordan, the shoe has stood the test of time, becoming the most famous colorway of the Air Jordan 1. This 2015 release saw the...
            <Text style={styles.moreText}> More</Text>
          </Text>
        </View>

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

        <View style={styles.actionRow}>
          <TouchableOpacity style={[styles.actionBtn, styles.btnCart]}>
            <Text style={styles.actionBtnText}>🛒 Go to cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionBtn, styles.btnBuy]}>
            <Text style={styles.actionBtnText}>👆 Buy Now</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.deliveryBanner}>
          <Text style={styles.deliveryTitle}>Delivery in</Text>
          <Text style={styles.deliveryTime}>1 within Hour</Text>
        </View>

        <View style={styles.extraActionsRow}>
          <TouchableOpacity style={styles.extraBtn}>
            <Text style={styles.extraBtnText}>👁️ View Similar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.extraBtn}>
            <Text style={styles.extraBtnText}>📊 Add to Compare</Text>
          </TouchableOpacity>
        </View>

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
    height: '100%',
  },
  arrowContainer: {
    position: 'absolute',
    top: '40%',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  prevArrowContainer: {
    left: 16,
  },
  nextArrowContainer: {
    right: 16,
  },
  arrowText: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
    marginTop: -2,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default ProductDetail;