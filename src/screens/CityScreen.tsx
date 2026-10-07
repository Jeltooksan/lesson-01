import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Pressable
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

// 1. Описываем типы для пропсов экрана выбора города
interface CityScreenProps {
  setPage: (page: string) => void;
  city: string;
  setCity: (city: string) => void;
}

// 2. Указываем интерфейс CityScreenProps
export default function CityScreen({ setPage, city, setCity }: CityScreenProps) {
  
  // Список городов
  const cities = [
    'Алматы',
    'Астана',
    'Шымкент',
    'Актау',
    'Атырау',
    'Караганда',
    'Актобе',
    'Тараз',
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          
          <Pressable style={styles.backButton} onPress={() => setPage('register')}>
            <Text style={styles.backButtonText}>←</Text>
          </Pressable>

          <Text style={styles.title}>Выберите город</Text>
          <Text style={styles.subtitle}>Выберите ваш город.</Text>

          {/* Перебираем массив городов и выводим их */}
          {cities.map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.cityItem,
                city === item && styles.cityItemSelected // Добавляем стили, если город выбран
              ]}
              onPress={() => {
                setCity(item); // Сохраняем выбранный город в App.tsx
                setPage('register'); // Возвращаемся на экран регистрации
              }}
            >
              <Text
                style={[
                  styles.cityItemText,
                  city === item && styles.cityItemTextSelected
                ]}
              >
                {item}
              </Text>

              {/* Показываем галочку только для выбранного города */}
              {city === item && (
                <Text style={styles.check}>✓</Text>
              )}
              
            </TouchableOpacity>
          ))}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  scrollContainer: { flexGrow: 1 },
  container: { flex: 1, paddingHorizontal: 28, paddingTop: 60, paddingBottom: 40, backgroundColor: '#FFFFFF' },
  backButton: { width: 45, height: 45, justifyContent: 'center', alignItems: 'flex-start', marginBottom: 22 },
  backButtonText: { fontSize: 32, color: '#1B1923', fontWeight: '300' },
  title: { color: '#1B1923', fontSize: 27, fontWeight: '700', lineHeight: 34 },
  subtitle: { color: '#AAA9B2', fontSize: 16, lineHeight: 22, marginTop: 5, marginBottom: 29 },
  cityItem: { width: '100%', height: 58, backgroundColor: '#F8F8FA', borderRadius: 16, paddingHorizontal: 20, marginBottom: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  cityItemSelected: { borderWidth: 2, borderColor: '#A014E6', backgroundColor: '#FAF3FF' },
  cityItemText: { color: '#1B1923', fontSize: 17 },
  cityItemTextSelected: { color: '#A014E6', fontWeight: '600' },
  check: { color: '#A014E6', fontSize: 22, fontWeight: '700' },
});