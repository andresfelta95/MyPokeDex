import * as React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard} from 'react-native';

export default function LoginForm() {
    
      const auth = null;
    
      return (
     <View style={styles.form}>
        <Text style={styles.title}>
            Login
        </Text>

        <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#969696"
            autoCapitalize='none'
        />

        <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#969696"
            secureTextEntry={true}
            autoCapitalize='none'
        />

        <TouchableOpacity
            style={styles.button}
            onPress={Keyboard.dismiss}
        >
            <Text style={{color: '#fff', fontSize: 18, textAlign: 'center'}}>
                Login
            </Text>
        </TouchableOpacity>
        
     </View>
      );
    }


const styles = StyleSheet.create({
    form: {
        marginTop: 30,
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 10,
        color: '#fff',
        textAlign: 'center',
    },
    input: {
        height: 40,
        color: '#fff',
        width: '80%',
        marginBottom: 25,
        backgroundColor: '#1e3040',
        paddingHorizontal: 20,
        borderRadius: 50,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#1e3040',
    },
    button: {
        backgroundColor: '#0098d3',
        borderRadius: 50,
        width: '80%',
        marginBottom: 20,
        paddingVertical: 10,
    },
});