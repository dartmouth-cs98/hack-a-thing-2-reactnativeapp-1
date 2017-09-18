import React from "react";
import { TabNavigator } from "react-navigation";

import Chats from "./Chats";
import Calls from "./Calls";
import Status from "./Status";
import Camera from "./Camera";
import Settings from "./Settings";
import Icon from "react-native-vector-icons/MaterialIcons";
export const Tabs = TabNavigator({
  Status: {
    screen: Status,
    navigationOptions: {
      tabBarLabel: "Status",
      tabBarIcon: ({ tintColor }) => (
        <Icon name={"account-circle"} size={30} style={{ color: tintColor }} />
      )
    }
  },
  Calls: {
    screen: Calls,
    navigationOptions: {
      tabBarLabel: "Calls",
      tabBarIcon: ({ tintColor }) => (
        <Icon name={"phone"} size={30} style={{ color: tintColor }} />
      )
    }
  },
  Camera: {
    screen: Camera,
    navigationOptions: {
      tabBarLabel: "Camera",
      tabBarIcon: ({ tintColor }) => (
        <Icon name={"camera"} size={30} style={{ color: tintColor }} />
      )
    }
  },
  Chats: {
    screen: Chats,
    navigationOptions: {
      tabBarLabel: "Chats",
      tabBarIcon: ({ tintColor }) => (
        <Icon name={"chat"} size={30} style={{ color: tintColor }} />
      )
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: "Settings",
      tabBarIcon: ({ tintColor }) => (
        <Icon name={"settings"} size={30} style={{ color: tintColor }} />
      )
    }
  }
});
