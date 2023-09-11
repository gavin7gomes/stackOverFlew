import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ReactScreen from '../../screens/React/ReactScreen';
import ReactNativeScreen from '../../screens/ReactNative/ReactNativeScreen';
import NodeScreen from '../../screens/Node/NodeScreen';
import { getTabIcon } from '../../utils/misc';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native';


const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="React"
      >
        <Tab.Screen
          name="React"
          component={ReactScreen}
          options={{ title: 'React' }}
        />
        <Tab.Screen
          name="React Native"
          component={ReactNativeScreen}
          options={{ title: 'React Native' }}
        />
        <Tab.Screen
          name="Node"
          component={NodeScreen}
          options={{ title: 'Node' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
