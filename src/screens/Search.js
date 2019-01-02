/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Text, View, TextInput, ScrollView, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements'

export default class App extends Component<Props> {

  constructor(props){
    super(props)
    this.state = {
      searchTerm: '',
    }
  }

  onChangeSearchText = (text) => {
    this.setState({
      searchTerm:text
    })
    //, () => {this._getDataFiltered()}
  }

  // _getDataFiltered = () => {
  //   const second = this.state.searchTerm.substr(1)
  //   const secondLength = this.state.searchTerm.length
  //   console.log("secondLength",secondLength)
  //
  //   const list = this.props.data.filter((values) => (
  //     values.name && values.name.toLowerCase()
  //       .includes(this.state.searchTerm.toLowerCase())
  //   ))
  //   if (list.length <= 0) {
  //     return (
  //       <View><Text style={{ fontSize: 17 }}>No Data Founds :(</Text></View>
  //     );
  //   }
  //   return(
  //     <FlatList
  //       data={list}
  //       renderItem={this._getDataListRow}
  //     />
  //   )
  // };
  //
  // _getDataListRow = ({ item }) => {
  //   const { name, email, body } = item;
  //   return(
  //     <View style={{padding:40}}>
  //       <Text style={{fontSize: 14, fontWeight: 'bold'}}>Name : {name}</Text>
  //       <Text>Email : {email}</Text>
  //       <Text style={{numberOfLines:1}}>Body : {body}</Text>
  //     </View>
  //   )
  // }


  render() {
    const list = this.props.data.filter((values) => (
      values.name && values.name.toLowerCase()
        .includes(this.state.searchTerm.toLowerCase())
    ))
    return (
      <ScrollView style={{fontSize:14,fontWeight: 'bold'}}>
        <SearchBar
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => this.onChangeSearchText(text)}
          value={this.state.searchTerm}
          placeholder="Search"
        />
        {(list.length <= 0)
          ?
          <View>
            <Text style={{ fontSize: 17 }}>No Data Founds :(</Text>
          </View>
          : list.map((value,i) => {
            return(
              <View style={{padding:40}} key={i}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>Name : {value.name}</Text>
                <Text>Email : {value.email}</Text>
                <Text style={{numberOfLines:1}}>Body : {value.body}</Text>
              </View>
            )
          })}
      </ScrollView>
    );
  }
}

