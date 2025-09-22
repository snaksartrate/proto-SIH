import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function StartTrip() {
  const plannedTrips = [
    { title: 'Mumbai to Pune', date: '2025-10-01 08:00' },
    { title: 'Weekend: Lonavala Trek', date: '2025-10-12 06:30' }
  ];
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Planned trips</Text>
      {plannedTrips.map((t, i) => (
        <View key={i} style={styles.card}>
          <Text style={{ fontWeight: '700' }}>{t.title}</Text>
          <Text>{t.date}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 16, fontWeight: '700' },
  card: { backgroundColor: 'white', borderRadius: 12, padding: 12, marginTop: 10, borderWidth: 1, borderColor: '#eee' }
});

