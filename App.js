import React from 'react';
import 'react-native-gesture-handler';



import { StyleSheet, Text, View, Image, ScrollView, StatusBar, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen.js';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>

        <HomeScreen />

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

  }
);


