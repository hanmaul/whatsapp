import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text , Header, Content, List, ListItem, Thumbnail,TabHeading, Icon, Left, Body, Right, Button, Tab, Tabs} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Calls from "./Calls.js";
import Chats from "./Chats.js";
import Status from "./Status.js";
import Camera from "./Camera.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Header androidStatusBarColor="#075e54" style={{backgroundColor: "#128C7E"}}>
          <Left>
            <Text style={{margin:9, backgroundColor: "#128C7E", fontSize: 17, color: "white", fontWeight:"bold"}}>WhatsApp</Text>
          </Left>
          <Right>
            <Icon style={{color: "white", margin: 15, fontSize: 25}} name="search"/>
            <Icon style={{color: "white", margin: 15, fontSize: 25}} name="more" />
          </Right>
        </Header>
        <Tabs tabContainerStyle={{elevation: 0}} style={{backgroundColor: "#128C7E"}}>
          <Tab heading={ <TabHeading style={{backgroundColor: "#128C7E"}}><Icon style={{color: "white"}} name="camera" /></TabHeading>}>
            <Camera></Camera>
          </Tab>
          <Tab heading={<TabHeading style={{backgroundColor: "#128C7E"}}><Text style={{color: "white", fontSize: 12, fontWeight:"bold"}}>CHATS</Text></TabHeading>}>
            <Chats></Chats>
          </Tab>
          <Tab heading={<TabHeading style={{backgroundColor: "#128C7E"}}><Text style={{color: "white", fontSize: 12, fontWeight:"bold"}}>STATUS</Text></TabHeading>}>
            <Status></Status>
          </Tab>
          <Tab heading={<TabHeading style={{backgroundColor: "#128C7E"}}><Text style={{color: "white", fontSize: 12, fontWeight:"bold"}}>CALLS</Text></TabHeading>}>
            <Calls></Calls>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
