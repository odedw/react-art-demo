/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React from 'react';
import { StyleSheet, AppRegistry, Text, View } from 'react-native';
import VectorWidget from './VectorWidget';

const react_art_demo = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
          <VectorWidget style={styles.vector}/>
      </View>
    );
  }
});
var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  vector: {
    width: 100,
    height: 100
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    marginTop: 100
  },
});
AppRegistry.registerComponent('react_art_demo', () => react_art_demo);