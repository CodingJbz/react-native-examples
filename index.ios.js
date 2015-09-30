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
import Router from './Router';

class ReactNativeExamples extends Component {

  render() {
    return (
      <ExNavigator
        showNavigationBar={false}
        initialRoute={Router.getHomeRoute()}
        style={{ flex: 1 }}
      />
    )
  }
}

AppRegistry.registerComponent('ReactNativeExamples', () => ReactNativeExamples);
