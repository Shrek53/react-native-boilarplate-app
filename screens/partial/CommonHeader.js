import React from 'react';
import { View,Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Header,Left,Body, Right, Icon, Title } from 'native-base';


class CommonHeader extends React.Component{
    constructor(props) {
      super(props);
    }
  render(){
    return (
      <View>
        <Header style={{ backgroundColor:'#00ccff'}}>
            <Left style={{flex:1}}>
              <Icon name='menu' style={{marginTop:10, fontSize:32, color:'white'}} onPress={()=>this.props.navigation.openDrawer()} />
            </Left>
            <Body style={{flex:1,alignItems:'center'}} >
              <Title style={{textAlign:'left',color:'white'}}>{this.props.title}</Title>
            </Body>
            <Right style={{flex:1}}>
            </Right>
        </Header>
      </View>
    )
  }
}

export default withNavigation(CommonHeader);