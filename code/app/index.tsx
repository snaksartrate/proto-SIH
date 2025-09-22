import React, { useState } from 'react';
import { Link } from 'expo-router';
import { View, Text, Switch, ScrollView, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [sosEnabled, setSosEnabled] = useState(false);
  const [scamAlertsEnabled, setScamAlertsEnabled] = useState(false);
  const [sosNote, setSosNote] = useState('');

  return (
      <ScrollView contentContainerStyle={styles.container} style={{ backgroundColor: '#0b0b0f' }}>
        <View style={styles.headerRow}>
          <Link href="/friends" asChild>
            <TouchableOpacity style={styles.smallBtn}><Text style={styles.btnText}>Friends</Text></TouchableOpacity>
          </Link>
          <Text style={styles.appTitle}>Travel Companion</Text>
          <Link href="/profile" asChild>
            <TouchableOpacity style={styles.smallBtn}><Text style={styles.btnText}>Profile</Text></TouchableOpacity>
          </Link>
        </View>

        <View style={styles.row}>
          <NavButton label="Plan a Trip" href="/plan" />
          <NavButton label="Start a Trip" href="/start" />
        </View>
        <View style={styles.row}>
          <NavButton label="Book a Ride" href="/book" />
          <NavButton label="Map" href="/map" />
        </View>
        <View style={styles.row}>
          <NavButton label="Contribute" href="/contribute" />
          <NavButton label="Weather Reports" href="/weather" />
        </View>

        <View style={styles.switchRow}>
          <Text>SOS Mode</Text>
          <Switch value={sosEnabled} onValueChange={setSosEnabled} />
        </View>
        {sosEnabled && (
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>SOS note</Text>
            <TextInput
              placeholder="Type anything…"
              value={sosNote}
              onChangeText={setSosNote}
              multiline
              style={styles.textArea}
            />
          </View>
        )}

        <View style={styles.switchRow}>
          <Text>Scam alerts</Text>
          <Switch value={scamAlertsEnabled} onValueChange={setScamAlertsEnabled} />
        </View>
        {scamAlertsEnabled && (
          <Link href="/scam-log" asChild>
            <TouchableOpacity style={[styles.smallBtn, { alignSelf: 'flex-start' }]}><Text style={styles.btnText}>View scam log</Text></TouchableOpacity>
          </Link>
        )}

        <Link href="/chatbot" asChild>
          <TouchableOpacity style={[styles.bigBtn, { marginTop: 20 }]}>
            <Text style={styles.btnText}>Chatbot</Text>
          </TouchableOpacity>
        </Link>

        <View style={{ alignItems: 'flex-end', marginTop: 16 }}>
          <Link href="/data" asChild>
            <TouchableOpacity style={styles.smallBtn}><Text style={styles.btnText}>Data</Text></TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
  );
}

function NavButton({ label, href }: { label: string; href: string }) {
  return (
    <Link href={href} asChild>
      <TouchableOpacity style={styles.smallBtn}><Text style={styles.btnText}>{label}</Text></TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  appTitle: { fontSize: 18, fontWeight: '600' },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 6 },
  smallBtn: { backgroundColor: '#3b48c5', paddingVertical: 12, paddingHorizontal: 14, borderRadius: 12 },
  bigBtn: { backgroundColor: '#2a9d8f', paddingVertical: 16, borderRadius: 14, alignItems: 'center' },
  btnText: { color: 'white', fontWeight: '600' },
  switchRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 },
  card: { backgroundColor: 'rgba(255,255,255,0.9)', padding: 12, borderRadius: 12, marginTop: 8 },
  sectionTitle: { fontWeight: '700', marginBottom: 6 },
  textArea: { minHeight: 100, textAlignVertical: 'top' }
});

