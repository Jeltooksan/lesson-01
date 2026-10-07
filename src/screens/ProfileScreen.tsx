import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface ProfileProps {
  setPage: (page: string) => void;
  city: string;
}

export default function ProfileScreen({ setPage, city }: ProfileProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        
        <Pressable style={styles.backButton} onPress={() => setPage('home')}>
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>

        <Text style={styles.title}>Профиль</Text>
        <Text style={styles.subtitle}>Информация о вашем аккаунте.</Text>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>Телефон:</Text>
          <Text style={styles.cardValue}>+7 (700) 123-45-67</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>Город:</Text>
          <Text style={styles.cardValue}>{city}</Text>
        </View>

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
  card: { width: '100%', backgroundColor: '#F8F8FA', borderRadius: 16, padding: 20, marginBottom: 15 },
  cardLabel: { color: '#AAA9B2', fontSize: 14, marginBottom: 5 },
  cardValue: { color: '#1B1923', fontSize: 18, fontWeight: '600' },
});