/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux/native'
import App from './containers/App'
import todoApp from './reducers'

let store = createStore(todoApp);

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component
} = React;


class RNSwift extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    );
  }  
};

AppRegistry.registerComponent('RNSwift', () => RNSwift);
