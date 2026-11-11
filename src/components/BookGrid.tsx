import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Book } from '../types';

const gridBooks: Book[] = [
  { id: '1', title: 'Đắc Nhân Tâm', price: '86.000 đ' },
  { id: '2', title: 'Nhà Giả Kim', price: '79.000 đ' },
  { id: '3', title: 'Tuổi Trẻ Đáng Giá Bao Nhiêu', price: '95.000 đ' },
  { id: '4', title: 'Cây Cam Ngọt Của Tôi', price: '108.000 đ' },
];

export default function BookGrid() {
  return (
    <View style={styles.gridContainer}>
      {gridBooks.map((item) => (
        <View key={item.id} style={styles.gridItem}>
          <Image
            source={{ uri: 'https://via.placeholder.com/300x400/3F51B5/FFFFFF?text=Book' }}
            style={styles.gridImage}
          />
          <View style={styles.infoBox}>
            <Text style={styles.gridTitle} numberOfLines={1}>{item.title}</Text>
            <Text style={styles.gridPrice}>{item.price}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  gridItem: {
    width: '48%',
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  gridImage: {
    width: '100%',
    aspectRatio: 3 / 4,
    backgroundColor: '#E0E0E0',
  },
  infoBox: { padding: 8 },
  gridTitle: { fontSize: 14, fontWeight: 'bold', color: '#212121' },
  gridPrice: { fontSize: 13, color: '#D32F2F', fontWeight: 'bold', marginTop: 4 },
});