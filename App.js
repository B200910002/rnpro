// In App.js in a new project

import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//lab 7
import Lab7_1 from './src/labs/lab7/lab7-1';
import Lab7_2 from './src/labs/lab7/lab7-2';
import Lab7_3 from './src/labs/lab7/lab7-3';

//lab 8
import Lab8_1 from './src/labs/lab8/lab8-1';
import Lab8_2 from './src/labs/lab8/lab8-2';
import Lab8_3 from './src/labs/lab8/lab8-3';
import Lab8_4 from './src/labs/lab8/lab8-4';

//lab9
import Lab9_1 from './src/labs/lab9/Lab9_1';
import Lab9_2 from './src/labs/lab9/Lab9_2';
import Lab9_3 from './src/labs/lab9/Lab9_3';
import Lab9_4 from './src/labs/lab9/Lab9_4';

//lab10
import Lab10_1 from './src/labs/lab10/Lab10_1';
import Lab10_2 from './src/labs/lab10/Lab10_2';
import Lab10_3 from './src/labs/lab10/Lab10_3';
import Lab10_4 from './src/labs/lab10/Lab10_4';
import Lab10_5 from './src/labs/lab10/Lab10_5';
import Lab10_6 from './src/labs/lab10/Lab10_6';

//lab11
// import Lab11_1 from './src/labs/lab11/Lab11_1';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="Go to Lab7" onPress={() => navigation.navigate('Lab7')} />
      <Button title="Go to Lab8" onPress={() => navigation.navigate('Lab8')} />
      <Button title="Go to Lab9" onPress={() => navigation.navigate('Lab9')} />
      <Button
        title="Go to Lab10"
        onPress={() => navigation.navigate('Lab10')}
      />
      <Button
        title="Go to Lab11"
        onPress={() => navigation.navigate('Lab11')}
      />
    </View>
  );
}

function Lab7({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Lab7 Screen</Text>
      <Button
        title="Go to Lab7_1"
        onPress={() => navigation.navigate('Lab7_1')}
      />
      <Button
        title="Go to Lab7_2"
        onPress={() => navigation.navigate('Lab7_2')}
      />
      <Button
        title="Go to Lab7_3"
        onPress={() => navigation.navigate('Lab7_3')}
      />
    </View>
  );
}

function Lab8({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Lab8 Screen</Text>
      <Button
        title="Go to Lab8_1"
        onPress={() => navigation.navigate('Lab8_1')}
      />
      <Button
        title="Go to Lab8_2"
        onPress={() => navigation.navigate('Lab8_2')}
      />
      <Button
        title="Go to Lab8_3"
        onPress={() => navigation.navigate('Lab8_3')}
      />
      <Button
        title="Go to Lab8_4"
        onPress={() => navigation.navigate('Lab8_4')}
      />
    </View>
  );
}

function Lab9({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Lab9 Screen</Text>
      <Button
        title="Go to Lab9_1"
        onPress={() => navigation.navigate('Lab9_1')}
      />
      <Button
        title="Go to Lab9_2"
        onPress={() => navigation.navigate('Lab9_2')}
      />
      <Button
        title="Go to Lab9_3"
        onPress={() => navigation.navigate('Lab9_3')}
      />
      <Button
        title="Go to Lab9_4"
        onPress={() => navigation.navigate('Lab9_4')}
      />
    </View>
  );
}

function Lab10({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Lab8 Screen</Text>
      <Button
        title="Go to Lab10_1"
        onPress={() => navigation.navigate('Lab10_1')}
      />
      <Button
        title="Go to Lab10_2"
        onPress={() => navigation.navigate('Lab10_2')}
      />
      <Button
        title="Go to Lab10_3"
        onPress={() => navigation.navigate('Lab10_3')}
      />
      <Button
        title="Go to Lab10_4"
        onPress={() => navigation.navigate('Lab10_4')}
      />
      <Button
        title="Go to Lab10_5"
        onPress={() => navigation.navigate('Lab10_5')}
      />
      <Button
        title="Go to Lab10_6"
        onPress={() => navigation.navigate('Lab10_6')}
      />
    </View>
  );
}

function Lab11({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Lab11 Screen</Text>
      <Button
        title="Go to Lab11_1"
        onPress={() => navigation.navigate('Lab11_1')}
      />
      <Button
        title="Go to Lab11_2"
        onPress={() => navigation.navigate('Lab11_2')}
      />
      <Button
        title="Go to Lab11_3"
        onPress={() => navigation.navigate('Lab11_3')}
      />
      <Button
        title="Go to Lab11_4"
        onPress={() => navigation.navigate('Lab11_4')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Lab7" component={Lab7} />
        <Stack.Screen name="Lab7_1" component={Lab7_1} />
        <Stack.Screen name="Lab7_2" component={Lab7_2} />
        <Stack.Screen name="Lab7_3" component={Lab7_3} />
        <Stack.Screen name="Lab8" component={Lab8} />
        <Stack.Screen name="Lab8_1" component={Lab8_1} />
        <Stack.Screen name="Lab8_2" component={Lab8_2} />
        <Stack.Screen name="Lab8_3" component={Lab8_3} />
        <Stack.Screen name="Lab8_4" component={Lab8_4} />
        <Stack.Screen name="Lab9" component={Lab9} />
        <Stack.Screen name="Lab9_1" component={Lab9_1} />
        <Stack.Screen name="Lab9_2" component={Lab9_2} />
        <Stack.Screen name="Lab9_3" component={Lab9_3} />
        <Stack.Screen name="Lab9_4" component={Lab9_4} />
        <Stack.Screen name="Lab10" component={Lab10} />
        <Stack.Screen name="Lab10_1" component={Lab10_1} />
        <Stack.Screen name="Lab10_2" component={Lab10_2} />
        <Stack.Screen name="Lab10_3" component={Lab10_3} />
        <Stack.Screen name="Lab10_4" component={Lab10_4} />
        <Stack.Screen name="Lab10_5" component={Lab10_5} />
        <Stack.Screen name="Lab10_6" component={Lab10_6} />
        <Stack.Screen name="Lab11" component={Lab11} />
        {/* <Stack.Screen name='Lab11_1' component={Lab11_1} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
