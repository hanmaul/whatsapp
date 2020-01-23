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
  Tabs,
  Separator,
  View
} from "native-base";
import logo from "./awikwok.jpg";
import FabsStatus from "./FabsStatus.js";
import mylogo from "./asoy.jpg";

export default class Status extends React.Component {
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
          <ListItem thumbnail noBorder>
            <Left>
              <Thumbnail style={{ borderRadius: 50 }} square source={mylogo} />
            </Left>
            <Body>
              <Text style={{}}>My status</Text>
              <Text style={{ fontSize: 13, color: "grey" }}>
                Tap to add status update
              </Text>
            </Body>
          </ListItem>
          <ListItem itemDivider style={{ height: 31 }}>
            <Text style={{ fontSize: 12, color: "grey", fontWeight: "bold" }}>
              {" "}
              Recent updates
            </Text>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <View style={{ borderColor: "#128C7E", borderRadius: 50, borderWidth:2.5, padding:1.5}}>
              <Thumbnail
              style={{ width:50, height:50 }}
              source={logo}
              />
              </View>
            </Left>
            <Body>
              <Text style={{}}>Farhan Maulana</Text>
              <Text note numberOfLines={1}>
                45 minutes ago
              </Text>
            </Body>
          </ListItem>
          <ListItem itemDivider style={{ height: 31 }}>
            <Text style={{ fontSize: 12, color: "grey", fontWeight: "bold" }}>
              {" "}
              Muted updates
            </Text>
          </ListItem>
        </List>
        <FabsStatus></FabsStatus>
      </Container>
    );
  }
}
