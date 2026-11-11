import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../components/Header';
import BookCard from '../components/BookCard';
import { Book } from '../types';

interface Gio1Props {
  onBack: () => void;
}

export default function Gio1Screen({ onBack }: Gio1Props) {
  const books: Book[] = [
    { id: '1', title: 'Lập trình React Native căn bản từ số 0', author: 'Nguyễn Văn A', price: '120.000 đ' },
    { id: '2', title: 'Thiết kế giao diện Mobile với Flexbox', author: 'Trần Nam Sơn', price: '185.000 đ' },
    { id: '3', title: 'Clean Code', author: 'Robert C. Martin', price: '320.000 đ' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.backBtn} onPress={onBack}>
          <Text style={styles.backText}>← Quay lại Menu</Text>
        </TouchableOpacity>
        <Text style={styles.navTitle}>Giờ 1: Thử thách Flexbox</Text>
      </View>

      <Header />

      <ScrollView style={styles.contentContainer} contentContainerStyle={styles.scrollContent}>
        {books.map((b) => (
          <BookCard key={b.id} item={b} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F2F5' },
  navBar: { height: 44, backgroundColor: '#0D47A1', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12 },
  backBtn: { paddingVertical: 4, paddingHorizontal: 8 },
  backText: { color: '#FFD54F', fontWeight: 'bold', fontSize: 13 },
  navTitle: { color: '#FFFFFF', fontSize: 13, fontWeight: '600', marginLeft: 8 },
  contentContainer: { flex: 1 },
  scrollContent: { padding: 16 },
});