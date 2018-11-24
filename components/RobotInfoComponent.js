import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

export default class RobotInfoComponent extends React.Component{
    render(){
      return(
           <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
              <View style={styles.welcomeContainer}>
                <Image
                  source={
                    __DEV__
                      ? require('../assets/images/robot-dev.png')
                      : require('../assets/images/robot-prod.png')
                  }
                  style={styles.welcomeImage}
                />
              </View>
  
              <View style={styles.getStartedContainer}>
                <Text style={styles.getStartedText}>
                This is a Boilar plate app with drawer and bottom tab navigation
                </Text>
              </View>
          </ScrollView>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },
    developmentModeText: {
      marginBottom: 20,
      color: "rgba(0,0,0,0.4)",
      fontSize: 14,
      lineHeight: 19,
      textAlign: "center"
    },
    contentContainer: {
      paddingTop: 30
    },
    welcomeContainer: {
      alignItems: "center",
      marginTop: 10,
      marginBottom: 20
    },
    welcomeImage: {
      width: 100,
      height: 80,
      resizeMode: "contain",
      marginTop: 3,
      marginLeft: -10
    },
    getStartedContainer: {
      alignItems: "center",
      marginHorizontal: 50
    },
    getStartedText: {
      fontSize: 17,
      color: "rgba(96,100,109, 1)",
      lineHeight: 24,
      textAlign: "center"
    },
  });
  