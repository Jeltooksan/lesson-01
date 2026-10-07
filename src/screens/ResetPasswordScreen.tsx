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

interface ResetPasswordScreenProps {
  setPage: (page: string) => void;
  setSavedPassword: (password: string) => void;
}

export default function ResetPasswordScreen({ setPage, setSavedPassword }: ResetPasswordScreenProps) {
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleResetPassword = () => {
    if (newPassword === '' || newPassword !== repeatPassword) {
      return;
    }
    setSavedPassword(newPassword); // Обновляем глобальный пароль
    setPage('login'); // Возвращаемся на логин
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          
          <Pressable style={styles.backButton} onPress={() => setPage('confirm')}>
            <Text style={styles.backButtonText}>←</Text>
          </Pressable>

          <Text style={styles.title}>Сброс пароля</Text>
          <Text style={styles.subtitle}>Придумайте новый пароль.</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.inputIcon}>🔒</Text>
            <TextInput
              style={styles.input}
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder="Новый пароль"
              placeholderTextColor="#AAA9B2"
              secureTextEntry={true}
            />
          </View>

          <View style={[styles.inputContainer, { marginTop: 16 }]}>
            <Text style={styles.inputIcon}>🔒</Text>
            <TextInput
              style={styles.input}
              value={repeatPassword}
              onChangeText={setRepeatPassword}
              placeholder="Повторите пароль"
              placeholderTextColor="#AAA9B2"
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={handleResetPassword}>
            <Text style={styles.loginButtonText}>Сохранить пароль</Text>
          </TouchableOpacity>

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
  inputContainer: { width: '100%', height: 62, flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F8FA', borderRadius: 18, paddingHorizontal: 18 },
  inputIcon: { fontSize: 20, marginRight: 14 },
  input: { flex: 1, height: '100%', color: '#1B1923', fontSize: 17 },
  loginButton: { width: '100%', height: 58, backgroundColor: '#A014E6', borderRadius: 18, justifyContent: 'center', alignItems: 'center', marginTop: 25 },
  loginButtonText: { color: '#FFFFFF', fontSize: 17, fontWeight: '600' },
});