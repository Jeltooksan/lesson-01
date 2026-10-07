import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Pressable
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

// 1. Создаем интерфейс для пропсов. 
// Мы говорим TypeScript, что setPage — это функция, которая принимает строку и ничего не возвращает (void).
interface ForgetPasswordProps {
  setPage: (page: string) => void;
}

// 2. Указываем этот интерфейс при объявлении компонента
export default function ForgetPassword({ setPage }: ForgetPasswordProps) {
  const [forgotPhone, setForgotPhone] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          
          <Pressable style={styles.backButton} onPress={() => setPage('login')}>
            <Text style={styles.backButtonText}>←</Text>
          </Pressable>

          <Text style={styles.title}>Восстановление пароля</Text>
          <Text style={styles.subtitle}>Введите номер телефона, чтобы восстановить пароль.</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.inputIcon}>📞</Text>
            <TextInput
              style={styles.input}
              value={forgotPhone}
              onChangeText={setForgotPhone}
              placeholder="Номер телефона"
              placeholderTextColor="#AAA9B2"
              keyboardType="phone-pad"
            />
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={() => setPage('confirm')}>
            <Text style={styles.loginButtonText}>Продолжить</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Стили остаются без изменений
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  scrollContainer: { flexGrow: 1 },
  container: { flex: 1, paddingHorizontal: 28, paddingTop: 60, paddingBottom: 40, backgroundColor: '#FFFFFF' },
  backButton: { width: 45, height: 45, justifyContent: 'center', alignItems: 'flex-start', marginBottom: 22 },
  backButtonText: { fontSize: 32, color: '#1B1923', fontWeight: '300' },
  title: { color: '#1B1923', fontSize: 27, fontWeight: '700', lineHeight: 34 },
  subtitle: { color: '#AAA9B2', fontSize: 16, lineHeight: 22, marginTop: 5, marginBottom: 29 },
  inputContainer: { width: '100%', height: 62, flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F8FA', borderRadius: 18, paddingHorizontal: 18 },
  inputIcon: { fontSize: 20, marginRight: 14 },
  input: { flex: 1, height: '100%', color: '#1B1923', fontSize: 17 },
  loginButton: { width: '100%', height: 58, backgroundColor: '#A014E6', borderRadius: 18, justifyContent: 'center', alignItems: 'center', marginTop: 25 },
  loginButtonText: { color: '#FFFFFF', fontSize: 17, fontWeight: '600' },
});