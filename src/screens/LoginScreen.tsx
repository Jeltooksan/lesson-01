import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Типы для TypeScript
interface LoginScreenProps {
  setPage: (page: string) => void;
  savedPhone: string;
  savedPassword: string;
}

export default function LoginScreen({ setPage, savedPhone, savedPassword }: LoginScreenProps) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = () => {
    if (phone === savedPhone && password === savedPassword) {
      setLoginMessage('Вход выполнен успешно!');
      setTimeout(() => {
        setLoginMessage('');
        setPage('home');
      }, 800);
    } else {
      setLoginMessage('Неверный номер телефона или пароль');
    }
  };

  return (
    <>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          
          <Text style={styles.title}>Привет, с возвращением!</Text>
          <Text style={styles.subtitle}>Войдите в свой аккаунт.</Text>

          {/* Ввод телефона */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputIcon}>📞</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="Номер телефона"
              placeholderTextColor="#AAA9B2"
              keyboardType="phone-pad"
            />
          </View>

          {/* Ввод пароля */}
          <View style={[styles.inputContainer, { marginTop: 16 }]}>
            <Text style={styles.inputIcon}>🔒</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Пароль"
              placeholderTextColor="#AAA9B2"
              secureTextEntry={true}
            />
          </View>

          {/* Забыли пароль */}
          <TouchableOpacity style={styles.forgotPasswordButton} onPress={() => setPage('forgot')}>
            <Text style={styles.forgotPasswordText}>Забыли пароль?</Text>
          </TouchableOpacity>

          {/* Сообщение об ошибке или успехе */}
          {loginMessage !== '' && (
            <Text style={styles.message}>{loginMessage}</Text>
          )}

          {/* Кнопка Войти */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Войти</Text>
          </TouchableOpacity>

          {/* Ссылка на регистрацию */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>У вас нет аккаунта?</Text>
            <TouchableOpacity onPress={() => setPage('register')}>
              <Text style={styles.registerText}>Зарегистрироваться</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </>
  );
}

// Стили
const styles = StyleSheet.create({
  scrollContainer: { flexGrow: 1 },
  container: { flex: 1, paddingHorizontal: 28, paddingTop: 60, paddingBottom: 40, backgroundColor: '#FFFFFF' },
  title: { color: '#1B1923', fontSize: 27, fontWeight: '700', lineHeight: 34 },
  subtitle: { color: '#AAA9B2', fontSize: 16, lineHeight: 22, marginTop: 5, marginBottom: 29 },
  inputContainer: { width: '100%', height: 62, flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F8FA', borderRadius: 18, paddingHorizontal: 18 },
  inputIcon: { fontSize: 20, marginRight: 14 },
  input: { flex: 1, height: '100%', color: '#1B1923', fontSize: 17 },
  forgotPasswordButton: { alignSelf: 'flex-end', marginTop: 16, marginBottom: 5 },
  forgotPasswordText: { color: '#A014E6', fontSize: 16, fontWeight: '500' },
  loginButton: { width: '100%', height: 58, backgroundColor: '#A014E6', borderRadius: 18, justifyContent: 'center', alignItems: 'center', marginTop: 25, marginBottom: 25 },
  loginButtonText: { color: '#FFFFFF', fontSize: 17, fontWeight: '600' },
  footer: { alignItems: 'center', gap: 6 },
  footerText: { color: '#AAA9B2', fontSize: 16 },
  registerText: { color: '#A014E6', fontSize: 16, fontWeight: '600' },
  message: { textAlign: 'center', color: '#A014E6', fontSize: 14, marginTop: 15 },
});