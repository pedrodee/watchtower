import { View } from 'react-native';
import { Text } from 'native-base';

export const DemoScreen = ({navigation,route}) => {
    return (
        <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text color={'#000000'}>Another Screen!</Text>
            <Text color={'#000000'}>and a message from main screen: <Text italic>{route.params.message}</Text></Text>
        </View>
    )
}