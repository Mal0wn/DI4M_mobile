import { React } from 'react'; 
import { View , Text , StyleSheet } from 'react-native'

const MessagesScreen = (props) => { 

	return ( 
		<View style={styles.container}>
			<Text> Messages Screen</Text>
		</View>
	)

}

const styles = StyleSheet.create ( {
	container : {
		flex: 1 , 
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor : 'lightblue'
	}

})

export default MessagesScreen;

