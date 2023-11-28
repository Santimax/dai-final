import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import EventList from './Screens/Flatlist';
import NotificationScreen from './Screens/NotificationScreen';
import video from './Screens/VideoScreen';
import VibrationScreen from './Screens/VibrationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Video" component={video} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Eventos" component={EventList} />
        <Stack.Screen name="vibracion" component={VibrationScreen} />
        <Stack.Screen name="Notificacion" component={NotificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c2691',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
