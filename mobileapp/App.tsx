// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}:{navigation:any}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color:"black"}}>Home Screen</Text>
      <View style={{width:"100%",display:"flex",gap:4}}>

      <Button
        title="1"
        onPress={() => {
          navigation.navigate('Details',{
          buttonID:1
          })
      }}
        />
      <Button
        title="2"
        onPress={() => {
          navigation.navigate('Details',{
          buttonID:2
          })
      }}
        />
      <Button
        title="3"
        onPress={() => {
          navigation.navigate('Details',{
          buttonID:3
          })
      }}
        />
      
     
        </View>

    </View>
  );
}

function DetailsScreen({route,navigation}:{route:any,navigation:any}) {
  let {buttonID} = route.params
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color:"black"}}>Details Screen</Text>
      <Text style={{color:"black"}}>You pressed on button:{JSON.stringify(buttonID)}</Text>
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:"HomeScreen"}} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;