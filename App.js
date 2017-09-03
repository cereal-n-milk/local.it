import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Discover from './components/Discover';
import Toolbar from './components/toolbar.js'


export default class LocalIt extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
      }}>
        <Discover />
        <Toolbar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  biggray: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 30,

  },
  bigyellow: {
    color: 'red',
    fontSize: 30
  }
})
