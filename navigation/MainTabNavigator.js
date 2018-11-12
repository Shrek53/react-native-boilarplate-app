import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator,createDrawerNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
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
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const MainBottomTab = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
},{
  navigationOptions:{
    tabBarOptions:{
      safeAreaInset:{
         bottom: 'always', 
         top: 'always' 
      }
    }
  }
});

class NullComponent extends React.Component {
  render(){
    return (null);
  }
}

const MainDrawer = createDrawerNavigator({
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
});



export default MainDrawer; 