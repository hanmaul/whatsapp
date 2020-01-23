import React from "react";
import {
  Container,
  Text,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  TabHeading,
  Icon,
  Left,
  Body,
  Right,
  Button,
  Tab,
  Tabs
} from "native-base";
import logo from "./awikwok.jpg";
import Fabs from "./FabsChat.js";

export default class Chats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  render() {
    return (
      <Container>
      <List>
        <ListItem thumbnail>
          <Left>
            <Thumbnail style={{ borderRadius: 50 }} square source={logo} />
          </Left>
          <Body>
            <Text>Farhan Maulana</Text>
            <Text note numberOfLines={1}>
              Assalamualaikum Akhi
            </Text>
          </Body>
          <Right>
            <Button transparent>
              <Text style={{ color: "grey", fontSize: 10 }}>11:18</Text>
            </Button>
          </Right>
        </ListItem>
        <ListItem thumbnail>
          <Left>
            <Thumbnail style={{ borderRadius: 50 }} square source={logo} />
          </Left>
          <Body>
            <Text>Farhan Maulana</Text>
            <Text note numberOfLines={1}>
              Assalamualaikum Akhi
            </Text>
          </Body>
          <Right>
            <Button transparent>
              <Text style={{ color: "grey", fontSize: 10 }}>11:18</Text>
            </Button>
          </Right>
        </ListItem>
        <ListItem thumbnail>
          <Left>
            <Thumbnail style={{ borderRadius: 50 }} square source={logo} />
          </Left>
          <Body>
            <Text>Farhan Maulana</Text>
            <Text note numberOfLines={1}>
              Assalamualaikum Akhi
            </Text>
          </Body>
          <Right>
            <Button transparent>
              <Text style={{ color: "grey", fontSize: 10 }}>11:18</Text>
            </Button>
          </Right>
        </ListItem>
        <ListItem thumbnail>
          <Left>
            <Thumbnail style={{ borderRadius: 50 }} square source={logo} />
          </Left>
          <Body>
            <Text>Farhan Maulana</Text>
            <Text note numberOfLines={1}>
              Assalamualaikum Akhi
            </Text>
          </Body>
          <Right>
            <Button transparent>
              <Text style={{ color: "grey", fontSize: 10 }}>11:18</Text>
            </Button>
          </Right>
        </ListItem>
        <ListItem thumbnail>
          <Left>
            <Thumbnail style={{ borderRadius: 50 }} square source={logo} />
          </Left>
          <Body>
            <Text>Farhan Maulana</Text>
            <Text note numberOfLines={1}>
              Assalamualaikum Akhi
            </Text>
          </Body>
          <Right>
            <Button transparent>
              <Text style={{ color: "grey", fontSize: 10 }}>11:18</Text>
            </Button>
          </Right>
        </ListItem>
      </List>
      <Fabs></Fabs>
      </Container>
    );
  }
}
