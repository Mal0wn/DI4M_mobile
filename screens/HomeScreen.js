import { React } from 'react'; 
import { View , Text , StyleSheet } from 'react-native'
import UIButton from '../components/UIButton';
import RatingStar from '../components/UIRate';
import UIRate from '../components/UIRate';

const HomeScreen = () => { 
console.log(UIRate)
	return ( 
		<View style={styles.container}>
			<RatingStar/>
			
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

export default HomeScreen;

