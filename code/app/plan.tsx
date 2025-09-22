import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

export default function PlanTrip() {
  const [visibility, setVisibility] = useState<'public' | 'private'>('private');
  const [domain, setDomain] = useState<'intercity' | 'weekend' | 'vacation' | null>(null);
  const [purpose, setPurpose] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Trip visibility</Text>
      <View style={styles.row}>
        <Radio label="Make trip public" selected={visibility==='public'} onPress={()=>setVisibility('public')} description="your friends will be able to know and join you"/>
        <Radio label="Keep trip private" selected={visibility==='private'} onPress={()=>setVisibility('private')} description="plan for yourself"/>
      </View>

      <Text style={styles.title}>Choose travel domain</Text>
      <View style={styles.row}>
        <Option label="Intercity" onPress={()=>setDomain('intercity')} selected={domain==='intercity'} />
        <Option label="Plan a weekend" onPress={()=>setDomain('weekend')} selected={domain==='weekend'} />
        <Option label="Plan a vacation" onPress={()=>setDomain('vacation')} selected={domain==='vacation'} />
      </View>

      <Text style={styles.title}>Purpose (optional)</Text>
      <TextInput style={styles.input} placeholder="Why are you traveling?" value={purpose} onChangeText={setPurpose} />

      {domain === 'intercity' && <IntercityForm />}
      {domain === 'weekend' && <WeekendSection />}
      {domain === 'vacation' && <VacationSection />}
    </ScrollView>
  );
}

function IntercityForm() {
  const [src, setSrc] = useState('');
  const [dst, setDst] = useState('');
  const [mode, setMode] = useState('Train');
  const [date, setDate] = useState('');
  return (
    <View>
      <Text style={styles.title}>Intercity details</Text>
      <TextInput style={styles.input} placeholder="Source" value={src} onChangeText={setSrc}/>
      <TextInput style={styles.input} placeholder="Destination" value={dst} onChangeText={setDst}/>
      <TextInput style={styles.input} placeholder="Mode of travel (e.g. Train)" value={mode} onChangeText={setMode}/>
      <TextInput style={styles.input} placeholder="Date of travel" value={date} onChangeText={setDate}/>
      <Text style={styles.subtitle}>Dummy rides</Text>
      <Card title={`${mode} - ${src} to ${dst}`} subtitle={`Date: ${date || 'TBD'}`} />
      <Card title={`${mode} Express`} subtitle="Duration: 6h • Fare: ₹999" />
    </View>
  );
}

function WeekendSection() {
  const [choice, setChoice] = useState<'events' | 'outings' | null>(null);
  const [src, setSrc] = useState('');
  return (
    <View>
      <Text style={styles.subtitle}>Choose</Text>
      <View style={styles.row}>
        <Option label="Events" selected={choice==='events'} onPress={()=>setChoice('events')} />
        <Option label="Outings" selected={choice==='outings'} onPress={()=>setChoice('outings')} />
      </View>
      <TextInput style={styles.input} placeholder="Enter source location (or skip)" value={src} onChangeText={setSrc} />
      {choice === 'outings' && (
        <View>
          <Text style={styles.subtitle}>Nearby tours (max 2 days)</Text>
          <Card title="Beachside Getaway" subtitle="Alibaug • 2 days • ₹3,999" />
          <Card title="Hill Trek" subtitle="Lonavala • 2 days • ₹2,499" />
        </View>
      )}
      {choice === 'events' && (
        <View>
          <Text style={styles.subtitle}>Events near you</Text>
          <Card title="Indie Concert" subtitle="Saturday 7 PM • ₹699" />
          <Card title="Outdoor Movie Night" subtitle="Sunday 6 PM • ₹299" />
        </View>
      )}
    </View>
  );
}

function VacationSection() {
  return (
    <View>
      <Text style={styles.subtitle}>Trips (3–15 days)</Text>
      <Card title="Himalayan Adventure" subtitle="Manali • 7 days • ₹18,999" />
      <Card title="Goa Explorer" subtitle="Goa • 5 days • ₹12,499" />
      <Card title="Rajasthan Heritage" subtitle="Jaipur-Jodhpur • 10 days • ₹25,999" />
    </View>
  );
}

function Radio({ label, selected, onPress, description }: any) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.radio, selected && styles.radioSelected]}>
      <Text>{label}</Text>
      {description && <Text style={{ color: '#555', marginTop: 2 }}>{description}</Text>}
    </TouchableOpacity>
  );
}

function Option({ label, selected, onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.option, selected && styles.optionSelected]}>
      <Text style={{ color: selected ? 'white' : '#111' }}>{label}</Text>
    </TouchableOpacity>
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
  title: { fontSize: 16, fontWeight: '700', marginTop: 8 },
  subtitle: { fontWeight: '600', marginTop: 8 },
  row: { flexDirection: 'row', gap: 8, marginTop: 8, flexWrap: 'wrap' },
  radio: { flex: 1, backgroundColor: '#f1f1f1', padding: 10, borderRadius: 10 },
  radioSelected: { borderWidth: 1, borderColor: '#3b48c5' },
  option: { backgroundColor: '#e9e9e9', padding: 10, borderRadius: 10 },
  optionSelected: { backgroundColor: '#3b48c5' },
  input: { backgroundColor: 'white', borderRadius: 10, padding: 10, marginTop: 8, borderWidth: 1, borderColor: '#ddd' },
  card: { backgroundColor: 'white', borderRadius: 12, padding: 12, marginTop: 10, borderWidth: 1, borderColor: '#eee' }
});

