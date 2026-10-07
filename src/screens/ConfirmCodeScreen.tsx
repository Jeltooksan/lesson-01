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

interface ConfirmCodeScreenProps {
  setPage: (page: string) => void;
  forgotPhone: string; // Принимаем номер, который ввели на предыдущем экране
}

export default function ConfirmCodeScreen({ setPage, forgotPhone }: ConfirmCodeScreenProps) {
  const [code, setCode] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          
          <Pressable style={styles.backButton} onPress={() => setPage('forgot')}>
            <Text style={styles.backButtonText}>←</Text>
          </Pressable>

          <Text style={styles.title}>Подтвердите номер</Text>
          <Text style={styles.subtitle}>Введите код подтверждения.</Text>

          <Text style={styles.smallInfo}>Код отправлен на:</Text>
          <Text style={styles.phoneText}>
            {forgotPhone || '+77001234567'}
          </Text>

          <View style={styles.inputContainer}>
            <Text style={styles.inputIcon}>🔢</Text>
            <TextInput
              style={styles.input}
              value={code}
              onChangeText={setCode}
              placeholder="Код подтверждения"
              placeholderTextColor="#AAA9B2"
              keyboardType="number-pad"
              maxLength={4}
            />
          </View>

          <Text style={styles.codeInfo}>Для демонстрации введите: 1234</Text>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              if (code === '1234') {
                setPage('reset');
              }
            }}
          >
            <Text style={styles.loginButtonText}>Продолжить</Text>
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
  smallInfo: { color: '#AAA9B2', fontSize: 15, marginTop: 5 },
  phoneText: { color: '#1B1923', fontSize: 18, fontWeight: '600', marginTop: 5, marginBottom: 25 },
  inputContainer: { width: '100%', height: 62, flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F8FA', borderRadius: 18, paddingHorizontal: 18 },
  inputIcon: { fontSize: 20, marginRight: 14 },
  input: { flex: 1, height: '100%', color: '#1B1923', fontSize: 17 },
  codeInfo: { color: '#AAA9B2', fontSize: 13, marginTop: 12 },
  loginButton: { width: '100%', height: 58, backgroundColor: '#A014E6', borderRadius: 18, justifyContent: 'center', alignItems: 'center', marginTop: 25 },
  loginButtonText: { color: '#FFFFFF', fontSize: 17, fontWeight: '600' },
});