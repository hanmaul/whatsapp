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
import FabsCalls from "./FabsCalls.js";

export default class Calls extends React.Component {
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
              Yesterday, 02:15 AM
            </Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={{ color: "#075e54" }} name="call"></Icon>
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
              Yesterday, 02:15 AM
            </Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={{ color: "#075e54" }} name="videocam"></Icon>
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
              Yesterday, 02:15 AM
            </Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={{ color: "#075e54" }} name="call"></Icon>
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
              Yesterday, 02:15 AM
            </Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={{ color: "#075e54" }} name="call"></Icon>
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
              Yesterday, 02:15 AM
            </Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={{ color: "#075e54" }} name="videocam"></Icon>
            </Button>
          </Right>
        </ListItem>
      </List>
      <FabsCalls></FabsCalls>
      </Container>
    );
  }
}
