import React, { Component } from 'react';
import { AppRegistry, Image, View, Text, TextInput} from 'react-native';

export default class Journal extends Component {
    constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    let pic = {
      uri: 'https://www.teachingenglish.org.uk/sites/teacheng/files/styles/large/public/images/class_journals_iStock_000021675732XSmall.jpg'
    };
    return (
        <View style={{
          padding: 40,
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
        }}>
      
      <Image source={pic} style={{width: 300, height: 300}}/>
      <Text> </Text>
      <Text>Journal App</Text>

      <TextInput
          style={{height: 40}}
          placeholder="Enter your entry here!"
          onChangeText={(text) => this.setState({text})}
        />

        <Text style={{padding: 10, fontSize: 20}}>
        </Text>


      </View>

    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('Journal_App', () => Journal);