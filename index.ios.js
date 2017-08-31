/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

import MeetupList from './src/components/MeetupList';

import AppNavigation from './AppNavigation';
import Auth from './src/components/Auth';

export default class Meetups extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: {}
    }
  }

  componentWillMount(){
    setTimeout(() =>{
      this.setState({
        user : {email: 'yo@email.io'}
      });
    }, 2000);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MeetupList />
      </View>
    );
  }
}

AppRegistry.registerComponent('Meetups', () => Meetups);
