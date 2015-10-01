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

class ReactNativeExamples extends Component {

  constructor(props) {
    super(props);

    this.state = {
      routeName: "ExampleList",
      loaded: false
    }
  }

  componentDidMount() {
    UserDefaults.stringForKey("route").then((route) => {
      if (route) {
        this.setState({routeName: route})
      }
      this.setState({loaded: true})
    })
  }

  render() {
    if (this.state.loaded) {
      return (
        <ExNavigator
          showNavigationBar={false}
          initialRoute={Router.getRoute(this.state.routeName)}
          style={{ flex: 1 }}
        />
      )
    } else {
      return null
    }
  }
}

AppRegistry.registerComponent('ReactNativeExamples', () => ReactNativeExamples);
