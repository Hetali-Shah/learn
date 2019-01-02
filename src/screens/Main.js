/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Main extends Component<Props> {

  constructor(props){
    super(props)
    this.state = {
      data: [
        {
          "postId": 1,
          "id": 50,
          "name": "vero eaque aliquid doloribus et culpa",
          "email": "Hayden@althea.biz",
          "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
        },
        {
          "postId": 1,
          "id": 1,
          "name": "labore",
          "email": "Eliseo@gardner.biz",
          "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        },

        {
          "postId": 1,
          "id": 3,
          "name": "odio",
          "email": "Nikita@garfield.biz",
          "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
        },
        {
          "postId": 1,
          "id": 8,
          "name": "quo",
          "email": "Jayne_Kuhic@sydney.com",
          "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
        },
        {
          "postId": 1,
          "id": 4,
          "name": "alias",
          "email": "joe@aol.com ",
          "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
        },

      ],
      selectedTask :'',
      values:[
        {
          title:'Dsc', value:'Dsc',
        },
        {
          title:'Asc', value:'Asc',
        },
        {
          title:'ById', value:'ById'
        }
      ],
      searchTerm: '',
      ascendingData:[],
    }
  }

  _printData = () => {
    {/*{ this.state.data.filter(value => value.id == 5).map((data,i) => this._printSingleData(data,i))}*/}
    {/*{this.state.data*/}
    {/*.filter((keyword, index) => keywords.lastIndexOf(keyword) === index)*/}
    {/*.sort((a, b) => a < b ? -1 : 1); }*/}
    //     //.map((value => (<Text key={value}>{value}</Text>)))
    // _printSingleData = (data, i) => (
    //   <View key={i}>
    //     <Text>{data.name}</Text>
    //   </View>
    // )
    const filterEmail = [];
    //const lastIndex = this.state.data.filter((dataa, index) => this.state.data.lastIndexOf(dataa) === index).sort((a,b) => a.id - b.id)
    //const lastIndex = asc[asc.length - 1];

    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const filterByEmail = this.state.data.filter(value => value.email).map((value) => {
      console.log("email==========>",filterByEmail)
      if(reg.test(value.email.toLowerCase()) === true) {
        filterEmail.push(value.email)
      } else {
        console.log("filterEmail")
      }
    })
    console.log("filterEmail",filterEmail)
    // <View style={{fontSize:14,fontWeight: 'bold'}}>
    // {this._printData()}
    // <View>
    //   {/*<Picker*/}
    //   {/*mode="dropdown"*/}
    //   {/*selectedValue={selectedTask}*/}
    //   {/*onChange={this._handleChange(selectedTask)}*/}
    //   {/*onValueChange={(selectedTask) => this.setState({selectedTask})}*/}
    //   {/*>*/}
    //   {/*{*/}
    //   {/*values.map(value => (*/}
    //   {/*<Picker.Item label={value.title} value={value.value}/>*/}
    //   {/*))*/}
    //   {/*}*/}
    //   {/*</Picker>*/}
    //   <Text>figih</Text>
    // </View>
    // </View>
  };

  _handleChange = (selectedTask) => {
    console.log("selectedTask====>", selectedTask)
    if(selectedTask === 'Dsc') {
      return(<View>
        <Text style={{borderWidth: 3}}>{selectedTask}</Text>
      </View>)
    }
  }

  _sortBy(){
    console.log("bjbj")
    const myData = [].concat(this.state.data)
      .sort((a, b) => a.id > b.id)
    console.log("myData",myData)
    console.log("array", this.state.data.sort().reverse())
  }

  render() {
    return (
        <View>
          <TouchableHighlight
            onPress={() => Actions.Search(this.state.data)}
          >
            <Text>Search...</Text>
          </TouchableHighlight>
          <TouchableOpacity
            onPress={() => Actions.Ascending(this.state.data.filter(value => value.name).sort((a,b) => a.name - b.name))}
          >
            <Text>Ascending...</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Actions.Descending(this.state.data.filter(value => value.name).sort((a,b) => b.name - a.name))}
          >
            <Text>Descending...</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Actions.DemoOfObject(this.state.data)}
          >
            <Text>DemoOfObject...</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {this._sortBy()}}
          >
            <Text>sortBy...</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

