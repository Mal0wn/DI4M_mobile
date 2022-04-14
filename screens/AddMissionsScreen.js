import { React } from 'react'; 
import { View , Text , StyleSheet } from 'react-native'

const AddMissionsScreen = (props) => { 

	return ( 
		<View style={styles.container}>
			<Text> AddMissions Screen</Text>
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

export default AddMissionsScreen;

