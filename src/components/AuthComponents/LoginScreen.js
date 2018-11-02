import React, { Component } from 'react';
import {
  View,Text,StyleSheet
} from 'react-native';
import DropdownMessageAlert from '../templates/DropdownMessageAlert';
import services from '../../utils/services';

export default class LoginScreen extends Component<{}> {

  render() {
    return(
      <View style={{flex:1}}>
        <Text> Login Screen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
