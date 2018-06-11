import React, { Component } from 'react';
import {
  View
} from 'react-native';
import firebase from 'firebase';

import { Button, Card, CardSection, Input } from './common';

type Props = {};

class LoginForm extends Component<Props> {

	state = { email: '', password: '' };

	render() {
		return(
			<Card>
				<CardSection >
					<Input 
						placeholder="user@gmail.com"
						label="Email"
						value={this.state.email}
						onChangeText={email => this.setState( { email })}
					/>
				</CardSection>
				<CardSection>
					<Input 
						placeholder="password"
						label="Password"
						secureTextEntry
						value={this.state.password}
						onChangeText={password => this.setState( { password })}
					/>
				</CardSection>
				<CardSection>
					<Button>
					Log In
					</Button>
				</CardSection>
		</Card>
		)		
	}
}

export default LoginForm;