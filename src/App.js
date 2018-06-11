/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common/';
import LoginForm from './components/LoginForm';
import fireBaseKey from '../secretkey';

type Props = {};

class App extends Component<Props> {

componentWillMount() {
  firebase.initializeApp(fireBaseKey);
}
  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <View style={styles.constainerStyle}>
          <LoginForm />
        </View>        
      </View>
    );
  }
}

const styles = {
  constainerStyle: {
    paddingTop: 100
  }
}

export default App;
