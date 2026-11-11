import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface FloatingCartProps {
  count?: number;
  onPress: () => void;
}

export default function FloatingCart({ count = 4, onPress }: FloatingCartProps) {
  return (
    <TouchableOpacity style={styles.fabContainer} onPress={onPress} activeOpacity={0.8}>
      <Ionicons name="cart" size={26} color="#FFFFFF" />
      <Text style={styles.fabText}>Giỏ hàng</Text>

      <View style={styles.countBadge}>
        <Text style={styles.countText}>{count}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fabContainer: {
    position: 'absolute',
    bottom: 24,
    right: 20,
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#3F51B5',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 3 },
    zIndex: 99,
  },
  fabText: { color: '#FFFFFF', fontSize: 10, fontWeight: 'bold', marginTop: 2 },
  countBadge: {
    position: 'absolute',
    top: 2,
    right: 4,
    backgroundColor: '#E53935',
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  countText: { color: '#FFFFFF', fontSize: 10, fontWeight: 'bold' },
});