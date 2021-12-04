import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import {Accuracy} from "expo-location";
import {useState, useEffect} from "react";


function App() {

    //Alle use-state variabler instansieres
    const [hasLocationPermission, setlocationPermission] = useState(false)
    const [currentLocation, setCurrentLocation] = useState(null)
    const [userMarkerCoordinates, setUserMarkerCoordinates] = useState([])
    const [selectedCoordinate, setSelectedCoordinate] = useState(null)
    const [selectedAddress, setSelectedAddress] = useState(null)

    /*
    * Her udnyttes prædefineret asynkron metode requestForegroundPermissionAsync med getLocationPermission.
    * Dette aktiverer en forespørgsel om benyttelse af den benyttede enheds position.
    */
    const getLocationPermission = async () => {
        await Location.requestForegroundPermissionsAsync().then((item)=>{
            setlocationPermission(item.granted)
        } );

    };

    // I useEffect kaldes getlocationPermission, der sikrer at enheden forespørger tilladelse
    // så snart appen kører
    useEffect (() => {
        const response = getLocationPermission()
    });

    /*
    * Her benyttes igen et prædefineret asynkront kald ifm. getCurrentPositionAsync. Dette sker med metoden updateLocation.
    * Enhedens aktuelle position bliver lokaliseret.
    * Argumentet Accuracy.Balanced angiver den nøjagtighed vi ønsker skal bruges til at angive positionen.
      */
    const updateLocation = async () => {
        await Location.getCurrentPositionAsync({accuracy: Accuracy.Balanced}).then((item)=>{
            setCurrentLocation(item.coords)
        } );
    };
    /*
    * handleLongPress henter koordinatsæt. Værdien gemmes i en variabel som tilføjes til et array af koordinater.
    */
    const handleLongPress = event => {
        const coordinate = event.nativeEvent.coordinate
        setUserMarkerCoordinates((oldArray) => [...oldArray, coordinate])
    };

    /*
  * Metoden handleSelectMarker tager en koordinat med som argument. Kordinaten bruges
  * til at sætte værdien af selectedCoordinat-variablen
  * Dernæst aktiveres et asynkront kald, i form af den prædefinerede metode, reverseGeocodeAsync.
  * reverseGeocodeAsync omsætter koordinatsættet til en række data, herunder område- og adresse data.
  * selectedAdress sættes til at være resultatet af det asynkrone kald
  */
    const handleSelectMarker = async coordinate =>{
        setSelectedCoordinate(coordinate)
        await Location.reverseGeocodeAsync(coordinate).then((data) => {
                setSelectedAddress(data)
            }
        )
    };


    //Metoden closeInfoBox nulstiller værdienne fro selectedAddress og selectedCoordinate
    const closeInfoBox = () =>
        setSelectedCoordinate(null) && setSelectedAddress(null)

    // RenderCurrentLocation tager props med som argument og tjekker om, der er givet adgang til enhedens lokationsdata
    // Er der ikke givet adgang returneres der en tekstkomponent med instruktioner til brugeren
    //Er der givet tilladelse og currenLocation ikke har en værdi, vil der fremvises en knap komponent
    //Er der givet tilladelse go currentlokation har en værdi, vil lokationsdata blive udskrvet i en infoboks
    const RenderCurrentLocation = (props) => {
        if (props.hasLocationPermission === null) {
            return null;
        }
        if (props.hasLocationPermission === false) {
            return <Text>No location access. Go to settings to change</Text>;
        }
        return (
            <View>
                <Button style title="update location" onPress={updateLocation} />
                {currentLocation && (
                    <Text>
                        {`lat: ${currentLocation.latitude},\nLong:${
                            currentLocation.longitude
                        }\nacc: ${currentLocation.accuracy}`}
                    </Text>
                )}
            </View>
        );
    };

// Til sidst benyttes SafeAreaView med det formål at sikre, at indhold ikke overskrider enhedens grænser.
    /*
    * Efterfølgende kaldes RenderCurrenokation view
    * Mapview fremviser et kort, der viser enhedens lokation
    * Dernæst aktiveres handleLongPress igennem metoden onLongPress
    * Der vises tre markører i Mapview ud fra et vilkårligt koordinatsæt. Hver markør får efterfølgende en titel og en beskrivelse.
    * For hver af markørerne vil metoden handleSelectMarker blive aktiveret ved onPress,
    * hvorved selectedCoordinate og selectedAddres får en værdi og der udskrives data om den vaælgte markør
    *
    */
    {
        return (
            <SafeAreaView style={styles.container}>
                <RenderCurrentLocation props={{hasLocationPermission: hasLocationPermission, currentLocation: currentLocation}} />
                <MapView
                    provider="google"
                    style={styles.map}
                    showsUserLocation
                    onLongPress={handleLongPress}>
                    <Marker
                        coordinate={{ latitude: 55.676195, longitude: 12.569419 }}
                        title="Rådhuspladsen"
                        description="See the very heart of Copenhagen, which acts as the main gathering point and houses the municipality of Copenhagen"
                    />
                    <Marker
                        coordinate={{ latitude: 55.673035, longitude: 12.568756 }}
                        title="Tivoli"
                        description="Explore the adventerous parts of yourself by visiting Tivoli, the main theme park in Copenhagen"
                    />
                    <Marker
                        coordinate={{ latitude: 55.674082, longitude: 12.598108 }}
                        title="Christiania"
                        description="See the old town of Christiania, which houses some of the most authentic buildings in the area of Copenhagen"
                    />
                    {userMarkerCoordinates.map((coordinate, index) => (
                        <Marker
                            coordinate={coordinate}
                            key={index.toString()}
                            onPress={() => handleSelectMarker(coordinate)}
                        />
                    ))}
                </MapView>
                {selectedCoordinate && selectedAddress && (
                    <View style={styles.infoBox}>
                        <Text style={styles.infoText}>
                            {selectedCoordinate.latitude}, {selectedCoordinate.longitude}
                        </Text>
                        <Text style={styles.infoText}>
                            name: {selectedAddress[0].name}  region: {selectedAddress[0].region}
                        </Text>
                        <Button title="close" onPress={closeInfoBox} />
                    </View>
                )}
            </SafeAreaView>
        );
    }
}


//Lokal som skal bruges i app.js
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    map: { flex: 1 },
    infoBox: {
        height: 200,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    infoText: {
        fontSize: 15,
    },
});
export default App
