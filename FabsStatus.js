import React, { Component } from 'react';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';

export default class FabsStatus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }
  render() {
    return (  
        <View style={{ flex: 1 }}>  
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#F4F4F4' , width: 50, height: 50, marginBottom:73}}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="create" style={{ color: "#075e54"}}/>
          </Fab>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#25d366' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="camera" style={{ color: "white"}}/>
          </Fab>
        </View>
    );
  }
}