// CalendarScreen.js
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, Platform } from 'react-native';
import { Calendar } from 'expo-calendar';

const CalendarScreen = () => {
  const [calendarPermission, setCalendarPermission] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      setCalendarPermission(status === 'granted');
    })();
  }, []);

  const createCalendar = async () => {
    if (!calendarPermission) {
      alert('Permission not granted to access calendar');
      return;
    }

    const defaultCalendarSource =
      Platform.OS === 'ios'
        ? await Calendar.getDefaultCalendarAsync(Calendar.EntityTypes.EVENT)
        : { isLocalAccount: true, name: 'Expo Calendar' };

    const newCalendarID = await Calendar.createCalendarAsync({
      title: 'Expo Calendar',
      color: 'blue',
      entityType: Calendar.EntityTypes.EVENT,
      sourceId: defaultCalendarSource.id,
      source: defaultCalendarSource,
      name: 'internalCalendarName',
      ownerAccount: 'personal',
      accessLevel: Calendar.CalendarAccessLevel.OWNER,
    });

    alert(`New Calendar ID: ${newCalendarID}`);
  };

  return (
    <View style={styles.container}>
      <Button title="Create Calendar" onPress={createCalendar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CalendarScreen;
