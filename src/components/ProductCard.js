import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProductCard = ({ image, title, description, price, originalPrice, discount, rating, reviewCount, cardWidth }) => {
  return (
    <View style={[styles.card, { width: cardWidth || '48%' }]}>
<Image 
  source={typeof image === 'string' ? { uri: image } : image} 
  style={styles.image} 
/>      
      <TouchableOpacity style={styles.favoriteButton}>
        <Text style={{ color: '#ff4d4d' }}>❤</Text>
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.description} numberOfLines={2}>{description}</Text>
        <Text style={styles.price}>₹{price}</Text>
        
        {originalPrice && (
          <View style={styles.discountContainer}>
            <Text style={styles.originalPrice}>₹{originalPrice}</Text>
            <Text style={styles.discountText}>{discount}% Off</Text>
          </View>
        )}

        <View style={styles.ratingContainer}>
          <Text style={styles.ratingStar}>⭐ {rating}</Text>
          <Text style={styles.reviewCount}>({reviewCount})</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    marginRight: 45,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 15,
    padding: 6,
  },
  infoContainer: {
    padding: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 11,
    color: '#666',
    marginVertical: 2,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 4,
  },
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  originalPrice: {
    fontSize: 11,
    color: '#999',
    textDecorationLine: 'line-through',
    marginRight: 6,
  },
  discountText: {
    fontSize: 11,
    color: '#FF4D4D',
    fontWeight: '600',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  ratingStar: {
    fontSize: 11,
    color: '#333',
    fontWeight: '500',
  },
  reviewCount: {
    fontSize: 10,
    color: '#999',
    marginLeft: 4,
  },
});

export default ProductCard;