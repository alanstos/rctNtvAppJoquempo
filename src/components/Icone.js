import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

class Icone extends Component {

	render(){

		if ( this.props.valor == 'Pedra') {
			return (
		        <View style={ styles.panelResultado }>

		          <Text>{ this.props.jogador }: {this.props.valor}</Text>
		          <Image source={ require('../../imgs/pedra.png')}/>
		        </View>
			);
		}

		if ( this.props.valor == 'Papel') {
			return (
		        <View style={ styles.panelResultado }>

		          <Text>{ this.props.jogador }: {this.props.valor}</Text>
		          <Image source={ require('../../imgs/papel.png')}/>
		        </View>
			);
		}	

		if ( this.props.valor == 'Tesoura') {
			return (
		        <View style={ styles.panelResultado }>

		          <Text>{ this.props.jogador }: {this.props.valor}</Text>
		          <Image source={ require('../../imgs/tesoura.png')}/>
		        </View>
			);
		}					

		return false;
		
	}

}

const styles = StyleSheet.create({
  panelResultado : {
    alignItems : 'center'
  }
})

export default Icone;