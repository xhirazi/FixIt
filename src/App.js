import React, { Component } from 'react';
import {
  View,
  StatusBar,
} from 'react-native';
import { RootSwitch } from './utils/router';

type Props = {};

export default class App extends Component<Props> {

  render() {
    return (
      <View style={{flex: 1}}>
      <StatusBar
         hidden={true}
       />
        <RootSwitch />
      </View>
    );
  }
}
