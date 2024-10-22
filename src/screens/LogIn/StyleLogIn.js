import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },

    main: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        width: 230,
        height: 60,
        margin: 20,
        fontSize: 22,
        color: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        borderRadius: 15,
    },

    button: {
        width: 200,
        height: 80,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        borderRadius: 20,
    },

    buttonText: {
        textAlign: 'center',
        fontSize: 22,
        color: '#fff',
    },

    title: {
        fontSize: 22,
        fontFamily: 'Arial',
        top: -170,
    }
});

export default styles;