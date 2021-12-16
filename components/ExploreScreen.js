
import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { Header, LearnMoreLinks, Colors } from 'react-native/Libraries/NewAppScreen'
import colors from "../assets/colors/colors";
import Feather from 'react-native-vector-icons/Feather';
import previewData from "../assets/data/previewData";


const ExploreScreen = () => {
  return (
      <View style={styles.container}>
        <Text style={styles.headline}>Discover</Text>
          <View style={styles.searchWrapper}>
              <Feather name ="search" size={16} color={colors.primary}/>
              <View style={styles.search}>
                  <Text style={styles.searchText}>Search</Text>
              </View>
          </View>
          <View style={styles.previewWrapper}>
              <Text style={styles.previewTitle}>Monuments</Text>
              {previewData.map(item =>(
                  <View style={styles.previewCardWrapper}>
                              <View style={styles.previewTitleWrapper}>
                                  <Text style={styles.previewTitleTitles}>{item.title}</Text>
                                  <Text styles={styles.previewPay}>${item.pay}</Text>
                              </View>
                      <View styles={styles.previewRight}>
                          <Image source={item.image} style={styles.previewImage}/>
                      </View>
                  </View>
              ))}
          </View>
      </View>
  )
};

//Her styler vi resterende av viewet
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
    fontFamily: "Futura",
    color: colors.textMain,
  },
    search: {
        flex: 1,
        marginLeft: 10,
        borderBottomColor: colors.textLight,
        borderBottomWidth: 2,
    },
    searchWrapper: {
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 30,
        paddingHorizontal: 20,
    },
    searchText: {
        fontFamily: "Futura",
        fontSize: 14,
        marginBottom: 5,
        color: colors.textLight,
    },
    previewWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    previewTitle: {
        fontFamily: "Futura",
        fontSize: 16,
        marginBottom: 5,
        color: colors.textMain,
    },
    previewCardWrapper: {
        marginTop: 20,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        marginBottom: 0,
    },
    previewRight: {
        paddingLeft: 4,
        marginRight: 0,
    },

    previewImage: {
        width: 120,
        height: 120,
        resizeMode: "contain"
    },
    previewTitleWrapper: {
        fontFamily: "Futura",
        fontSize: 16,
        marginBottom: 5,
        color: colors.textMain,
        marginRight: 95,
    }

})
//Her eksporterer vi funksjonen så vi kan bruke den andre steder i applikasjonen vår
export default ExploreScreen;
