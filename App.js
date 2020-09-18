import 'react-native-gesture-handler';
import React from 'react';

import {View, Text, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// App class
class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#00CC00',
            inactiveTintColor: '#CCCCCC',
          }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Options" component={Options} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

// Home Class
class Home extends React.Component {
  state = {navigator: null};

  constructor(props) {
    super(props);
    this.state = {navigator: props.navigation};
  }

  render() {
    const {navigator} = this.state;
    return (
      <View>
        <Text>Bienvenido/a esta es la clase Home!</Text>
        <Button
          title="Ir a opciones"
          onPress={() => navigator.navigate('Options')} // Se pueden agregar propiedades con , {prop1: 1, prop2: 'Hola'}
        />
      </View>
    );
  }
}

// Options Class
class Options extends React.Component {
  state = {navigator: null};

  constructor(props) {
    super(props);
    this.state = {navigator: props.navigation};
  }

  render() {
    const {navigator} = this.state;
    return (
      <View>
        <Text>Pantalla de opciones. Para volver presionar botón volver</Text>
        <Button title="Volver" onPress={() => navigator.navigate('Home')} />
      </View>
    );
  }
}

export default App;
