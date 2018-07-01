import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import firebase from 'firebase';

import { Button, Card, CardSection, Input, Spinner } from './common';

type Props = {};

class LoginForm extends Component<Props> {

	state = { email: '', password: '', error: '', loading: false, createUser: false };

	onButtonPress() {
		const { email, password } = this.state;
		this.setState({ error: '' });
    this.setState({ loading: true });

    if (!this.state.createUser) {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this));
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onCreateUserFail.bind(this));
    }
	}

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
      createUser: false
    });
  }

  onLoginFail(error) {
    this.setState({ error: error.message, loading: false });
    if (error.message ===
      'There is no user record corresponding to this identifier. The user may have been deleted.') {
        this.setState({ createUser: true });
    }
  }

  onCreateUserFail(error) {
    this.setState({ error: error.message, loading: false });
  }
  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    if (this.state.createUser) {
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
        Create User
        </Button>
      );
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
      Log In
      </Button>
    );
  }

	render() {
		return (
			<Card>
				<CardSection >
					<Input
						placeholder="user@gmail.com"
						label="Email"
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					/>
				</CardSection>
				<CardSection>
					<Input
						placeholder="password"
						label="Password"
						secureTextEntry
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>
				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>
				<CardSection>
					{this.renderButton()}
				</CardSection>
		</Card>
  );
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

export default LoginForm;
