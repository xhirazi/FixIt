import React, { Component } from 'react';
import DropdownAlert from 'react-native-dropdownalert';
import { MAIN_CUSTOM_COLOR } from '../../utils/constants';

export default class DropdownMessageAlert extends Component<{}> {
  render() {
    return (
      <DropdownAlert
        ref={(ref) => this.dropdown = ref}
        updateStatusBar={false}
        containerStyle={{
          backgroundColor: MAIN_CUSTOM_COLOR,
        }}
        messageNumOfLines={10}
        closeInterval={8000}
      />
    );
  }

  itemAction(item) {
    this.dropdown.alertWithType(item.type, item.title, item.message);
  }

}
