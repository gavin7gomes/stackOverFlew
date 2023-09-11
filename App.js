import React, { Component } from "react";
import { Provider } from "react-redux";
import SplashScreen from "react-native-splash-screen";
import store from "./store";
import { enableMapSet } from "immer";
import { Platform, SafeAreaView } from "react-native";
import AppNavigator from "./components/AppNavigator/AppNavigator";
import { ErrorBoundary } from "./utils/crash";

enableMapSet();

class App extends Component {
  state = {
    isReady: false,
  };

  async componentDidMount() {
    try {
      await this.tasksBeforeAppRender();
    } catch (e) {
      console.log(e);
    }

    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }

  tasksBeforeAppRender = async () => {
    // const fontLoading = Font.loadAsync({
    //   GibsonLight: require("./assets/fonts/GibsonLight.ttf"),
    //   GibsonRegular: require("./assets/fonts/GibsonRegular.ttf"),
    //   GibsonSemiBold: require("./assets/fonts/GibsonSemiBd.ttf"),
    //   GibsonBold: require("./assets/fonts/GibsonBold.ttf"),
    //   PoppinsLight: require("./assets/fonts/Poppins-Light.ttf"),
    //   PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    //   PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    //   PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    //   PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    // });

    // await Promise.all([
    //   fontLoading,
    // ]);

    this.setState({ isReady: true });
  };

  render() {
    const { isReady } = this.state;
    if (!isReady) {
      return <></>;
    }
    return (
      <ErrorBoundary>
        <Provider store={store}>
          <SafeAreaView
            style={{
              flex: 1,
            }}
          >
            <AppNavigator />
          </SafeAreaView>
        </Provider>
      </ErrorBoundary>
    );
  }
}

export default App
