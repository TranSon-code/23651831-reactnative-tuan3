import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import FloatingCart from '../components/FloatingCart';
import { Book } from '../types';

interface Gio3Props {
  onBack: () => void;
}

const mockBooks: Book[] = [
  { id: '1', title: 'Đắc Nhân Tâm', price: '86.000 đ', discount: '-15%' },
  { id: '2', title: 'Nhà Giả Kim', price: '79.000 đ', discount: '-20%' },
  { id: '3', title: 'Clean Code', price: '320.000 đ', discount: '-10%' },
  { id: '4', title: 'Refactoring', price: '290.000 đ', discount: '-25%' },
];

export default function Gio3Screen({ onBack }: Gio3Props) {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.backBtn} onPress={onBack}>
          <Text style={styles.backText}>← Quay lại Menu</Text>
        </TouchableOpacity>
        <Text style={styles.navTitle}>Giờ 3: Position & Overlay</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>Thử thách: Lưới sách kèm Badge & Floating Cart</Text>

        <View style={styles.gridContainer}>
          {mockBooks.map((item) => (
            <View key={item.id} style={styles.gridItem}>
              <View style={styles.imageWrapper}>
                <Image
                  source={{ uri: 'https://via.placeholder.com/300x400/3F51B5/FFFFFF?text=Book' }}
                  style={styles.gridImage}
                />
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{item.discount}</Text>
                </View>
              </View>

              <View style={styles.infoBox}>
                <Text style={styles.gridTitle} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.gridPrice}>{item.price}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <FloatingCart count={4} onPress={() => alert('Mở giỏ hàng thành công!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: '#F0F2F5', position: 'relative' },
  navBar: { height: 44, backgroundColor: '#0D47A1', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12 },
  backBtn: { paddingVertical: 4, paddingHorizontal: 8 },
  backText: { color: '#FFD54F', fontWeight: 'bold', fontSize: 13 },
  navTitle: { color: '#FFFFFF', fontSize: 13, fontWeight: '600', marginLeft: 8 },
  scrollContent: { padding: 16, paddingBottom: 80 },
  sectionTitle: { fontSize: 15, fontWeight: 'bold', color: '#1A237E', marginBottom: 12 },
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
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
  imageWrapper: { position: 'relative', width: '100%', aspectRatio: 3 / 4, backgroundColor: '#E0E0E0' },
  gridImage: { width: '100%', height: '100%' },
  badge: { position: 'absolute', top: 6, left: 6, backgroundColor: '#E53935', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  badgeText: { color: '#FFFFFF', fontSize: 11, fontWeight: 'bold' },
  infoBox: { padding: 8 },
  gridTitle: { fontSize: 14, fontWeight: 'bold', color: '#212121' },
  gridPrice: { fontSize: 13, color: '#D32F2F', fontWeight: 'bold', marginTop: 4 },
});