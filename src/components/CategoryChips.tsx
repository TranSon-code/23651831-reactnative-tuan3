import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const categories = ['Văn học', 'Kinh tế', 'Thiếu nhi', 'Truyện tranh', 'Ngoại ngữ', 'Lịch sử', 'Kỹ năng sống', 'Công nghệ'];

export default function CategoryChips() {
  return (
    <View style={styles.container}>
      {categories.map((cat, index) => (
        <TouchableOpacity key={index} style={styles.chip} activeOpacity={0.7}>
          <Text style={styles.chipText}>{cat}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    paddingVertical: 8,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#3F51B5',
    backgroundColor: '#FFFFFF',
  },
  chipText: { color: '#3F51B5', fontSize: 13, fontWeight: '500' },
});