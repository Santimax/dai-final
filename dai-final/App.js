import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import CalendarScreen from './Screens/CalendarScreen'
import VibrationScreen from './Screens/VibrationScreen'
import CalendarScreen from './Screens/CalendarScreen'
import CalendarScreen from './Screens/CalendarScreen'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen}  />
        <Drawer.Screen name="Calendario" component={CalendarScreen} />
        <Drawer.Screen name="Vibracion" component={VibrationScreen} />
        <Drawer.Screen name="Calendario" component={CalendarScreen} />
        <Drawer.Screen name="Calendario" component={CalendarScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}