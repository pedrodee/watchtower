import { StyleSheet, View, Image } from 'react-native';

export const LogoBanner = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/cf_logo.png')} style={styles.logo} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ee1c25',
        height: 60,
        margin: 10,
        padding: 10,
        borderRadius: 15,
    },
    logo: {
        width: null,
        height: null,
        flex: 1,
        resizeMode: 'contain'
    },
});
