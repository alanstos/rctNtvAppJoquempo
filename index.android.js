import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class MeuComponente extends Component {
    render() {
        return (
          <View>
            <Text>{this.props.valor}</Text>
            <Text>{this.props.text}</Text>
          </View>
        );
    }
}

export default class rctNtvAppJoquempo extends Component {
  render() {
    return (
      <MeuComponente valor="numero1" text="meu componente"></MeuComponente>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('rctNtvAppJoquempo', () => rctNtvAppJoquempo);
