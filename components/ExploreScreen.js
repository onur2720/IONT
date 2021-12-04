
import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import {TouchableOpacity } from 'react-native-gesture-handler';

/*
const ExploreScreen2 = ({navigation}) => {
  return (
    <View style = {styles.container}>
           <View>
       <Text style = {styles.TextStyling}>Welcome to TouScan</Text>
      <TouchableOpacity
       onPress={() => navigation.navigate("CamComp")}
       style = {styles.buttonDesign}>

       <Text style = {styles.TextinButton}>Go to QR-Scan</Text>
       </TouchableOpacity>

      </View>
    </View>
    
  )
}
*/


const ExploreScreen = () => {
  return (
      <View style={styles.container}>
        <Text style={styles.headline}>Explore monuments near you</Text>
        <Text style={styles.monuments}>The Little Mermaid</Text>
        <Button
            title="More information"
            type= 'outline'
            color="navy"
        />
        <Text style={styles.monuments}>Zinkglobal</Text>
        <Button
            title="More information"
            type= 'outline'
            color="navy"
        />
        <Text style={styles.monuments}>Forgotten Giants</Text>
        <Button
            title="More information"
            type= 'outline'
            color="navy"
        />
      </View>
  )
};

//Her styler vi resterende av viewet
const styles = StyleSheet.create({
  container: {
    borderColor: "#B5EAD7",
    borderWidth: 5,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  headline: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 20,
  },
  monuments: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 15,
    fontSize: 18,
  }
})

//Her eksporterer vi funksjonen så vi kan bruke den andre steder i applikasjonen vår
export default ExploreScreen;
