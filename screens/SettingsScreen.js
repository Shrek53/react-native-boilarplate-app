import  React  from 'react';
import { ExpoConfigView } from '@expo/samples';
import { View, Button, AsyncStorage,StyleSheet,SafeAreaView } from 'react-native';
import CommonHeader from './partial/CommonHeader';
import GlobalStyles from '../assets/styles/GlobalStyles';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
    header: null,
  };
  signOut = async () => {
    await AsyncStorage.clear()
    this.props.navigation.navigate("AuthLoading")
  }
  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    // return <ExpoConfigView />;
    return(
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <View style={styles.container}>
        <CommonHeader title="Settings"/>
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Button title='sign out' onPress={this.signOut}/>
        </View>
      </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});