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
        top:-90,
        width: 230,
        height: 60,
        margin: 20,
        fontSize: 20,
        color: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        borderRadius: 15,
    },

    button: {
        top:0,
        width: 200,
        height: 80,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        borderRadius:20,
    },

    buttonText: {
        textAlign: 'center',
        fontSize: 22,
        color: '#fff',
        fontFamily: 'Arial',
    },

    title: {
        fontSize: 30,
        justifyContent: 'center',
        top: -170,
        fontFamily: 'Arial', 
    }
});

export default styles;