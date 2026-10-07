import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface SettingsProps {
  setPage: (page: string) => void;
}

export default function SettingsScreen({ setPage }: SettingsProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        
        <Pressable style={styles.backButton} onPress={() => setPage('home')}>
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>

        <Text style={styles.title}>Настройки</Text>
        <Text style={styles.subtitle}>Параметры приложения.</Text>

        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Уведомления</Text>
          <Text style={styles.settingAction}>Вкл</Text>
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Темная тема</Text>
          <Text style={styles.settingAction}>Выкл</Text>
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
  settingItem: { width: '100%', height: 60, backgroundColor: '#F8F8FA', borderRadius: 16, paddingHorizontal: 20, marginBottom: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  settingText: { color: '#1B1923', fontSize: 17, fontWeight: '500' },
  settingAction: { color: '#A014E6', fontSize: 16, fontWeight: '600' },
});