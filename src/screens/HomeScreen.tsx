import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface HomeScreenProps {
  setPage: (page: string) => void;
  city: string;
}

export default function HomeScreen({ setPage, city }: HomeScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.homeContainer}>
        
        {/* Кнопка настроек (шестеренка) в правом верхнем угле */}
        <Pressable style={styles.settingsButton} onPress={() => setPage('settings')}>
          <Text style={styles.settingsIcon}>⚙️</Text>
        </Pressable>

        <Text style={styles.homeTitle}>Добро пожаловать! 👋</Text>
        <Text style={styles.homeText}>Вы успешно вошли в аккаунт.</Text>
        <Text style={styles.homeCity}>📍 {city}</Text>

        {/* Кнопка перехода в Профиль */}
        <TouchableOpacity style={styles.actionButton} onPress={() => setPage('profile')}>
          <Text style={styles.actionButtonText}>👤 Личный профиль</Text>
        </TouchableOpacity>

        {/* Кнопка перехода в Каталог */}
        <TouchableOpacity style={styles.actionButton} onPress={() => setPage('catalog')}>
          <Text style={styles.actionButtonText}>📦 Каталог услуг</Text>
        </TouchableOpacity>

        {/* Кнопка выхода */}
        <TouchableOpacity style={styles.logoutButton} onPress={() => setPage('login')}>
          <Text style={styles.logoutButtonText}>Выйти</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  homeContainer: { flex: 1, paddingHorizontal: 28, paddingTop: 40, alignItems: 'center' },
  settingsButton: {
    alignSelf: 'flex-end',
    width: 48,
    height: 48,
    backgroundColor: '#EAEAEA',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingsIcon: { fontSize: 22 },
  homeTitle: { color: '#1B1923', fontSize: 26, fontWeight: '700', textAlign: 'center' },
  homeText: { color: '#AAA9B2', fontSize: 16, marginTop: 8, textAlign: 'center' },
  homeCity: { color: '#A014E6', fontSize: 16, fontWeight: '600', marginTop: 15, marginBottom: 35 },
  actionButton: { width: '100%', height: 56, backgroundColor: '#F8F8FA', borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginBottom: 14 },
  actionButtonText: { color: '#1B1923', fontSize: 16, fontWeight: '600' },
  logoutButton: { width: '100%', height: 56, backgroundColor: '#A014E6', borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginTop: 20 },
  logoutButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
});