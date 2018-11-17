import React from 'react';
import { Platform, SafeAreaView,View,Text,StyleSheet, Image,Button, AsyncStorage } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  DrawerItems,
  createMaterialTopTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import {  createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import AuthLoadingScreen from '../screens/authLoadingScreen';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused, tintColor }) => (
    <TabBarIcon
      // focused={focused}
      color = {
        tintColor
      }
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused, tintColor }) => (
    <TabBarIcon
      // focused={focused}
      color={tintColor}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused, tintColor }) => (
    <TabBarIcon
      // focused={focused}
      color = {
        tintColor
      }
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const MainBottomTab = createMaterialTopTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
},{
  tabBarPosition:"bottom",
  navigationOptions:{
  },
  tabBarOptions:{
    activeTintColor: "green",
    inactiveTintColor: "#00ccff",
    style:{
      backgroundColor: "white"
    },
    indicatorStyle:{
      height: 0
    },
    showIcon:'true'
  },
  swipeEnabled:true,
});

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex:1}}>
    <View style={{height:200, backgroundColor:'#00ccff', alignItems:'center', justifyContent:'center'}}>
      <Image source={require("../assets/images/robot-dev.png")} style={{height:120, width:120, borderRadius:60}} />
    </View>
    <View>
      <DrawerItems {...props} />
    </View>
  </SafeAreaView>
)

class NullComponent extends React.Component {
  render(){
    return (null);
  }
}

const AppDrawerNavigator = createDrawerNavigator({
  Tab :{
    screen: MainBottomTab,
    navigationOptions:{
      drawerLabel: NullComponent
    }
  },
  Home: {
    screen: HomeStack,
  },
  Links: {
    screen: LinksStack,
  },
  Settings: {
    screen: SettingsStack,
  },
},{
  contentComponent: CustomDrawerComponent,
  contentOptions:{
    activeTintColor: '#00ccff',
  }
  
});

const AuthStackNavigator= createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
})

mainSwitchNavigator= createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App : AppDrawerNavigator
})


// export default AppDrawerNavigator;
export default mainSwitchNavigator;