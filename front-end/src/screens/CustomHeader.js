import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

function CustomHeader() {
    return (
      <View style={styles.headerContainer}>
        <Image source={require('../../assets/logocommunity.png')} style={styles.logo} />
        <Text style={styles.title}>Community</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 40,
      height: 40,
      marginRight: 8,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
    },
  });
  

  export default CustomHeader;