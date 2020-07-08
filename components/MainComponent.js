import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { View , Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


class Main extends Component {
        
    render() {
        return (
            
                <NavigationContainer>
                    <Stack.Navigator
                    initialRouteName = {"Menu"}
                    screenOptions =  {{
                        
                        headerStyle: {
                            backgroundColor: "#512DA8"
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            color: "#fff"            
                        }
                    }}>
                        <Stack.Screen name="Menu" component={Menu}/>
                        <Stack.Screen name="Dishdetail" options={{title:'Dish Detail'}} component={Dishdetail}/>
                    </Stack.Navigator>
                </NavigationContainer>
            
        );
    }
}
  
export default Main;