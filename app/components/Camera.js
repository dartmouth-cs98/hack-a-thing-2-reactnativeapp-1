import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Camera, Permissions } from "expo";
import Icon from "react-native-vector-icons/MaterialIcons";
export default class CameraSection extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    mode: Camera.Constants.FlashMode.on,
    picture: null
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }
  snap = () => {
    console.log("setState taking pics");
    this.camera
      .takePictureAsync()
      .then(pic => {
        this.setState({ picture: (picture = pic) });
        console.log("pic", pic);
      })
      .catch(e => {
        console.log("error -> ", e);
      });
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={{ flex: 1 }}
            type={this.state.type}
            flashMode={this.state.mode}
            autoFocus={Camera.Constants.AutoFocus.on}
            onCameraReady={() => {
              console.log("camera invokved");
            }}
            ref={ref => {
              this.camera = ref;
            }}
          >
            <View style={styles.controls}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    mode:
                      this.state.mode === Camera.Constants.FlashMode.on
                        ? Camera.Constants.FlashMode.off
                        : Camera.Constants.FlashMode.on
                  });
                }}
                style={styles.flashMode}
              >
                {this.state.mode == Camera.Constants.FlashMode.on ? (
                  <Icon name={"flash-on"} size={50} color={"#ed788b"} />
                ) : (
                  <Icon name={"flash-off"} size={50} color={"#ed788b"} />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.controls}>
              <TouchableOpacity
                style={styles.controlButton}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                  });
                }}
              >
                <Icon name={"photo"} size={50} color={"#ed788b"} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.controlButton}
                onPress={this.snap}
              >
                <Icon name={"panorama-fish-eye"} size={50} color={"#ed788b"} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.controlButton}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                  });
                }}
              >
                <Icon name={"camera-alt"} size={50} color={"#ed788b"} />
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  controls: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  controlButton: {
    alignSelf: "flex-end",
    alignItems: "center"
  },
  flashMode: {
    marginTop: 20,
    marginRight: 0
  }
});
module.exports = CameraSection;
