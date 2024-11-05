import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

type RootDrawerParamList = {
  EventDetails: { title: string; date: string; location: string; description: string };
};

type EventDetailsRouteProp = RouteProp<RootDrawerParamList, 'EventDetails'>;

export default function EventDetails() {
  const route = useRoute<EventDetailsRouteProp>();
  const { title, date, location, description } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.label}>Data: {date}</Text>
      <Text style={styles.label}>Local: {location}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f9fc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
});
