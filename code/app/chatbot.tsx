import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const MODES = ['Tour guide', 'Travel assistant', 'Itinerary planner'] as const;

export default function Chatbot() {
  const [mode, setMode] = useState<string | null>(null);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!mode ? (
        <View>
          <Text style={styles.title}>Select mode</Text>
          <View style={styles.row}>
            {MODES.map(m => (
              <TouchableOpacity key={m} style={styles.mode} onPress={()=>setMode(m)}>
                <Text style={{ color: 'white', fontWeight: '700' }}>{m}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ) : (
        <View>
          <Text style={styles.title}>{mode}</Text>
          <Text style={{ marginBottom: 8 }}>Try a prompt:</Text>
          <Suggestion text="Plan a trip to Manali from Mumbai, 5D4N for 4 people" />
          <Suggestion text="Suggest weekend events near Pune" />
          <Suggestion text="Create a 7-day Rajasthan itinerary under ₹30k" />
        </View>
      )}
    </ScrollView>
  );
}

function Suggestion({ text }: { text: string }) {
  return (
    <View style={styles.suggestion}><Text>{text}</Text></View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 16, fontWeight: '700', marginBottom: 8 },
  row: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  mode: { backgroundColor: '#3b48c5', padding: 14, borderRadius: 12 },
  suggestion: { backgroundColor: 'white', borderRadius: 12, padding: 12, marginTop: 10, borderWidth: 1, borderColor: '#eee' }
});

