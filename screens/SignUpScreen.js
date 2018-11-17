import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Dimensions,
  Button
} from 'react-native';
import { WebBrowser } from 'expo';
import {Header,Left,Right,Body,Icon,Title} from 'native-base';
import { MonoText } from '../components/StyledText';



var { width, height } = Dimensions.get('window')
export default class SignUpScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  // resister=() => {
  //   // await AsyncStorage.setItem('userToken', 'apon')
  //   this.props.navigation.navigate("SignIn")
  // }
  render() {
    return (
        <View style={styles.container}>
            <View style={[styles.contain_items, styles.input_container]}>
                <View style={styles.row_items}>
                    <Text>Full Name: </Text>
                    <TextInput  style={styles.input_field}/>
                </View>
                <View style={styles.row_items}>
                    <Text>Email: </Text>
                    <TextInput  style={styles.input_field}/>
                </View>
                <View style={styles.row_items}>
                    <Text>Password: </Text>
                    <TextInput   secureTextEntry={true}  style={styles.input_field} />
                </View>
                <View style={styles.row_items}>
                    <Text>Confirm Password: </Text>
                    <TextInput   secureTextEntry={true}  style={styles.input_field} />
                </View>
                <View>
                    <Button  title="Register" onPress={()=>this.props.navigation.navigate("Welcome")}/>
                </View>
                {/* <View style={{ borderBottomColor: 'black',  borderBottomWidth: 1, width:width-20}} /> */}
            </View>
          
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  contain_items: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //   backgroundColor: 'gray'
  },
  row_items: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  input_field: {
    color: 'white',
    backgroundColor: '#99ccff',
    width: 150
  },
  input_container: {
    flex: 1,
    justifyContent: 'space-evenly'
  }

});