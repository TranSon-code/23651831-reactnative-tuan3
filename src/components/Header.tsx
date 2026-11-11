import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>BookStore</Text>

      <View style={styles.actionGroup}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="search-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="cart-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: '#1A237E',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoText: { color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' },
  actionGroup: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  iconButton: { padding: 4 },
});