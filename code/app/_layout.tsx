import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="plan" options={{ title: 'Plan a Trip' }} />
      <Stack.Screen name="start" options={{ title: 'Start a Trip' }} />
      <Stack.Screen name="book" options={{ title: 'Book a Ride' }} />
      <Stack.Screen name="map" options={{ title: 'Map' }} />
      <Stack.Screen name="contribute" options={{ title: 'Contribute' }} />
      <Stack.Screen name="weather" options={{ title: 'Weather' }} />
      <Stack.Screen name="chatbot" options={{ title: 'Chatbot' }} />
      <Stack.Screen name="scam-log" options={{ title: 'Scam Alerts' }} />
      <Stack.Screen name="data" options={{ title: 'Data' }} />
    </Stack>
  );
}

