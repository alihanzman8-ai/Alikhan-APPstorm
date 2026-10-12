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
export default function App() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [login,setLogin] = useState('');
  const [page, setPage] = useState('login');
  const handleRegister = () => {
    console.log('Регистрация басылды');
  };
  const handleBack = () => {
    console.log('Артқа қайту батырмасы басылды');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>
        {/* Кнопка "Назад" в виде стрелочки */}
        <Pressable
          style={styles.backButton}
          onPress={handleBack}
        >
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>

        <Text style={styles.title}>
          Привет, с возвращением!
        </Text>

        <Text style={styles.subtitle}>
          Войдите в свой аккаунт.
        </Text>

        <View style={styles.inputContainer}>
          {/* Иконка телефона в виде текстового символа 📞 */}
          <Text style={styles.inputIconText}>📞</Text>

          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Номер телефона"
            placeholderTextColor="#AAA9B2"
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.inputContainer}>
          {/* Иконка паролья в виде текстового символа 🔒 */}
          <Text style={styles.inputIconText}>🔒</Text>

          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Пароль"
            placeholderTextColor="#AAA9B2"
            keyboardType="default"
            secureTextEntry
          />
        </View>
        <View>
          <Pressable 
            style = {styles.ssylkaButton} 
            onPress = {() => console.log('Забыл пароль басылды')}
            >
            <Text style = {styles.ssylka}>
              Забыл пароль?
            </Text>
          </Pressable>
        </View>
        <View>
          <Pressable
          style = {styles.loginButton}
          onPress = {() => console.log('Войти басылды')}
          >
            <Text style = {styles.loginButtonText}>
              Войти
            </Text>
          </Pressable>
        </View>
        <View
            style = {styles.registerContainer}>
            <Text style = {styles.registerText}>
              У вас нет аккаунта? 
            </Text>

            <Pressable
            onPress = {handleRegister}>
              <Text style = {styles.registerLink}>
                Зарегистрироваться
              </Text>
            </Pressable>
        </View>
      </View>
    </SafeAreaView>
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
    alignItems: 'flex-start',
    marginBottom: 24,
  },

  /* Стили для текстовой стрелочки назад */
  backButtonText: {
    fontSize: 32,
    color: '#1B1923',
    fontWeight: '300',
  },

  title: {
    color: '#1B1923',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 60,
  },

  subtitle: {
    color: '#AAA9B2',
    fontSize: 18,
    marginTop: 5,
    marginBottom: 18,
  },

  inputContainer: {
    width: '100%',
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    paddingHorizontal: 18,
    marginTop:10,
  },

  /* Стили для текстовой иконки телефона */
  inputIconText: {
    fontSize: 18,
    marginRight: 14,
  },

  ssylkaButton: {
    alignItems: 'flex-end',
    marginTop:10,
  },

  ssylka: {
    color: '#D50000',
    fontSize: 16,
  },

  loginButton: {
    width:'100%',
    height: 60,
    backgroundColor: '#FF0000',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 25,
  },

  loginButtonText: {
    color:'#FFFFFF',
    fontSize: 19,
    fontWeight:'700',
  },

  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  registerText: {
    color:'#D50000',
    fontSize:16,
  },

  registerLink: {
    fontSize: 16,
    color:'#D50000',
    fontWeight: '600',
    marginLeft: 5,
  },

  input: {
    flex: 1,
    height: '100%',
    color: '#1B1923',
    fontSize: 18,
  },
});