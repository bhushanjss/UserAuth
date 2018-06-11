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

type Props = {};

class App extends Component<Props> {

componentWillMount() {
  firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: '',
    messagingSenderId: process.env.FIREBASE_MESSENGER_ID
  });
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
