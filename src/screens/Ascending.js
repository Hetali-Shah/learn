/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';

export default class Ascending extends Component<Props> {

  _printSingleData = ({item}) => {
    const { name, email, body } = item;
    return(
      <View style={{padding:40}}>
        <Text style={{fontSize: 14, fontWeight: 'bold'}}>Name : {name}</Text>
        <Text>Email : {email}</Text>
        <Text style={{numberOfLines:1}}>Body : {body}</Text>
      </View>
    )
  }

  render() {
    return (
      <View>
        {
          this.props.data.map((value,i) => {
            return(
              <View style={{padding:40}} key={i}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>Name : {value.name}</Text>
                <Text>Email : {value.email}</Text>
                <Text style={{numberOfLines:1}}>Body : {value.body}</Text>
              </View>
            )
          })
        }
      </View>
    );
  }
}

