import {StatusBar} from 'expo-status-bar';
import { View } from 'react-native'
import React, { Component } from 'react'
import { initializeApp } from "firebase/app";
import { Header } from './components/common'
import LoginForm from './components/LoginForm';


export class App extends Component {
  UNSAFE_componentWillMount() {
    initializeApp({
      apiKey: "AIzaSyDoUWl2ZzaInMUeQ7n0FY-QZ7pLfavyEyM",
      authDomain: "auth-47c84.firebaseapp.com",
      projectId: "auth-47c84",
      storageBucket: "auth-47c84.appspot.com",
      messagingSenderId: "161064194291",
      appId: "1:161064194291:web:27286fb73b9f1352392786"
    });

  }
  render() {
    return (
      <View>
        <StatusBar style='auto' />
          <Header headerText={'Authentication'} />
            <LoginForm />
      </View>
    )
  }
}

export default App
