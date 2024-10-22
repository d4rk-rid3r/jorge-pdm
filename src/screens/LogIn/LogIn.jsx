import React, { useState } from 'react';
import styles from './StyleLogIn';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../firebase/index';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LogIn() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogIn = async () => {
        const auth = FIREBASE_AUTH;
        try {
            await signInWithEmailAndPassword(auth, email, password)
            console.log('User signed in successfully!')
            navigation.navigate('Main')
        } catch (error) {
            console.error('Authentication error:', error.message)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>LOGI-IN</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder='Digite seu e-mail'
                    placeholderTextColor={'#fff'}
                    keyboardType='email-address'
                />

                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder='Digite sua senha'
                    placeholderTextColor={'#fff'}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.button} onPress={handleLogIn}>
                    <Text style={styles.buttonText}>Entrar na conta</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}