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

import { Header, Button, Spinner, CardSection } from './components/common/';
import LoginForm from './components/LoginForm';
import fireBaseKey from '../secretkey';

type Props = {};

class App extends Component<Props> {

  state = { loggedIn: null };

componentWillMount() {
  firebase.initializeApp(fireBaseKey);

  firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      this.setState({loggedIn: true});
    } else {
      this.setState({loggedIn: false});
    }
  });
}

renderContent() {
  switch (this.state.loggedIn) {
    case true:
      return (
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()} >
            Log Out
          </Button>
        </CardSection>
      );
    case false:
      return <LoginForm />;
    default:
      return <Spinner size="large"/>;
  }
}
  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <View style={styles.constainerStyle}>
          {this.renderContent()}
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
