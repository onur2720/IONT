import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScanScreen from "./components/ScanScreen";
import ExploreScreen from "./components/ExploreScreen"
import HelpScreen from "./components/HelpScreen";
import MapScreen from "./components/MapScreen";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from "./assets/colors/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

//Funktion som router mellem de forskellige screen når vi trykke på de forskellige ikoner//
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

                    }
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
                <Tab.Screen name="Map" children={()=><MapScreen/>} />
                <Tab.Screen name="Help" children={()=><HelpScreen/>} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}


export default App
