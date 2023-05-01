import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// hooks
import useAuth from '../../hooks/useAuth';

export default function UserData() {
   const { auth, logout } = useAuth();

   return (
      <View style={styles.container}>
         <View
            style={styles.titleBlock}
         >
            <Text
               style={styles.title}
            >
               Welcome, {auth.firstName} {auth.lastName}
            </Text>
         </View>
         <View>
            <ItemMenu title="Username" text={auth.username} />
            <ItemMenu title="Email" text={auth.email} />
            <ItemMenu title="Phone" text={auth.phone} />
            <ItemMenu title="TotalFavs" text={'0 Pokemons'} />
         </View>
         <TouchableOpacity
            style={styles.button}
            onPress={() => logout()}
         >
            <Text
               style={styles.buttonText}
            >
               Logout
            </Text>
         </TouchableOpacity>
      </View>
   );
}

function ItemMenu(props) {
   const { title, text } = props;

   return (
      <View
         style={styles.ItemMenu}
      >
         <Text
            style={styles.itemMenuTitle}
         >
            {title}:
         </Text>
         <Text
            style={styles.itemMenuInfo}
         >
            {text}
         </Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      marginHorizontal: 20,
      marginTop: 50,
      height: '100%',
   },
   titleBlock: {
      marginBottom: 30,
   },
   title: {
      color: '#fff',
      fontSize: 20,
      textAlign: 'center',
      top: 0,
   },
   info: {
      color: '#fff',
      fontSize: 16,
      textAlign: 'center',
      marginTop: 20,
      top: 0,
   },
   button: {
      position: 'absolute',
      width: '100%',
      padding: 10,
      marginTop: 20,
      borderRadius: 20,
      backgroundColor: '#0098d330',
      bottom: 90,
   },
   buttonText: {
      textAlign: 'center',
      fontSize: 18,
      color: '#fff',
   },
   ItemMenu: {
      flexDirection: 'row',
      paddingVertical: 10,
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: '#fff',
   },
   itemMenuTitle: {
      fontWeight: 'bold',
      paddingRight: 10,
      width: 120,
      color: '#fff',
   },
   itemMenuInfo: {
      color: '#fff',
   },
});