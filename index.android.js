import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class MeuComponente extends Component {
    render() {
        return (
          <View>
            <Text>{this.props.value}</Text>
          </View>
        );
    }
}

export default class rctNtvAppJoquempo extends Component {

  constructor(props) {
    super(props);
    
    this.state = { texto : 'Texto padrão! '};
  }


  alterarTexto() {
    
    this.setState( { texto : 'Mudamos o texto...' });
  }

  render() {
    
    return (
      <View>
        <MeuComponente value={ this.state.texto } ></MeuComponente>
        <Button title="Alterar texto" onPress={ () => {this.alterarTexto()} }/>  
      </View>
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
