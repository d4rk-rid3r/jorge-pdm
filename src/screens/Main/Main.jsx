import React from 'react';
import styles from './StyleMain';
import { SafeAreaView, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Main() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Text>Teste</Text>
        </SafeAreaView>
    );
}