import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () =>{
    const navigationHook = useNavigation();    
    const handleClick = () => {    
        console.log('boton');
        navigationHook.navigate('Eventos')  
    };
    const navigate = useNavigation();    
    const Clicks = () => {    
        console.log('boton');
        navigationHook.navigate('Vibracion')  
    };
    const navigation = useNavigation();    
    const Click = () => {    
        console.log('boton');
        navigationHook.navigate('Calendario')  
    };
    const navigator = useNavigation();    
    const handleClicks = () => {    
        console.log('boton');
        navigationHook.navigate('Calendario')  
    };
    return (
        <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>Bienvenidos a nuestra aplicacion</Text>
        <Text>  </Text>
        <Button title="Eventos" onPress={handleClick}/>
        <Text> </Text>
        <Button title="Calendario" onPress={Click}/>
        <Text> </Text>
        <Button title="Vibracion" onPress={Clicks}/>
        <Text> </Text>
        <Button title="Calendario" onPress={handleClicks}/>
        </View>
    );
}
export default HomeScreen