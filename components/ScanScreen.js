import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import {BarCodeScanner} from "expo-barcode-scanner";
import colors from "../assets/colors/colors";

// Her laver jeg min komponent
function ScanScreen() {
  // jeg har 3 usestates, som skal har default values.
  // Adgang vil ændres, når man har adgang og Scanned QR-koden er scannet
  const [harAdgang, setHarAdgang] = useState(null);
  const [erScannet, setErScanned] = useState(false);
  const [text, setText] = useState("");
  // Her spørger jeg om adgang til kameraet via en asynkronisk funktion
  const camPerm = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHarAdgang(status === 'granted');
      // har vi ikke adgang giver jeg en alert om det.
      if(status !== 'granted') {
        alert("Du har afvist adgang!")
      }
    })();
  
  }
  useEffect(() => {
   camPerm();
  }, []);
  // Her laver jeg en try-catch for at teste funktionen.
  const QRscan = ({type, data}) => {
    try {
    setErScanned(true);
    setText(data)

    }catch(err) {
      if(err) {
        console.log(err);
      }
    }
  }
  // Har vi ikke adgang vil jeg igen spørge om adgang.
  if (harAdgang === false) {
    return (
      <View style={styles.container}>
        <Text>Der ingen adgang til Kamera</Text>
        <Button title={'Giv adgang til Kameraet'} onPress={() => camPerm()} />
      </View>
      )
  }
  // Har vi scannet en kode, så skal vi sætte erScannet
  // til false, således at vi kan scanne en ny kode igen.
  if(erScannet === true) {
setErScanned(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Scan QR Code</Text>
      <Text style={styles.subline}>Discover the monument here</Text>
    <View style={styles.QRlayout}>
    <BarCodeScanner
        onBarCodeScanned={erScannet ? undefined : QRscan}
        style={StyleSheet.absoluteFillObject}
      />
       </View>
       <Text style = {styles.textLayout}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 20
  },
  QRlayout: {
    alignItems: 'center',
    height: 350,
    width: 350,
    borderRadius: 30,
    marginTop: -100,
  },
  textLayout: {
    fontSize: 16,
    margin: 20,
    fontWeight: 'bold'
  },
  headline: {
    marginTop: 0,
    paddingHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: -150,
    fontFamily: "Futura",
    color: colors.textMain,
    marginLeft: -160,
  },
  subline: {
    marginTop: -10,
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 5,
    fontFamily: "Futura",
    color: colors.textMain,
    marginLeft: -175,
  }
});

export default ScanScreen
