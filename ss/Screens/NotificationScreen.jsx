import React from 'react';
import { View, Button } from 'react-native';
import * as Notifications from 'expo-notifications';

const NotificationScreen = () =>{
  const handleNotification = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Hola',
        body: '¡Hola desde la notificación push!',
      },
      trigger: null,
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Enviar Notificación" onPress={handleNotification} />
    </View>
  );
}

export default NotificationScreen