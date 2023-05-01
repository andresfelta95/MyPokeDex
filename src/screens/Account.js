import * as React from 'react';
import {View} from 'react-native';

//  Import components
import LoginForm from '../components/Auth/LoginForm';
import UserData from '../components/Auth/UserData';

export default function Account() {

  const auth = null;

  return (
    <View style={{backgroundColor: '#357', height: '100%'}}>
      {auth ? (
        <UserData />
      ) : (
        <LoginForm />
      )}
    </View>
  );
}