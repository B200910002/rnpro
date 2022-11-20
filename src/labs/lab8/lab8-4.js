import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>11*11</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>121</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={styles.row}>
              <Button title="0" />
              <Button title="0" />
              <Button title="0" />
            </View>
            <View style={styles.row}>
              <Button title="0" />
              <Button title="0" />
              <Button title="0" />
            </View>
            <View style={styles.row}>
              <Button title="0" />
              <Button title="0" />
              <Button title="0" />
            </View>
            <View style={styles.row}>
              <Button title="0" />
              <Button title="0" />
              <Button title="0" />
            </View>
          </View>
          <View style={styles.operations}>
            <View style={styles.btnRow}>
              <Button title="+" />
            </View>
            <View style={styles.btnRow}>
              <Button title="-" />
            </View>
            <View style={styles.btnRow}>
              <Button title="*" />
            </View>
            <View style={styles.btnRow}>
              <Button title="/" />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btnRow: {
    flex: 1,
    justifyContent: 'space-around',
  },
  result: {
    flex: 2,
    backgroundColor: 'red',
  },
  calculation: {
    flex: 2,
    backgroundColor: 'green',
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
    backgroundColor: 'yellow',
  },
  operations: {
    flex: 1,
    backgroundColor: 'black',
  },
  resultText:{
    fontSize: 36,
    alignSelf:'flex-end',
  },
  calculationText:{
    fontSize:36,
    alignSelf:'flex-end'
  }
});
