import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Header() {
  return (
      <View style={styles.header}>
        <View style={styles.actionBar}>
          <Text style={styles.title}>My Todos</Text>
          <AntDesign style={styles.logo} name="tagso" size={27} color="white" />
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 63,
    paddingTop: 18,
    backgroundColor: 'coral',
  },
  title: {
    textAlign: "center",
    color: '#fff',
    fontSize: 20,
    fontWeight: "bold",
  },
  actionBar: {
    flexDirection: 'row',
    marginLeft: 150,
    marginTop: 5,
  },
  logo: {
    marginLeft: 11,
  }
});