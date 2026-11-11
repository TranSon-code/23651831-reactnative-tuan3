import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, StatusBar, Platform, ScrollView, SafeAreaView } from 'react-native';
import Gio1Screen from './src/screens/Gio1Screen';
import Gio2Screen from './src/screens/Gio2Screen';
import Gio3Screen from './src/screens/Gio3Screen';
import { ScreenType } from './src/types';

export default function App() {
  const [activeTab, setActiveTab] = useState<ScreenType>('HOME');

  if (activeTab === 'GIO_1') {
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="light-content" />
        <Gio1Screen onBack={() => setActiveTab('HOME')} />
      </SafeAreaView>
    );
  }

  if (activeTab === 'GIO_2') {
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="light-content"/>
        <Gio2Screen onBack={() => setActiveTab('HOME')} />
      </SafeAreaView>
    );
  }

  if (activeTab === 'GIO_3') {
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="light-content" />
        <Gio3Screen onBack={() => setActiveTab('HOME')} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content"/>
      
      <View style={styles.mainHeader}>
        <Text style={styles.mainHeaderTitle}>THỰC HÀNH TUẦN 3 (TS)</Text>
      </View>

      <ScrollView contentContainerStyle={styles.menuBody}>
        <Text style={styles.menuGuide}>Chọn chủ đề thực hành:</Text>

        <TouchableOpacity style={styles.card} onPress={() => setActiveTab('GIO_1')} activeOpacity={0.8}>
          <View style={styles.tag}><Text style={styles.tagText}>Giờ 1</Text></View>
          <Text style={styles.cardTitle}>Nền tảng Flexbox & Layout đơn giản</Text>
          <Text style={styles.cardDesc}>• Header BookStore & Book Card</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => setActiveTab('GIO_2')} activeOpacity={0.8}>
          <View style={[styles.tag, { backgroundColor: '#00897B' }]}><Text style={styles.tagText}>Giờ 2</Text></View>
          <Text style={styles.cardTitle}>Kích thước, Wrap và Lưới sản phẩm</Text>
          <Text style={styles.cardDesc}>• Category Chips & Book Grid 2 cột</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => setActiveTab('GIO_3')} activeOpacity={0.8}>
          <View style={[styles.tag, { backgroundColor: '#E65100' }]}><Text style={styles.tagText}>Giờ 3</Text></View>
          <Text style={styles.cardTitle}>Position, AlignSelf và Lớp phủ (Overlay)</Text>
          <Text style={styles.cardDesc}>• Badge absolute & Floating Cart Button</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#1A237E' },
  mainHeader: {
    height: 56,
    backgroundColor: '#1A237E',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#283593',
  },
  mainHeaderTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
  menuBody: { padding: 16, backgroundColor: '#F4F5F7', flexGrow: 1 },
  menuGuide: { fontSize: 14, color: '#555', marginBottom: 16 },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  tag: {
    alignSelf: 'flex-start',
    backgroundColor: '#3F51B5',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    marginBottom: 8,
  },
  tagText: { color: '#FFF', fontSize: 11, fontWeight: 'bold' },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#1A237E', marginBottom: 6 },
  cardDesc: { fontSize: 13, color: '#616161', lineHeight: 18 },
});