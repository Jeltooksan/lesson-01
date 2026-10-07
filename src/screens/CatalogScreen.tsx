import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface CatalogProps {
  setPage: (page: string) => void;
}

export default function CatalogScreen({ setPage }: CatalogProps) {
  const items = ['Электроника', 'Одежда и обувь', 'Дом и сад', 'Спорт и отдых'];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        
        <Pressable style={styles.backButton} onPress={() => setPage('home')}>
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>

        <Text style={styles.title}>Каталог</Text>
        <Text style={styles.subtitle}>Выберите категорию товаров.</Text>

        {items.map((category) => (
          <View key={category} style={styles.categoryItem}>
            <Text style={styles.categoryText}>{category}</Text>
            <Text style={styles.arrow}>›</Text>
          </View>
        ))}

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { flex: 1, paddingHorizontal: 28, paddingTop: 40, backgroundColor: '#FFFFFF' },
  backButton: { width: 45, height: 45, justifyContent: 'center', alignItems: 'flex-start', marginBottom: 22 },
  backButtonText: { fontSize: 32, color: '#1B1923', fontWeight: '300' },
  title: { color: '#1B1923', fontSize: 27, fontWeight: '700', lineHeight: 34 },
  subtitle: { color: '#AAA9B2', fontSize: 16, lineHeight: 22, marginTop: 5, marginBottom: 25 },
  categoryItem: { width: '100%', height: 60, backgroundColor: '#F8F8FA', borderRadius: 16, paddingHorizontal: 20, marginBottom: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  categoryText: { color: '#1B1923', fontSize: 17, fontWeight: '500' },
  arrow: { color: '#AAA9B2', fontSize: 22 },
});