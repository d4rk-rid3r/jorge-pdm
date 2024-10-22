import React from 'react';
import styles from './StyleHome';
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <View style={styles.buttonContainer}></View>
                <Text style={styles.firtsTitle}>WELCOME</Text>
                    <View style={styles.circle}></View>
                    <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('LogIn')}>
                        <Text style={styles.buttonText}>Log-In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('LogUp')}>
                        <Text style={styles.buttonText}>Log-Up</Text>
                    </TouchableOpacity>
                    <View style={styles.header}></View>
            </View>
        </SafeAreaView>
    );
}