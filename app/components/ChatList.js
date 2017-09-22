import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
var customData = require("../data/customData.json");
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });
export default class ChatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleDataSource: ds.cloneWithRows([]),
      loaded: false
    };
  }
  componentDidMount() {
    this.setState({
      peopleDataSource: ds.cloneWithRows(customData),
      loaded: true
    });
  }

  renderPersonRow(person) {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigator.push({
            id: "chatbox",
            image: person.image,
            name: person.first_name
          });
        }}
      >
        <View style={styles.listItemContainer}>
          <View style={styles.iconContainer}>
            <Image
              source={{ uri: person.image }}
              style={styles.initStyle}
              resizeMode="contain"
            />
          </View>
          <View style={styles.callerDetailsContainer}>
            <View style={styles.nameContainer}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                {person.first_name}
              </Text>
              <View style={styles.dateContainer}>
                <Text
                  style={{ fontWeight: "400", color: "#666", fontSize: 12 }}
                >
                  {person.date}
                </Text>
              </View>
            </View>
            <View style={styles.callerMsgContainer}>
              <Text style={{ fontWeight: "400", color: "#666", fontSize: 12 }}>
                {person.message}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.leftHeaderContainer}>Edit</Text>

          <Text style={styles.logoText}>Chats</Text>

          <Icon name="edit" color="#e68a00" size={23} style={{ padding: 5 }} />
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.mainText}>Broadcast Lists</Text>

          <Text style={styles.mainText}>New Group</Text>
        </View>
        <ScrollView>
          <ListView
            initialListSize={5}
            enableEmptySections={true}
            dataSource={this.state.peopleDataSource}
            renderRow={person => {
              return this.renderPersonRow(person);
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f9ecf2",
    height: 24
  },
  headerContainer: {
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#993366",
    paddingRight: 5
  },
  leftHeaderContainer: {
    color: "#e68a00",
    fontSize: 16,
    alignItems: "flex-start",
    marginLeft: 0,
    flexDirection: "row"
  },
  rightHeaderContainer: {
    alignItems: "flex-end",
    flexDirection: "row"
  },
  contentContainer: {
    flex: 9
  },
  logoText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginLeft: 10
  },
  mainText: {
    color: "#e68a00",
    fontSize: 16
  },
  middleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    paddingBottom: 6,
    paddingLeft: 3,
    paddingRight: 3
  },
  listItemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  iconContainer: {
    flex: 1,
    alignItems: "flex-start"
  },
  callerDetailsContainer: {
    flex: 4,
    borderBottomColor: "rgba(92,94,94,0.5)",
    borderBottomWidth: 0.25
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1
  },
  callerMsgContainer: {
    flex: 1
  },
  dateContainer: {
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  callIconContainer: {
    flex: 1,
    alignItems: "flex-end"
  },
  initStyle: {
    borderRadius: 25,
    width: 50,
    height: 50
  }
});
module.exports = ChatList;
