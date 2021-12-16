import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScanScreen from "./components/ScanScreen";
import ExploreScreen from "./components/ExploreScreen"
import HelpScreen from "./components/HelpScreen";
import MapScreen from "./components/MapScreen";
import LoginScreen from "./components/LoginScreen";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from "./assets/colors/colors";
import DetailsScreen from "./components/DetailsScreen";


//Funksjonen som router i mellom de forskejllige screens når vi trykker på de ulike ikonene
function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route}) => ({
                tabBarIcon: ({ color, size }) => {
                    if (route.name === 'Explore') {

                        return (
                            <Ionicons
                                name='md-list-outline'
                                color={color}
                                size={size}
                            />
                        );

                    } else if (route.name === 'Scan it') {
                        return (
                            <Ionicons
                                name='md-camera-outline'
                                color={color}
                                size={size}
                            />
                        ); }

                    else if (route.name === 'Help') {
                            return (
                                <Ionicons
                                    name='md-help-outline'
                                    color={color}
                                    size={size}
                                />
                            );

                    }else if (route.name === 'Login') {
                        return (
                            <Ionicons
                                name='md-log-in-outline'
                                color={color}
                                size={size}
                            />
                        ) }
                    else
                    {
                        return (
                            <Ionicons
                                name='md-globe-outline'
                                size={size}
                                color={color}
                            />
                        );
                    }
                },
            })}
                           tabBarOptions={{
                               activeTintColor: 'black',
                               inactiveTintColor: 'gray',
                           }}
            >
                <Tab.Screen name="Explore" children={()=><ExploreScreen/>} />
                <Tab.Screen name="Scan it" children={()=><ScanScreen/>} />
                <Tab.Screen name="Help" children={()=><HelpScreen/>} />
                <Tab.Screen name="Login" children={()=><LoginScreen/>} />
                <Tab.Screen name="Map" children={()=><MapScreen/>} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}


export default App
