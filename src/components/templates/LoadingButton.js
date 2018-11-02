import React, { Component } from 'react';
import {
  Text,View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import {colors} from '../../utils/constants';

export default class LoadingButton extends Component<{}> {
  static propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
    loadingColor: PropTypes.string,
    buttonStyle: PropTypes.oneOfType(
      [
        PropTypes.object,
        PropTypes.array
      ]),
    leftSource: PropTypes.object,
    rightSource: PropTypes.object,
    leftImageStyle: PropTypes.oneOfType(
      [
        PropTypes.object,
        PropTypes.array
      ]),
    rightImageStyle: PropTypes.oneOfType(
      [
        PropTypes.object,
        PropTypes.array
      ]),
    titleStyle: PropTypes.oneOfType(
    [
      PropTypes.object,
      PropTypes.array
    ]),
  };

  state = {
      isLoading: false,
  };

  showLoading(isLoading) {
    if (isLoading) {
      this.setState({ isLoading: isLoading });
    } else {
      this.setState({ isLoading: isLoading });
    }
  }

  render() {
    return(
      <TouchableOpacity activeOpacity={1} onPress={!this.state.isLoading ? this.props.onPress : null} style={[styles.button, this.props.buttonStyle]} >
        {
          this.state.isLoading
          ?
          <ActivityIndicator size="small" color={this.props.loadingColor} />
          :
          <View style={styles.buttonView}>
            <View style={this.props.leftSource==null ? {width:30}:null}>
              <Image source={this.props.leftSource} style={[styles.image,this.props.leftImageStyle]}/>
            </View>
            <Text allowFontScaling={false} style={[styles.title, this.props.titleStyle]} >{this.props.title}</Text>
            <View style={this.props.rightSource==null ? {width:30}:null}>
              <Image source={this.props.rightSource} style={[styles.image,this.props.rightImageStyle]}/>
            </View>
          </View>
        }
      </TouchableOpacity>
    );
  }
}

const styles = {
  button: {
    height: 35,
    width: 50,
    backgroundColor: colors.GREEN,
    borderRadius: 20,
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 30,
    height: 30,
    marginHorizontal: 10
  }
};
