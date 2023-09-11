import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

import { WebView } from "react-native-webview";
import { elevation } from "../../utils/globalStyleVariables";

const LoaderWrapper = ({ loading = false, defineHeight = true, ...props }) => {
  const width = 60,
    height = 60;
  return (
    <View
      style={
        defineHeight ? { height: "100%", width: "100%" } : { width: "100%" }
      }
      pointerEvents={loading ? "none" : "auto"}
    >
      {loading && (
        <View style={styles.loaderContainer} pointerEvents="none">
          <ActivityIndicator size="large" color="#0077cc" />
        </View>
      )}
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 29,
    ...elevation.e30,
    backgroundColor: "transparent",
  },
  loader: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
});

export default LoaderWrapper;
