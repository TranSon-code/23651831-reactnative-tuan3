import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import CategoryChips from '../components/CategoryChips';
import BookGrid from '../components/BookGrid';

interface Gio2Props {
  onBack: () => void;
}

export default function Gio2Screen({ onBack }: Gio2Props) {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.backBtn} onPress={onBack}>
          <Text style={styles.backText}>← Quay lại Menu</Text>
        </TouchableOpacity>
        <Text style={styles.navTitle}>Giờ 2: Kích thước & Lưới Grid</Text>
      </View>

      <ScrollView style={styles.contentContainer} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionHeader}>Bài 1: Danh sách danh mục (Chips)</Text>
        <CategoryChips />

        <Text style={[styles.sectionHeader, { marginTop: 24 }]}>Bài 2: Lưới sản phẩm 2 cột (Book Grid)</Text>
        <BookGrid />
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
  sectionHeader: { fontSize: 16, fontWeight: 'bold', color: '#1A237E', marginBottom: 8 },
});