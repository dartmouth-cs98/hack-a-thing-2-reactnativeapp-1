import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  ScrollView,
  TouchableHighlight
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
var customCallsData = require("../data/customCallsData.json");
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });
export default class Calls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleDataSource: ds.cloneWithRows([]),
      loaded: false,
      displayAll: true
    };
  }
  componentDidMount() {
    this.setState({
      peopleDataSource: ds.cloneWithRows(customCallsData),
      loaded: true
    });
  }
  renderPersonRowAll(person) {
    return (
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
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                color: person.mobile ? "#075e54" : "#ed788b"
              }}
            >
              {person.first_name}
            </Text>
            <View style={styles.dateContainer}>
              <Text style={{ fontWeight: "400", color: "#666", fontSize: 12 }}>
                {person.date}
              </Text>
            </View>
          </View>
          <View style={styles.callerMsgContainer}>
            <Icon
              name={person.mobile ? "call-missed" : "call-received"}
              size={15}
              color={person.mobile ? "#075e54" : "#ed788b"}
            />
            <Text style={{ fontWeight: "400", color: "#666", fontSize: 12 }}>
              {person.callState}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  _onPressDisplayAll = () => this.setState({ displayAll: true });
  _onPressDisplayMissed = () => this.setState({ displayAll: false });

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.leftHeaderContainer}>Edit</Text>

          <View style={styles.menuContainer}>
            <TouchableHighlight
              style={styles.buttonContainer}
              onPress={this._onPressDisplayAll}
              underlayColor="#df9fbf"
            >
              <Text
                style={{
                  textAlign: "center",
                  color: this.state.displayAll ? "pink" : "white",
                  fontWeight: this.state.displayAll ? "bold" : "normal"
                }}
              >
                All
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.buttonContainer}
              onPress={this._onPressDisplayMissed}
              underlayColor="#df9fbf"
            >
              <Text
                style={{
                  textAlign: "center",
                  color: this.state.displayAll ? "white" : "pink",
                  fontWeight: this.state.displayAll ? "normal" : "bold"
                }}
              >
                Missed
              </Text>
            </TouchableHighlight>
          </View>

          <Icon name="phone" color="#e68a00" size={23} style={{ padding: 5 }} />
        </View>
        <ScrollView>
          <ListView
            initialListSize={5}
            enableEmptySections={true}
            dataSource={this.state.peopleDataSource}
            renderRow={person => {
              return this.renderPersonRowAll(person);
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
    flex: 11
  },
  menuContainer: {
    flexDirection: "row",
    height: 30
  },
  mainText: {
    color: "#e68a00",
    fontSize: 16
  },
  callerMsgContainer: {
    flexDirection: "row"
  },
  buttonContainer: {
    borderRadius: 2,
    borderColor: "white",
    borderWidth: 0.6,
    width: 60,
    justifyContent: "center"
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
module.exports = Calls;
