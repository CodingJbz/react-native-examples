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

import Router from './Router';

export default class Example extends React.Component {

  constructor(props) {
    super(props);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([{name: 'ListView', route: Router.getListViewRoute()}]),
    };

  }

  renderRow = (data) => {
    return (
      <View key={data.name}>
        <TouchableOpacity onPress={() => this.props.navigator.push(data.route)}>
          <View style={styles.row}>
            <Text style={styles.rowText}>{data.name}</Text>
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
    padding: 5,
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
