import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Pressable
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

// 1. Описываем типы для всех пропсов, которые принимает этот экран
interface RegisterScreenProps {
  setPage: (page: string) => void;
  setSavedPhone: (phone: string) => void;
  setSavedPassword: (password: string) => void;
  city: string;
}

// 2. Указываем интерфейс RegisterScreenProps
export default function RegisterScreen({ 
  setPage, 
  setSavedPhone, 
  setSavedPassword, 
  city 
}: RegisterScreenProps) {
  
  // Локальные состояния только для формы регистрации
  const [name, setName] = useState('');
  const [registerPhone, setRegisterPhone] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerRepeatPassword, setRegisterRepeatPassword] = useState('');
  const [registerMessage, setRegisterMessage] = useState('');

  const handleRegister = () => {
    // Проверка на пустые поля
    if (name.trim() === '' || registerPhone.trim() === '' || registerPassword.trim() === '') {
      setRegisterMessage('Заполните все поля');
      return;
    }

    // Проверка совпадения паролей
    if (registerPassword !== registerRepeatPassword) {
      setRegisterMessage('Пароли не совпадают');
      return;
    }

    // Сохраняем нового пользователя в глобальный стейт (в App.tsx)
    setSavedPhone(registerPhone);
    setSavedPassword(registerPassword);

    setRegisterMessage('');
    setPage('login'); // Возвращаемся на экран входа
  };

  return (
    <>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          
          <Pressable style={styles.backButton} onPress={() => setPage('login')}>
            <Text style={styles.backButtonText}>←</Text>
          </Pressable>

          <Text style={styles.title}>Регистрация</Text>
          <Text style={styles.subtitle}>Создайте новый аккаунт.</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.inputIcon}>👤</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Ваше имя"
              placeholderTextColor="#AAA9B2"
            />
          </View>

          <View style={[styles.inputContainer, { marginTop: 16 }]}>
            <Text style={styles.inputIcon}>📞</Text>
            <TextInput
              style={styles.input}
              value={registerPhone}
              onChangeText={setRegisterPhone}
              placeholder="Номер телефона"
              placeholderTextColor="#AAA9B2"
              keyboardType="phone-pad"
            />
          </View>

          <View style={[styles.inputContainer, { marginTop: 16 }]}>
            <Text style={styles.inputIcon}>🔒</Text>
            <TextInput
              style={styles.input}
              value={registerPassword}
              onChangeText={setRegisterPassword}
              placeholder="Пароль"
              placeholderTextColor="#AAA9B2"
              secureTextEntry={true}
            />
          </View>

          <View style={[styles.inputContainer, { marginTop: 16 }]}>
            <Text style={styles.inputIcon}>🔒</Text>
            <TextInput
              style={styles.input}
              value={registerRepeatPassword}
              onChangeText={setRegisterRepeatPassword}
              placeholder="Повторите пароль"
              placeholderTextColor="#AAA9B2"
              secureTextEntry={true}
            />
          </View>

          {/* Выбор города */}
          <TouchableOpacity style={styles.citySelector} onPress={() => setPage('city')}>
            <Text style={styles.inputIcon}>📍</Text>
            <Text style={styles.citySelected}>{city}</Text>
            <Text style={styles.cityArrow}>▼</Text>
          </TouchableOpacity>

          {registerMessage !== '' && (
            <Text style={styles.errorMessage}>{registerMessage}</Text>
          )}

          <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
            <Text style={styles.loginButtonText}>Зарегистрироваться</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollContainer: { flexGrow: 1 },
  container: { flex: 1, paddingHorizontal: 28, paddingTop: 60, paddingBottom: 40, backgroundColor: '#FFFFFF' },
  backButton: { width: 45, height: 45, justifyContent: 'center', alignItems: 'flex-start', marginBottom: 22 },
  backButtonText: { fontSize: 32, color: '#1B1923', fontWeight: '300' },
  title: { color: '#1B1923', fontSize: 27, fontWeight: '700', lineHeight: 34 },
  subtitle: { color: '#AAA9B2', fontSize: 16, lineHeight: 22, marginTop: 5, marginBottom: 29 },
  inputContainer: { width: '100%', height: 62, flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F8FA', borderRadius: 18, paddingHorizontal: 18 },
  inputIcon: { fontSize: 20, marginRight: 14 },
  input: { flex: 1, height: '100%', color: '#1B1923', fontSize: 17 },
  citySelector: { width: '100%', height: 62, backgroundColor: '#F8F8FA', borderRadius: 18, paddingHorizontal: 18, flexDirection: 'row', alignItems: 'center', marginTop: 16 },
  citySelected: { flex: 1, color: '#1B1923', fontSize: 17 },
  cityArrow: { color: '#777777', fontSize: 14 },
  loginButton: { width: '100%', height: 58, backgroundColor: '#A014E6', borderRadius: 18, justifyContent: 'center', alignItems: 'center', marginTop: 24 },
  errorMessage: {
    color: '#E53935',
    fontSize: 14,
    marginTop: 12,
    textAlign: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
} 
});
