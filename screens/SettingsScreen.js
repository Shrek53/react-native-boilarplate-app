import  React  from 'react';
import { ExpoConfigView } from '@expo/samples';
import { View, Button, AsyncStorage } from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
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
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Button title='sign out' onPress={this.signOut}/>
      </View>
    )
  }
}
