import * as React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default function Pokemon(props) {
  const { route } = props;
  console.log(route);
  return (
    <SafeAreaView>
      <Text>Pokemon Page 🧑🏽‍💻</Text>
    </SafeAreaView>
  );
}