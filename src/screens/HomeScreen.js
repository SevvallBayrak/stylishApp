import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Image, 
  ScrollView, 
  FlatList, 
  SafeAreaView, 
  TouchableOpacity 
} from 'react-native';
import ProductCard from '../components/ProductCard';

// Örnek Kategori Verileri
const categories = [
  { id: '1', name: 'Beauty', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=100' },
  { id: '2', name: 'Fashion', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=100' },
  { id: '3', name: 'Kids', image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=100' },
  { id: '4', name: 'Mens', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100' },
  { id: '5', name: 'Womens', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=100' },
];

// Örnek Ürün Verileri
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
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300',
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
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300',
  },
];

const HomeScreen = () => {

  const renderHeader = () => (
    <View style={{ width: '100%' }}>
      {/* 1. Üst Bar */}
      <View style={styles.header}>
        <TouchableOpacity><Text style={styles.menuIcon}>☰</Text></TouchableOpacity>
        <Text style={styles.logoText}>Stylish</Text>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' }} 
          style={styles.profileImage} 
        />
      </View>

      {/* 2. Arama Çubuğu */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput 
          placeholder="Search any Product..." 
          style={styles.searchInput} 
          placeholderTextColor="#999"
        />
        <TouchableOpacity><Text style={styles.micIcon}>🎙️</Text></TouchableOpacity>
      </View>

      {/* 3. Başlık ve Filtreleme */}
      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>All Featured</Text>
        <View style={styles.filterButtons}>
          <TouchableOpacity style={styles.filterBtn}><Text style={styles.filterText}>Sort ⇅</Text></TouchableOpacity>
          <TouchableOpacity style={styles.filterBtn}><Text style={styles.filterText}>Filter ⏳</Text></TouchableOpacity>
        </View>
      </View>

      {/* 4. Yatay Kategoriler */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
        {categories.map((cat) => (
          <View key={cat.id} style={styles.categoryItem}>
            <Image source={{ uri: cat.image }} style={styles.categoryImage} />
            <Text style={styles.categoryName}>{cat.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* 5. Kampanya Banner Alanı */}
      <View style={styles.bannerContainer}>
        <View style={styles.bannerCard}>
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>50-40% OFF</Text>
            <Text style={styles.bannerSubtitle}>Now in (product){'\n'}All colours</Text>
            <TouchableOpacity style={styles.bannerButton}>
              <Text style={styles.bannerButtonText}>Shop Now →</Text>
            </TouchableOpacity>
          </View>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=400' }} 
            style={styles.bannerImage} 
          />
        </View>
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>

      {/* 6. Deal of the Day Şeridi */}
      <View style={styles.sectionHeader}>
        <View style={styles.sectionHeaderLeft}>
          <Text style={styles.sectionTitle}>Deal of the Day</Text>
          <Text style={styles.timerText}>⏳ 22h 55m 20s remaining</Text>
        </View>
        <TouchableOpacity style={styles.viewAllBtn}><Text style={styles.viewAllText}>View all →</Text></TouchableOpacity>
      </View>

      {/* İÇTEKİ YATAY LİSTE: Kendi içinde sağa kaymaya devam edecek */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingLeft: 16, marginBottom: 24 }}>
        {productsData.map((item) => (
          <ProductCard key={`deal-${item.id}`} {...item} cardWidth={160} />
        ))}
      </ScrollView>

      {/* 7. Trending Products Şeridi Başlığı */}
      <View style={[styles.sectionHeader, { backgroundColor: '#FD6E8A', borderRadius: 8, padding: 12, marginHorizontal: 16, marginBottom: 16, color: '#fff' }]}>
        <Text style={[styles.sectionTitle, { color: '#fff' }]}>Trending Products</Text>
        <TouchableOpacity style={[styles.viewAllBtn, { backgroundColor: 'transparent', borderColor: '#fff', borderWidth: 1 }]}><Text style={{ color: '#fff' }}>View all →</Text></TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={productsData} 
        keyExtractor={(item) => `trending-${item.id}`}
        numColumns={2} 
        columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 16 }}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ProductCard {...item} cardWidth="48%" />}
      />
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
  searchInput: { flex: 1, height: 44, fontSize: 14 },
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
    marginBottom: 20,
  },
  bannerCard: {
    backgroundColor: '#FD6E8A',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
    height: 140,
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
  bannerImage: { width: 130, height: '100%', resizeMode: 'cover' },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#DDD', marginHorizontal: 3 },
  activeDot: { backgroundColor: '#FD6E8A', width: 14 },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#4361EE',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionHeaderLeft: { flex: 1 },
  sectionTitle: { fontSize: 16, fontWeight: '500', color: '#fff' },
  timerText: { fontSize: 11, color: '#ffffff', marginTop: 2 },
  viewAllBtn: { backgroundColor: '#4361EE', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6 },
  viewAllText: { color: '#fff', fontSize: 12, fontWeight: 'bold', borderWidth: 1,
    borderColor: '#fff',
    padding: 6,               // Yazı çizgiye yapışmasın diye iç boşluk
    borderRadius: 4,},
});

export default HomeScreen;