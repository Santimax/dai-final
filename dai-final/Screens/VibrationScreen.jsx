import React from 'react';
import { View, Button, Vibration } from 'react-native';

const VibrationScreen = () => {
  const handleVibrate = () => {
    Vibration.vibrate([5000]);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Vibrar por 5 segundos" onPress={handleVibrate} />
    </View>
  );
};

export default VibrationScreen;
