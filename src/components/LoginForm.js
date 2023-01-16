import React, { Component } from 'react'
import {signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { Button, Card, CardSection, Input, Spinner } from './common'
import { Text } from 'react-native';

export class LoginForm extends Component {
  state = {
    email: "",
    password: '',
    error: '',
    loading:false,
}
  
  onButtonPress() {
    const auth = getAuth();
    const { email, password } = this.state;
    this.setState({ error: '', loading:true });
    signInWithEmailAndPassword(auth, email, password)
      .catch(() => {
        createUserWithEmailAndPassword(auth, email, password)
          .catch(() => {
            this.setState({error: 'Authentication Failed'})
        })
    })
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />
    }
    
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
          Log In
      </Button>
    )
  }

  render() {
    return (
      <Card>
            <CardSection>
                <Input
                    placeholder={"example@gmail.com"}
                    label={'Email'}
                    value={this.state.email}
                    onChangeText={email => this.setState({email})}
                    style={{ height: 20, width: 100 }} />
            </CardSection>
            <CardSection>
                <Input
                    secureTextEntry
                    placeholder={"password"}
                    label={'Password'}
                    value={this.state.password}
                    onChangeText={password => this.setState({password})}
                    style={{ height: 20, width: 100 }} />
            </CardSection>
            
            <Text style={styles.errorTextStyle}>
              {this.state.error}
            </Text>
            <CardSection>
                {this.renderButton()}
            </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'center',
    color:'red'
  }
}

export default LoginForm