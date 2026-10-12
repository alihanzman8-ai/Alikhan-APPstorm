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
import { Ionicons } from '@expo/vector-icons';

type Props = {
  onForgotPassword: () => void;
};

export default function LoginScreen({ onForgotPassword }: Props) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    // 1. Терминалға сіз енгізген нөмір мен парольді шығару[cite: 6]
    console.log('Kipy:', phone, password);

    // 2. Егер екі цифр немесе қате деректер енгізілсе, қызыл қате шығару
    if (!phone.trim() || !password.trim() || password.length < 6) {
      setError('Неверный номер или пароль');
      return;
    }

    // Дұрыс болса қатені тазалау
    setError('');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Pressable style={styles.backButton}>
          <Ionicons name="arrow-back" size={26} color="#1B1923" />
        </Pressable>

        <Text style={styles.title}>Привет, с возвращением!</Text>
        <Text style={styles.subtitle}>Войдите в свой аккаунт.</Text>

        {/* Нөмір енгізу өрісі */}
        <View style={styles.inputContainer}>
          <Ionicons name="call-outline" size={22} color="#8E8E93" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={(text) => {
              setPhone(text);
              if (error) setError('');
            }}
            placeholder="Номер телефона"
            placeholderTextColor="#8E8E93"
            keyboardType="phone-pad"
          />
        </View>

        {/* Пароль енгізу өрісі */}
        <View style={[styles.inputContainer, styles.inputSpacing]}>
          <Ionicons name="lock-closed-outline" size={22} color="#8E8E93" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              if (error) setError('');
            }}
            placeholder="Пароль"
            placeholderTextColor="#8E8E93"
            secureTextEntry={!showPassword}
          />
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={showPassword ? 'eye-outline' : 'eye-off-outline'} size={22} color="#A100ED" />
          </Pressable>
        </View>

        {/* Қате болса астынан қызыл мәтін шығады */}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        {/* Забыли пароль? батырмасы */}
        <Pressable style={styles.forgotButton} onPress={onForgotPassword}>
          <Text style={styles.forgotText}>Забыли пароль?</Text>
        </Pressable>

        {/* Войти батырмасы */}
        <Pressable style={styles.primaryButton} onPress={handleLogin}>
          <Text style={styles.primaryButtonText}>Войти</Text>
        </Pressable>

        <View style={styles.registerRow}>
          <Text style={styles.registerText}>У вас нет аккаунта? </Text>
          <Pressable>
            <Text style={styles.registerLink}>Зарегистрироваться</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { flex: 1, paddingHorizontal: 24, paddingTop: 20 },
  backButton: { width: 40, height: 40, justifyContent: 'center', marginBottom: 24 },
  title: { color: '#1B1923', fontSize: 24, fontWeight: '700', marginBottom: 8 },
  subtitle: { color: '#8E8E93', fontSize: 14, marginBottom: 32 },
  inputContainer: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F9',
    borderRadius: 16,
    paddingHorizontal: 16,
  },
  inputSpacing: { marginTop: 16 },
  inputIcon: { marginRight: 12 },
  input: { flex: 1, height: '100%', color: '#1B1923', fontSize: 16 },
  errorText: {
    color: '#E5484D',
    fontSize: 14,
    marginTop: 10,
    marginLeft: 4,
    fontWeight: '500',
  },
  forgotButton: { alignSelf: 'flex-end', marginTop: 16, marginBottom: 24 },
  forgotText: { color: '#A100ED', fontSize: 14, fontWeight: '500' },
  primaryButton: {
    width: '100%',
    height: 56,
    backgroundColor: '#A100ED',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
  registerRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 24 },
  registerText: { color: '#8E8E93', fontSize: 14 },
  registerLink: { color: '#A100ED', fontSize: 14, fontWeight: '600' },
});