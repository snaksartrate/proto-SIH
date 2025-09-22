import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function BookRide() {
  const [src, setSrc] = useState('');
  const [dst, setDst] = useState('');
  const [mode, setMode] = useState('City bus');
  const [purpose, setPurpose] = useState('');
  const [showResults, setShowResults] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Intracity</Text>
      <TextInput style={styles.input} placeholder="Source" value={src} onChangeText={setSrc} />
      <TextInput style={styles.input} placeholder="Destination" value={dst} onChangeText={setDst} />
      <TextInput style={styles.input} placeholder="Mode (city bus, train, cab, ride sharing, bike, rickshaw)" value={mode} onChangeText={setMode} />
      <TextInput style={styles.input} placeholder="Purpose (optional)" value={purpose} onChangeText={setPurpose} />
      <View style={{ flexDirection: 'row', gap: 8 }}>
        <TouchableOpacity style={styles.btn} onPress={() => setShowResults(true)}><Text style={styles.btnText}>Search</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { backgroundColor: '#555' }]}><Text style={styles.btnText}>Prebook</Text></TouchableOpacity>
      </View>

      {showResults && (
        <View>
          <Text style={styles.subtitle}>Dummy rides</Text>
          <Card title={`${mode} • ${src} → ${dst}`} subtitle="ETA 18 min • ₹49" />
          <Card title="Express Service" subtitle="ETA 10 min • ₹79" />
        </View>
      )}
    </ScrollView>
  );
}

function Card({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <View style={styles.card}>
      <Text style={{ fontWeight: '700' }}>{title}</Text>
      <Text>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 16, fontWeight: '700' },
  subtitle: { fontWeight: '600', marginTop: 8 },
  input: { backgroundColor: 'white', borderRadius: 10, padding: 10, marginTop: 8, borderWidth: 1, borderColor: '#ddd' },
  btn: { backgroundColor: '#3b48c5', paddingVertical: 12, paddingHorizontal: 14, borderRadius: 12, marginTop: 8 },
  btnText: { color: 'white', fontWeight: '600' },
  card: { backgroundColor: 'white', borderRadius: 12, padding: 12, marginTop: 10, borderWidth: 1, borderColor: '#eee' }
});

