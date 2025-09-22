import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';

const LOG_PATH = FileSystem.documentDirectory + 'scam-log.json';

export default function ScamLog() {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const info = await FileSystem.getInfoAsync(LOG_PATH);
        if (!info.exists) {
          const initial = [
            'Taxi driver overcharging near Dadar Railway Station, Mumbai.'
          ];
          await FileSystem.writeAsStringAsync(LOG_PATH, JSON.stringify(initial, null, 2));
          setItems(initial);
        } else {
          const txt = await FileSystem.readAsStringAsync(LOG_PATH);
          setItems(JSON.parse(txt));
        }
      } catch (e) {
        // ignore
      }
    })();
  }, []);

  const clear = async () => {
    Alert.alert('Clear scam log?', 'This cannot be undone.', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete', style: 'destructive', onPress: async () => {
          await FileSystem.writeAsStringAsync(LOG_PATH, JSON.stringify([], null, 2));
          setItems([]);
        }
      }
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'flex-end' }}>
        <TouchableOpacity style={styles.btn} onPress={clear}><Text style={styles.btnText}>Clear</Text></TouchableOpacity>
      </View>
      {items.map((t, i) => (
        <View key={i} style={styles.card}><Text>{t}</Text></View>
      ))}
      {items.length === 0 && <Text>No scam alerts logged.</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  btn: { backgroundColor: '#b00020', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 10 },
  btnText: { color: 'white', fontWeight: '600' },
  card: { backgroundColor: 'white', borderRadius: 12, padding: 12, marginTop: 10, borderWidth: 1, borderColor: '#eee' }
});

