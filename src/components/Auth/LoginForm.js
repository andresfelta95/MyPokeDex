import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native';
// Formik
import { useFormik } from 'formik';
// Yup
import * as Yup from 'yup';
// import DB
import { user, usersDetails } from '../../utils/userDB';
// Hooks
import useAuth from '../../hooks/useAuth';

export default function LoginForm() {
    const [ error, setError ] = React.useState('');
    const { login } = useAuth();

    console.log(useAuth());

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (formData) => {
            setError('');
            const { username, password } = formData;

            if (username === user.username && password === user.password) {
                console.log(usersDetails);
                login(usersDetails);
            } else {
                setError('Username or password incorrect.');
            }

            Keyboard.dismiss();
        }
    });

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
                value={formik.values.username}
                onChangeText={(text) => formik.setFieldValue('username', text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#969696"
                secureTextEntry={true}
                autoCapitalize='none'
                value={formik.values.password}
                onChangeText={(text) => formik.setFieldValue('password', text)}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={formik.handleSubmit}
            >
                <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>
                    Login
                </Text>
            </TouchableOpacity>

            <Text style={styles.ErrorMessage}>
                {formik.errors.username}
            </Text>

            <Text style={styles.ErrorMessage}>
                {formik.errors.password}
            </Text>

            <Text style={styles.ErrorMessage}>
                {error}
            </Text>

        </View>
    );
}

function initialValues() {
    return {
        username: '',
        password: '',
    }
}

function validationSchema() {
    return {
        username: Yup.string().required('Username Required.').min(4, true).max(12, true), // 'true' to use the 'strict' mode
        password: Yup.string().required('Password Required.').min(4, true),
    }

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
    ErrorMessage: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 15,
    },
});