import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Book } from '../types';

interface BookCardProps {
  item: Book;
}

export default function BookCard({ item }: BookCardProps) {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{ uri: item.coverUrl || 'https://via.placeholder.com/80x110/3F51B5/FFFFFF?text=Book' }}
        style={styles.coverImage}
      />

      <View style={styles.infoCol}>
        <View>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.author}>{item.author || 'Tác giả ẩn danh'}</Text>
        </View>

        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  coverImage: {
    width: 80,
    height: 110,
    borderRadius: 6,
    backgroundColor: '#E0E0E0',
  },
  infoCol: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 110,
    marginLeft: 12,
  },
  title: { fontSize: 15, fontWeight: 'bold', color: '#212121', lineHeight: 20 },
  author: { fontSize: 13, color: '#757575', marginTop: 4 },
  price: { fontSize: 15, fontWeight: 'bold', color: '#D32F2F' },
});