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
  onBack: () => void;
};

export default function ForgetPassword({ onBack }: Props) {
  const [phone, setPhone] = useState('+7 (000) 000 00 00');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Pressable
          style={({ pressed }) => [
            styles.backButton,
            pressed && styles.backButtonPressed,
          ]}
          onPress={onBack}
          hitSlop={10}
        >
          <Ionicons name="arrow-back" size={26} color="#1B1923" />
        </Pressable>

        <Text style={[styles.title, styles.centerText]}>Восстановление пароля</Text>
        <Text style={[styles.subtitle, styles.centerText]}>
          Введите свой номер телефона, чтобы восстановить пароль
        </Text>

        <View style={styles.inputContainer}>
          <Ionicons name="call" size={22} color="#A100ED" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Номер телефона"
            placeholderTextColor="#8E8E93"
            keyboardType="phone-pad"
          />
        </View>

        <Pressable style={styles.primaryButton} onPress={() => console.log('Продолжить')}>
          <Text style={styles.primaryButtonText}>Продолжить</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { flex: 1, paddingHorizontal: 24, paddingTop: 20 },
  backButton: { width: 40, height: 40, justifyContent: 'center', marginBottom: 24 },
  backButtonPressed: { opacity: 0.5 },
  title: { color: '#1B1923', fontSize: 24, fontWeight: '700', marginBottom: 8 },
  subtitle: { color: '#8E8E93', fontSize: 14, marginBottom: 32, lineHeight: 20 },
  centerText: { textAlign: 'center' },
  inputContainer: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F9',
    borderRadius: 16,
    paddingHorizontal: 16,
  },
  inputIcon: { marginRight: 12 },
  input: { flex: 1, height: '100%', color: '#1B1923', fontSize: 16 },
  primaryButton: {
    width: '100%',
    height: 56,
    backgroundColor: '#A100ED',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  primaryButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
});