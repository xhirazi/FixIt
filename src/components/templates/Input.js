import React, { Component } from 'react';
import {
  Text,View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

export default class Input extends Component<{}> {
  static propTypes = {
    returnKeyType: PropTypes.string,
    editable: PropTypes.bool,
    showTextStyle: PropTypes.oneOfType(
      [
        PropTypes.object,
        PropTypes.array
      ]),
    showTouchStyle: PropTypes.oneOfType(
      [
        PropTypes.object,
        PropTypes.array
      ]),
    mainView: PropTypes.oneOfType(
      [
        PropTypes.object,
        PropTypes.array
      ]),
    textInputStyle: PropTypes.oneOfType(
      [
        PropTypes.object,
        PropTypes.array
      ]),
  };

  state = {
    value: '',
    showPassword: true,
    showText: 'show',
  };

  showNow()
  {
    this.state.showText=='show' ? this.setState({showText:'hide',showPassword:false}) : this.setState({showText:'show',showPassword:true});
  }
  getRef()
  {
    return this.input;
  }

  getValue()
  {
    return this.state.value;
  }
  render() {
    return(
      <View style={[styles.passwordView,this.props.mainView]}>
        <TextInput allowFontScaling={false}
        style={[styles.passwordInput,this.props.textInputStyle]}
        onChangeText={(value) => this.setState({value})}
        returnKeyType={this.props.onSubmitEditing!=null 'next':'done'}
        secureTextEntry={this.props.secureTextEntry || this.state.showPassword}
        underlineColorAndroid={'transparent'}
        value={this.state.value}
        onSubmitEditing={this.props.onSubmitEditing || this.input.blur()}
        editable = {this.props.editable || true}
        ref={(c) => (this.input = c)}
        {...this.props}
        />
        <TouchableOpacity style={[styles.showTouch,this.props.showTouchStyle,this.props.secureTextEntry==null ? {display:'none'}]} onPress={() => {this.showNow();}}>
          <Text allowFontScaling={false} style={[styles.showText,this.props.showTextStyle]}> {this.state.showText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {

  passwordView: {
    borderColor: 'rgb(162,162,162)',
    borderWidth: 1,
    flexDirection: 'row',
  },
  passwordInput: {
    height: 40,
    paddingVertical:0,
    fontSize: 19,
    paddingLeft: 10,
    flex: .95
  },
  showText: {
    fontSize:16,
    color:'black'
  },
  showTouch: {
    justifyContent: 'center',
  },
};
