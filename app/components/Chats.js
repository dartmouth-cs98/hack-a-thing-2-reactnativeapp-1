import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import ChatBox from "./ChatBox";
import ChatList from "./ChatList";

import NavigationExperimental from "react-native-deprecated-custom-components";

export default class Chats extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: 'Default Username' };
  }

  setUserNameFromChatList = (input) => {
    this.setState({ userName: input });
  }
  
  _renderScene(route, navigator) {
    const { state, actions } = this.props;
    const routeId = route.id;

    if (routeId === "chatlist") {
      return <ChatList 
        {...this.props} 
        navigator={navigator} 
        callback={this.setUserNameFromChatList}
      />;
    } else if (routeId === "chatbox") {
      return (
        <ChatBox
          {...this.props}
          image={route.image}
          name={route.name}
          navigator={navigator}
          userName={this.state.userName}
        />
      );
    }
  }

  _configureScene(route, routeStack) {
    const routeId = route.id;
    return NavigationExperimental.Navigator.SceneConfigs.FloatFromRight;
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationExperimental.Navigator
          style={{ flex: 1 }}
          ref={"NAV"}
          initialRoute={{ id: "chatlist", name: "chatlist" }}
          renderScene={this._renderScene.bind(this)}
          configureScene={this._configureScene.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
module.exports = Chats;
