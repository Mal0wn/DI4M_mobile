import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function UIButton(props) {
  const { buttonColor, buttonValue, size } = props;

function button(buttonColor) {
		
		if (buttonColor === 'red') {
			console.log('bt red')
			return styles.buttonRed;
		} else {
			console.log("bt blue")
			return styles.buttonBlue;
		}
	}



  return (
    <Pressable style={[button(buttonColor) , styles[size]]} >
      <Text style={styles.text}>{buttonValue}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonRed : {
		backgroundColor : '#7D1D3F',
		width: '100%',
		borderRadius : 60,
		padding:10
		},
		buttonBlue : {
		backgroundColor : '#5C9EAD',
		width: '100%',
		borderRadius : 60,
		padding:10
		},
		text : {
			size : 12,
			color : 'white'
		},
		small : {
			width : 24
		},
		medium : {
			width : 50
		},
		large : {
			width : 70
		},
});


/**
Pour mettre en place un button dans un screen : 

buttonValue : string 
size : string ( small || medium || large)
buttonColor : string ( blue || red)

 */
