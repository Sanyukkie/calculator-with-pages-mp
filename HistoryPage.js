import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, TextInput } from 'react-native';


export default function HomeScreen({route, navigation}){

    const{ data } = route.params;
    return(
      <View style={styles.history}>
        <FlatList style={styles.list}
          data={data}
          renderItem={({ item }) =>
            <View style={styles.item}>
              <Text>{item.key}</Text>
            </View>
          }
        />
      </View>)
    };


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    history: {
        flexDirection: "row",
    }, 
    item: {
        alignItems: 'center',
    }
    });