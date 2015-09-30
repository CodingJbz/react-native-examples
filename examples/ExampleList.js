'use strict';

import React from 'react-native';

let {
  Component,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
  PixelRatio
} = React;

import Router from '../Router';
import Scenes from '../Scenes';
import {keys, values, reject, startCase} from 'lodash';

export default class ExampleList extends React.Component {

  constructor(props) {
    super(props);

    let routes = reject(keys(Scenes).map((name) => {
      return {
        getSceneClass() {
          return Scenes[name]
        },
        name: name
      }
    }), 'name', 'ExampleList')

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    console.log(routes)
    this.state = {
      dataSource: ds.cloneWithRows(routes),
    };

  }

  renderRow = (data) => {
    console.log(data)
    let name = data.name || data.displayName
    return (
      <View key={name}>
        <TouchableOpacity onPress={() => this.props.navigator.push(data)}>
          <View style={styles.row}>
            <Text style={styles.rowText}>{startCase(name)}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />
      </View>
    )
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          React Native Examples
        </Text>
        <Text style={styles.instructions}>
          Add your example here for use in the official React Native documentation.
        </Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  separator: {
    height: 1 / PixelRatio.get(),
    backgroundColor: '#ddd',
  },
  row: {
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    flexDirection: 'row'
  },
  rowText: {
    flex: 1,
    fontSize: 20
  }
});
