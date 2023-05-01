import * as React from 'react';
import {View, StyleSheet} from 'react-native';

//  Import components
import LoginForm from '../components/Auth/LoginForm';
import UserData from '../components/Auth/UserData';
//  Import hooks
import useAuth from '../hooks/useAuth';

export default function Account() {
  const {auth} = useAuth();
  // const auth = null;

  return (
    <View style={styles.container}>
      {auth ? (
        <UserData />
      ) : (
        <LoginForm />
      )}
    </View>
  );
}

//  Styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#357',
    height: '100%',
  },
});