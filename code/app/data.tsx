import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';

const USER = 'username';
const PATH = FileSystem.documentDirectory + `${USER}.json`;

export default function DataViewer() {
  const [content, setContent] = useState<string>('{}');

  useEffect(() => {
    (async () => {
      const info = await FileSystem.getInfoAsync(PATH);
      if (!info.exists) {
        await FileSystem.writeAsStringAsync(PATH, JSON.stringify({}, null, 2));
      }
      const txt = await FileSystem.readAsStringAsync(PATH);
      setContent(txt);
    })();
  }, []);

  const clear = async () => {
    Alert.alert('Delete data?', 'The data will be deleted permanently and cannot be recovered. Proceed?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: async () => {
        await FileSystem.writeAsStringAsync(PATH, JSON.stringify({}, null, 2));
        setContent('{}');
      }}
    ]);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 16, alignItems: 'flex-end' }}>
        <TouchableOpacity style={styles.btn} onPress={clear}><Text style={styles.btnText}>Clear data</Text></TouchableOpacity>
      </View>
      <ScrollView style={{ padding: 16 }}>
        <Text selectable style={styles.mono}>{content}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: { backgroundColor: '#b00020', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 10 },
  btnText: { color: 'white', fontWeight: '600' },
  mono: { fontFamily: 'monospace' as any }
});

