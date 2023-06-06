import { Box, Heading, Button } from "native-base";
import { LogsList } from '../components/LogsList';
import { LogoBanner } from '../components/LogoBanner';
import { View } from 'react-native';

/**
 *  dummy dataSet - should be replaced for dynamic data fetched from IoT or produced by the device
 */
const data = [{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "IoT Console",
    timeStamp: "2023-06-01 12:11:11",
    recentText: "[Action] Reboot device",
    avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
}, {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fullName: "Android Device",
    timeStamp: "2023-06-01 11:11:11",
    recentText: "Android device connected!",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
}];

export const ConsoleScreen = ({ navigation }) => {
    return (
        <View style={{ height: "100%" }}>
            <LogoBanner />
            <Box>
                <Heading fontSize="xl" p="4" pb="3">WatchTower Logs</Heading>
                <LogsList data={data} />
            </Box>
            <Box alignSelf="flex-end" position="absolute" bottom="2" alignItems="center">
                <Button marginRight="2" size="sm" colorScheme="red"
                    onPress={() =>
                        navigation.navigate('DemoScreen', { message: 'hello from main screen!' })
                    }
                >Go to secondary page</Button>
            </Box>
        </View>
    )
};
