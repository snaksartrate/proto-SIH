import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function Contribute() {
  const [type, setType] = useState('Scam');
  const [details, setDetails] = useState('');
  const [location, setLocation] = useState('');

  const submit = () => {
    Alert.alert('Ticket generated', `Type: ${type}\nLocation: ${location}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report</Text>
      <TextInput style={styles.input} placeholder="Type (Scam or Fake ride)" value={type} onChangeText={setType} />
      <TextInput style={styles.input} placeholder="Location" value={location} onChangeText={setLocation} />
      <TextInput style={[styles.input, { height: 120 }]} placeholder="Details" multiline value={details} onChangeText={setDetails} />
      <TouchableOpacity style={styles.btn} onPress={submit}><Text style={styles.btnText}>Generate ticket</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 16, fontWeight: '700' },
  input: { backgroundColor: 'white', borderRadius: 10, padding: 10, marginTop: 8, borderWidth: 1, borderColor: '#ddd' },
  btn: { backgroundColor: '#3b48c5', paddingVertical: 12, paddingHorizontal: 14, borderRadius: 12, marginTop: 8 },
  btnText: { color: 'white', fontWeight: '600' }
});

