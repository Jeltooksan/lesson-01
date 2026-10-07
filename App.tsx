import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

// Импортируем все экраны
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ForgetPassword from './src/screens/ForgetPassword';
import ConfirmCodeScreen from './src/screens/ConfirmCodeScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';
import CityScreen from './src/screens/CityScreen';
import HomeScreen from './src/screens/HomeScreen';

// Новые 3 экрана
import ProfileScreen from './src/screens/ProfileScreen';
import CatalogScreen from './src/screens/CatalogScreen';
import SettingsScreen from './src/screens/SettingsScreen';

export default function App() {
  const [page, setPage] = useState('login');

  const [savedPhone, setSavedPhone] = useState('+77001234567');
  const [savedPassword, setSavedPassword] = useState('12345678');
  const [city, setCity] = useState('Алматы');
  const [forgotPhone, setForgotPhone] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      
      {page === 'login' && <LoginScreen setPage={setPage} savedPhone={savedPhone} savedPassword={savedPassword} />}
      {page === 'register' && <RegisterScreen setPage={setPage} setSavedPhone={setSavedPhone} setSavedPassword={setSavedPassword} city={city} />}
      {page === 'city' && <CityScreen setPage={setPage} city={city} setCity={setCity} />}
      {page === 'forgot' && <ForgetPassword setPage={setPage} />}
      {page === 'confirm' && <ConfirmCodeScreen setPage={setPage} forgotPhone={forgotPhone} />}
      {page === 'reset' && <ResetPasswordScreen setPage={setPage} setSavedPassword={setSavedPassword} />}
      
      {/* Главная страница и 3 новые функции */}
      {page === 'home' && <HomeScreen setPage={setPage} city={city} />}
      {page === 'profile' && <ProfileScreen setPage={setPage} city={city} />}
      {page === 'catalog' && <CatalogScreen setPage={setPage} />}
      {page === 'settings' && <SettingsScreen setPage={setPage} />}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
});