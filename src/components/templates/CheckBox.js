import React, { Component } from 'react';
import {
  View,StyleSheet,TouchableOpacity,Image
} from 'react-native';

export default class CheckBox extends Component<{}> {

  state= {
    checkboxStatus: false
  }

  getStatus()
  {
    return this.state.checkboxStatus;
  }

  render() {
    return(
      <View style={styles.mainView}>
      <TouchableOpacity activeOpacity={1} onPress={() => this.setState({checkboxStatus:!this.state.checkboxStatus})}>
          {
            this.state.checkboxStatus ?
              <Image source={require('../../assets/icons/checked.png')} style={{width:25,height:25}}/>
              :
              <Image source={require('../../assets/icons/unchecked.png')} style={{width:25,height:25}}/>
          }
        </TouchableOpacity>
        <View style={{marginLeft:12}}>
          {this.props.view}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex:1,
    flexDirection:'row',
    marginTop:10
  },
  linkText: {
    fontSize: 18.5,
    color: 'rgb(87,87,87)'
  },
});
