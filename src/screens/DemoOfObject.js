import React, {Component} from 'react';
import { Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';

export default class DemoOfObject extends Component{
  constructor(props){
    super(props)
    this.state = {
      data:{
        a:'1',
        b:'helllooo',
        c:'hiiiiii'
      }
    }
  }
  render(){
    const lastData = this.props.data

    console.log("this.props.data------------->", lastData.pop())
    return(
      <Text>Helloo</Text>
    )
  }

}