import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Linking,
  Image,
} from "react-native";
import {
  fontSize,
  colors,
  fontFamily,
  borderRadius,
} from "./globalStyleVariables";

const CrashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.crashImageAndMessage}>
      <Image source={require('../assets/images/crash-screen-image.svg')} />
        <View style={styles.crashMessage}>
          <Text style={styles.crashTitleText}>Something went wrong.</Text>
          <Text style={styles.crashDescText}>
            Sorry, something went wrong. Please restart the app and try again.
            If the problem persists, you can contact our support.
          </Text>
        </View>
      </View>
      <TouchableHighlight
        onPress={() => {
          Linking.openURL("https://google.co.in");
        }}
        style={{ width: "100%" }}
        underlayColor="transparent"
      >
        <Text style={styles.supportButton}>contact support</Text>
      </TouchableHighlight>
    </View>
  );
};

export class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({ error: true });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.error) {
      return <CrashScreen />;
    }
    // Normally, just render children
    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    backgroundColor: colors.white,
  },
  crashImageAndMessage: {
    alignItems: "center",
  },

  crashMessage: {
    alignItems: "center",
    marginTop: -60,
  },
  crashTitleText: {
    fontSize: fontSize.font24,
    fontFamily: fontFamily.gibsonSemiBold,
    color: colors.blue1,
  },
  crashDescText: {
    fontSize: fontSize.font14,
    fontFamily: fontFamily.poppinsRegular,
    color: colors.gray1,
    textAlign: "center",
    marginTop: 5,
  },

  supportButton: {
    height: 44,
    width: "100%",
    backgroundColor: colors.gray1,
    borderRadius: borderRadius.br12,
    fontSize: fontSize.font15,
    fontFamily: fontFamily.gibsonSemiBold,
    color: colors.white,
    textAlign: "center",
    textAlignVertical: "center",
    textTransform: "uppercase",
    marginTop: 30,
  },
});
