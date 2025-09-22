import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Weather() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather report</Text>
      <Text>25°C, Partly cloudy. Replace with API later.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 16, fontWeight: '700' }
});

