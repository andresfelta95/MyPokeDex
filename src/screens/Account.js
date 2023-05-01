import * as React from 'react';
import {View} from 'react-native';

//  Import components
import LoginForm from '../components/Auth/LoginForm';
import UserData from '../components/Auth/UserData';
//  Import hooks
import useAuth from '../hooks/useAuth';

export default function Account() {
  const {auth} = useAuth();
  // const auth = null;

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