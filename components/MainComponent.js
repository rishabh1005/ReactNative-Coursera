import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Dishdetail from './DishdetailComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MenuNavigator(){
    return (
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
    );    
}

function HomeNavigator(){
    return (
        <Stack.Navigator
            screenOptions =  {{    
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: "#fff"            
            }
        }}>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>

    );    
}

function AboutNavigator(){
    return (
        <Stack.Navigator
            screenOptions =  {{    
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: "#fff"            
            }
        }}>
            <Stack.Screen name="About" options={{title:'About Us'}} component={About}/>
        </Stack.Navigator>

    );    
}

function ContactNavigator(){
    return (
        <Stack.Navigator
            screenOptions =  {{    
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: "#fff"            
            }
        }}>
            <Stack.Screen name="Contact" options={{title:'Contact Us'}} component={Contact}/>
        </Stack.Navigator>

    );    
}

function MainNavigator(){
    return(
        <Drawer.Navigator initialRouteName="Home"
            drawerStyle = {{
                backgroundColor : "#D1C4E9"
            }}
        >
            <Drawer.Screen name="Home" component={HomeNavigator} />
            <Drawer.Screen name="About" options = {{title : 'About Us'}} component={AboutNavigator} />
            <Drawer.Screen name="Menu" component={MenuNavigator} />
            <Drawer.Screen name="Contact" options={{title:'Contact Us'}} component={ContactNavigator} />
        </Drawer.Navigator>
    );
}



class Main extends Component {
        
    render() {
        return (      
            <NavigationContainer>
                < MainNavigator />
            </NavigationContainer>
        );
    }
}
  
export default Main;