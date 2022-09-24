import React, {Component} from "react";
import { StyleSheet, Text, View } from 'react-native';

export default class SearchScreen extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Text>This is Search Screen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4287f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
