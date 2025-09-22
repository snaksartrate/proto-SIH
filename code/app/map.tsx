import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function MapScreen() {
  const [coords, setCoords] = useState<Location.LocationObject | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') { setError('Permission denied'); return; }
      const loc = await Location.getCurrentPositionAsync({});
      setCoords(loc);
    })();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Map placeholder</Text>
      {error && <Text>{error}</Text>}
      {coords && (
        <Text>{`Lat: ${coords.coords.latitude.toFixed(4)}  Lng: ${coords.coords.longitude.toFixed(4)}  Speed: ${coords.coords.speed ?? 0}`}</Text>
      )}
      <Text style={{ marginTop: 10 }}>Integrate Google Maps API here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 16, fontWeight: '700' }
});

