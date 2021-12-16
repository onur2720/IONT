//Vi importerer de nødvendige dependencies og libraries for å kunne kjøre applikasjonen
import * as React from "react";
import {StyleSheet, Text, View} from "react-native";
import colors from "../assets/colors/colors";

//Her har vi en funksjon som inneholder view komponenten som er den som gjør det mulig for oss å vise andre komponenter visuelt inne i applikasjonen
const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headline}>Login here</Text>
            <View style ={styles.wrapperEmail}>
                <Text style={styles.formText}>Email...</Text>
            </View>
            <View style ={styles.wrapperPassword}>
                <Text style={styles.formText}>Password...</Text>
            </View>
            <View>
                <Text style ={styles.forgotText}>Forgot password?</Text>
            </View>
                <View styles={styles.wrapperPassword}>
                <Text style ={styles.loginText}>Login</Text>
            </View>
            <View>
                <Text style ={styles.signText}>Sign up</Text>
            </View>
        </View>
    )
};

//Her styler vi viewet, både selvet containeren og de forskjellige tekstene
const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    wrapperEmail: {
        marginTop: 20,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 50,
        paddingTop: 20,
        paddingLeft: 20,
        marginBottom: 30,
        marginLeft: 40,
        marginRight: 40,
    },
    wrapperPassword: {
        marginTop: 0,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 60,
        paddingTop: 20,
        paddingLeft: 20,
        marginBottom: 30,
        marginLeft: 40,
        marginRight: 40,
    },
    headline: {
        marginTop: 30,
        paddingHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 80,
        fontFamily: "Futura",
        color: colors.textMain,
        marginLeft: 0
    },
    formText: {
        textAlign: 'left',
        marginBottom: 15,
        marginLeft: 10,
        marginRight: 30,
        fontFamily: "Futura",
        color: colors.textLight,
    },
    forgotText: {
        textAlign: 'center',
        marginTop: -10,
        fontFamily: "Futura",
        color: colors.textMain,
    },
    loginText: {
        textAlign: 'center',
        marginTop: 60,
        fontFamily: "Futura",
        color: colors.textMain,
    },
    wrapperLogin: {
        marginTop: 100,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingTop: 20,
        paddingLeft: 20,
        marginBottom: 30,
        marginLeft: 40,
        marginRight: 40,
    },
    signText: {
        textAlign: 'center',
        marginTop: 60,
        fontFamily: "Futura",
        color: colors.textMain,
    },
})

//Her eksporterer vi funksjonen så vi kan bruke den andre steder i applikasjonen vår
export default LoginScreen;