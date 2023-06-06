import { View } from 'react-native';
import { Box, FlatList, HStack, VStack, Text, Spacer } from "native-base";

export const LogsList = props => {
    return (
        <FlatList data={props.data}
            renderItem={({ item }) =>
                <Box borderBottomWidth="1" borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                    <HStack space={[2, 3]} justifyContent="space-between" >
                        <View style={{ justifyContent: 'center' }}>
                            <Text backgroundColor={'red.400'} fontSize="xs" color="coolGray.800" alignSelf="flex-start">
                                {item.timeStamp}
                            </Text>
                        </View>

                        <VStack>
                            <Text color="coolGray.800" bold>
                                {item.fullName}
                            </Text>
                            <Text color="coolGray.600" >
                                {item.recentText}
                            </Text>
                        </VStack>
                        <Spacer />

                    </HStack>
                </Box>} keyExtractor={item => item.id} />
    )
}