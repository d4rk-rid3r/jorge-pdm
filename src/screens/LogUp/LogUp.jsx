import React, { useState } from 'react';
import styles from './StyleLogUp';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../firebase/index';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function LogUp() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogUp = async () => {
        const auth = FIREBASE_AUTH;
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            console.log('User created successfully!')
            navigation.navigate('Main')
        } catch (error) {
            console.error('Authentication error:', error.message)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>CADASTRO</Text>
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

                <TouchableOpacity style={styles.button} onPress={handleLogUp}>
                    <Text style={styles.buttonText}>Criar conta</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}