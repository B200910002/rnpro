import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
export default class App extends React.Component {
  state = {
    firstState:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod temp' +
      'or incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ex' +
      'ercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolo' +
      'r in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excep' +
      'teur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    secondState: 'This state is updated',
    check: false,
  };
  updateState = () => {
    this.setState({check: this.state.check == false ? true : false});
  };
  render() {
    return (
      <View>
        <Text onPress={this.updateState}>
          (
          {this.state.check == false
            ? this.state.firstState
            : this.state.secondState}
          )
        </Text>
      </View>
    );
  }
}
