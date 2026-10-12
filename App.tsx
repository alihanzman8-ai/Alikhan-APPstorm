import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import LoginScreen from './src/components/LoginScreen';
import ForgetPassword from './src/components/ForgetPassword';
import Register from './src/components/Register';
import Home from './src/components/Home';
import Search from './src/components/Search';
import Profile from './src/components/Profile';

type Page =
  | 'login'
  | 'forget'
  | 'register'
  | 'city'
  | 'home'
  | 'search'
  | 'profile';

export default function App() {
  const [page, setPage] = useState<Page>('login');
  const [city, setCity] = useState('');

  // Вход
  const handleLogin = () => {
    setPage('home');
  };

  // Восстановление пароля
  if (page === 'forget') {
    return <ForgetPassword onBack={() => setPage('login')} />;
  }

  // Регистрация
  if (page === 'register') {
    return (
      <Register
        onBack={() => setPage('login')}
        onLogin={() => setPage('login')}
        onRegisterSuccess={() => setPage('city')}
      />
    );
  }

  // Выбор города
  if (page === 'city') {
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="dark" />

        <View style={styles.container}>
          <Pressable
            style={styles.backButton}
            onPress={() => setPage('register')}
          >
            <Text style={styles.backButtonText}>←</Text>
          </Pressable>

          <Text style={styles.title}>Выберите город</Text>

          <Text style={styles.subtitle}>
            Заведения, которые будут показываться вам, зависят от вашего города.
          </Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={city}
              onChangeText={setCity}
              placeholder="Например, Алматы"
              placeholderTextColor="#AAA9B2"
            />
          </View>

          <Pressable
            style={styles.loginButton}
            onPress={() => {
              if (!city.trim()) {
                alert('Пожалуйста, укажите город');
                return;
              }

              setPage('home');
            }}
          >
            <Text style={styles.loginButtonText}>Продолжить</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  // Главная страница
  if (page === 'home') {
    return (
      <Home
        city={city}
        onSearch={() => setPage('search')}
        onProfile={() => setPage('profile')}
      />
    );
  }

  // Поиск
  if (page === 'search') {
    return (
      <Search
        onBack={() => setPage('home')}
        onHome={() => setPage('home')}
        onProfile={() => setPage('profile')}
      />
    );
  }

  // Профиль
  if (page === 'profile') {
    return (
      <Profile
        city={city}
        onBack={() => setPage('home')}
        onHome={() => setPage('home')}
        onSearch={() => setPage('search')}
        onLogout={() => setPage('login')}
      />
    );
  }

  // Экран входа
  return (
    <LoginScreen
      onLogin={handleLogin}
      onRegister={() => setPage('register')}
      onForgotPassword={() => setPage('forget')}
    />
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 10,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8FA',
    borderRadius: 12,
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: '#1B1923',
    fontWeight: '600',
  },
  title: {
    color: '#1B1923',
    fontSize: 28,
    fontWeight: '700',
    marginTop: 10,
  },
  subtitle: {
    color: '#AAA9B2',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 18,
    lineHeight: 22,
  },
  inputContainer: {
    width: '100%',
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    paddingHorizontal: 18,
    marginTop: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    color: '#1B1923',
    fontSize: 18,
  },
  loginButton: {
    width: '100%',
    height: 60,
    backgroundColor: '#A811DA',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '700',
  },
});