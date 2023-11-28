import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import * as Notifications from 'expo-notifications';

const NotificationScreen = () => {
  const handleNotification = async () => {
    try {
      // Pide permiso al usuario para enviar notificaciones
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('La aplicación no tiene permisos para enviar notificaciones');
        return;
      }

      // Crea y envía una notificación push
      await Notifications.scheduleNotificationAsync({
        content: {
          title: '¡Hola!',
          body: 'Esta es una notificación de prueba.',
        },
        trigger: null, // Envía la notificación inmediatamente
      });
    } catch (error) {
      console.error('Error al enviar la notificación:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Enviar Notificación" onPress={handleNotification} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NotificationScreen;
