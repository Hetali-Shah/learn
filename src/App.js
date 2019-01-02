/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Router, Scene} from "react-native-router-flux";

import Main from './screens/Main';
import Search from './screens/Search';
import Ascending from './screens/Ascending';
import Descending from './screens/Descending';
import DemoOfObject from './screens/DemoOfObject';


const App = () => {
  return (
    <Router>
      <Scene>
        <Scene
          key="Main"
          component={Main}
          title="Main"
          initial
        />
        <Scene
          key="Search"
          component={Search}
          title="Search"
        />
        <Scene
          key="Ascending"
          component={Ascending}
          title="Ascending"
        />
        <Scene
          key="Descending"
          component={Descending}
          title="Descending"
        />
        <Scene
          key="DemoOfObject"
          component={DemoOfObject}
          title="DemoOfObject"
        />
      </Scene>
    </Router>
  )
}

export default App;