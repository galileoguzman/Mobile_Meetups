/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

import MeetupList from './src/components/MeetupList';

export default class Meetups extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MeetupList />
      </View>
    );
  }
}

AppRegistry.registerComponent('Meetups', () => Meetups);
