import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f8ff',
        
    },

    main: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        width: 200,
        height: 80,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        top: -100,
    },

    buttonText: {
        textAlign: 'center',
        fontSize: 22,
        color: '#fff',
    },
    
    buttonContainer: {
        width: 344,
        height: 500,
        top: -190,
        right: 70,
        borderRadius: 10,
        backgroundColor: '#0f0', 
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000', 
    },
    circle: {
        borderRadius: "100%",
        width: 90,
        height: 100,
        backgroundColor: 'white',
        top: -370,
        justifyContent: 'center',
        alignItems: 'center',
    },

    firtsTitle: {
        fontSize: 34,
        fontFamily: 'Arial'
    },

    header: {
        width: 346,
        height: 200,
        borderRadius:30,
        top: 50,
        backgroundColor: '#0f0',
        alignItems: 'center',
    },
});

export default styles;