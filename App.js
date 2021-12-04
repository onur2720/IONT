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

/*
function App() {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="ExploreScreen" screenOptions={{headerShown: false}}>
            <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
            <Stack.Screen name="CamComp" component={ScanScreen} />
          </Stack.Navigator>

        </NavigationContainer>
      )

}

 */

//Funksjonen som router i mellom de forskejllige screens når vi trykker på de ulike ikonene
function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    if (route.name === 'Explore') {

                        return (
                            <Ionicons
                                name='md-globe-outline'
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
                                name='md-list-outline'
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
                <Tab.Screen name="Login" children={()=><LoginForm/>} />
                <Tab.Screen name="Map" children={()=><MapScreen/>} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}


export default App