'use strict';

import React from 'react-native';

let {
  Image,
  Navigator,
  PropTypes,
  Text,
  View,
} = React;

var {
    Component,
    AppRegistry
  } = React

import ExNavigator from '@exponent/react-native-navigator';
import UserDefaults from 'react-native-userdefaults-ios';
import Router from './Router';

  let routeName = "ExampleList"

  UserDefaults.stringForKey("route").then((route) => {
    console.log(route);
    if (route) {
      routeName = route
    }
  })

class ReactNativeExamples extends Component {

  render() {
    return (
      <ExNavigator
        showNavigationBar={false}
        initialRoute={Router.getRoute(routeName)}
        style={{ flex: 1 }}
      />
    )
  }
}

AppRegistry.registerComponent('ReactNativeExamples', () => ReactNativeExamples);
