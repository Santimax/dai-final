import React from 'react';
import { View, StyleSheet, Button, Vibration } from 'react-native';

const VibrationScreen = () => {
  const vibrateForTwoSeconds = () => {
    // Duración de la vibración en milisegundos
    const duration = 2000;

    // Hacer que el dispositivo vibre
    Vibration.vibrate(duration);
  };

  return (
    <View style={styles.container}>
      <Button title="Vibrar por 2 segundos" onPress={vibrateForTwoSeconds} />
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

export default VibrationScreen;
