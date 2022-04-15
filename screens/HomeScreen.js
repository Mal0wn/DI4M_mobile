import { React } from 'react'; 
import { View , Text , StyleSheet } from 'react-native'
import UIButton from '../components/UIButton'

const HomeScreen = () => { 
console.log(UIButton)
	return ( 
		<View style={styles.container}>
			<UIButton size= 'small' buttonColor='blue' buttonValue='Se connecter'/>
			
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
console.log('UIButton ' + UIButton)
export default HomeScreen;

