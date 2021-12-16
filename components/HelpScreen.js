//Vi importerer de nødvendige dependencies og libraries for å kunne kjøre applikasjonen
import * as React from "react";
import {StyleSheet, Text, View} from "react-native";
import colors from "../assets/colors/colors";

//Her har vi en funksjon som inneholder view komponenten som er den som gjør det mulig for oss å vise andre komponenter visuelt inne i applikasjonen
const HelpScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headline}>All your frequently asked questions</Text>
            <Text style={styles.question}>Can I use the app in any country?</Text>
            <Text style={styles.text}>Unfortunately not yet, we are working on expanding the app to new countries all the time so stay tuned for that.</Text>
            <Text style={styles.question}>In which countries is the app available?</Text>
            <Text style={styles.text}>For now it is available in several nordic countries such as Denmark, Norway and Swedem. We are expanding rapidly so stay tuned for more countries in the near future.</Text>
            <Text style={styles.question}>Where can I follow you?</Text>
            <Text style={styles.text}>We are on nearly all social media platforms such as TikTok, Facebook, LinkedIn and Instagram. The links are here:</Text>
        </View>
    )
};

//Her styler vi viewet, både selvet containeren og de forskjellige tekstene
const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        paddingHorizontal: 20
    },
    headline: {
        marginTop: 30,
        paddingHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 20,
        fontFamily: "sans-serif",
        color: colors.textMain,
        marginLeft: 0
    },
    question: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 15,
        fontSize: 18,
        fontFamily: "sans-serif",
    },
    text: {
        textAlign: 'center',
        marginBottom: 20,
        marginLeft: 30,
        marginRight: 30,
        fontFamily: "sans-serif",
    }
})

//Her eksporterer vi funksjonen så vi kan bruke den andre steder i applikasjonen vår
export default HelpScreen;