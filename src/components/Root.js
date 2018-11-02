import React, { Component } from 'react';
import {
  View,
  AsyncStorage,
} from 'react-native';

export default class Root extends Component<{}> {

async componentDidMount() {
  console.log('Root component mounted');
  try {
    const value = await AsyncStorage.getItem('isLoggedIn');
    if (value !== null) {
      if (value === '1')
      {
        this.props.navigation.navigate('App');
      }
      else
      {
          this.props.navigation.navigate('Auth');
      }
    } else
    {
      this.props.navigation.navigate('Auth');
    }
  } catch (error) {
    console.log(error);
  }
}

  render() {
    return(
      <View/>
    );
  }
}
