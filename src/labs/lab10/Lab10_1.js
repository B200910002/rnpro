import React, {Component} from 'react';
import {Button} from 'react-native';
export default class ButtonBasics extends Component {
  render() {
    return (
      <Button
        onPress={() => {
          alert('You tapped the button!');
        }}
        title="Press Me"
      />
    );
  }
}
