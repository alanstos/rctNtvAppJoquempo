import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

import Topo from './src/components/Topo';
import Icone from './src/components/Icone';

export default class rctNtvAppJoquempo extends Component {

  constructor(props) {
    super(props);
    this.state = { escolhaPC : '', escolhaUsuario : '', resultado : ''};
  }

  geraNumeroAleatorio = (quantidade) => {
    var numAleatorio = Math.random();
    numAleatorio = numAleatorio * 3;
    numAleatorio = Math.floor(numAleatorio);  
    return numAleatorio;
  }

  novaEscolhaComputador = (valor) => {
      var opcoesPC = [];
      opcoesPC[0] = 'Pedra';
      opcoesPC[1] = 'Tesoura';
      opcoesPC[2] = 'Papel';

      return opcoesPC[valor];
  }

  resultadoJokenpo = (pc, usuario) => {

    if ( usuario == pc ){
        return 'Empate';
    }

    if (pc == 'Tesoura'){

        if (usuario == 'Pedra'){
          return 'Você ganhou';
        }

        if (usuario == 'Papel'){
          return 'Você perdeu';
        }

    }

    if (pc == 'Papel'){

        if (usuario == 'Pedra'){
          return 'Você perdeu';
        }

        if (usuario == 'Tesoura'){
          return 'Você ganhou';
        }

    }    
     
    if (pc == 'Pedra'){

        if (usuario == 'Papel'){
          return 'Você ganhou';
        }

        if (usuario == 'Tesoura'){
          return 'Você perdeu';
        }

    }   

    return 'Erro' ;

  }

  escolhaUsuario( escolha ) {

    var numAleatorio = this.geraNumeroAleatorio(3);

    var escolhaComputador = this.novaEscolhaComputador(numAleatorio);

    var result = this.resultadoJokenpo(escolhaComputador , escolha);

    this.setState( { escolhaUsuario : escolha, 
                      escolhaPC : escolhaComputador ,
                      resultado : result});
  }

  render() {
    
    return (
      <View>

        <Topo></Topo>

        <View style={styles.panelAcoes}>
          <View style={styles.btnAcao}>
            <Button title="Pedra" onPress={ () => {this.escolhaUsuario('Pedra')} }/>  
          </View> 

          <View style={styles.btnAcao}>
            <Button title="Papel" onPress={ () => {this.escolhaUsuario('Papel')} }/>  
          </View> 

          <View style={styles.btnAcao}>
            <Button title="Tesoura" onPress={ () => {this.escolhaUsuario('Tesoura')} }/>          
          </View> 
        </View>        

        <View style={ styles.panelResultado }>
          <Text style={styles.textoResultado }>{this.state.resultado}</Text>

          <Icone valor={this.state.escolhaPC} jogador="Computador" ></Icone>
          <Icone valor={this.state.escolhaUsuario} jogador="Usuario" ></Icone>
                  
        </View>        

      </View>
    );
  }
}

const styles = StyleSheet.create({

  panelAcoes: {
    flexDirection : 'row',
    justifyContent : 'space-between',
    marginTop : 15
  },
  btnAcao : {
    width :100
  },
  textoResultado : {
    fontSize : 22,
    color : '#F00',
    fontWeight : 'bold'
  },
  panelResultado : {
    marginTop : 10,
    alignItems : 'center'
  }


});

AppRegistry.registerComponent('rctNtvAppJoquempo', () => rctNtvAppJoquempo);
