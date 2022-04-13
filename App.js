import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaContext } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  console.log('Stack', Stack);

  return (
       <NavigationContainer>{
       <View>
       <Text>Test</Text>
       </View>
       
       }</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
