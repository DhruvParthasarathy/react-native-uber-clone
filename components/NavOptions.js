
import React from 'react'

import {useNavigation} from '@react-navigation/native'
import { Text, TouchableOpacity, View, FlatList, Image } from 'react-native'

import {Icon} from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'

const data = [
    {
        id: '123',
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },

    {
        id: '456',
        title: "Order Food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen"
    },

]
export default function NavOptions() {
    const navigation = useNavigation();
    return (
        <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <TouchableOpacity style={tw`p-4 bg-gray-200 m-1`} 
            onPress={() => {
                if(item.screen == "MapScreen") navigation.navigate(item.screen)
                }}>
                <View>
                    <Image
                    source={{ uri:item.image}}
                    style={
                        {
                            width: 120,
                            height: 120,
                            resizeMode:'contain'
                        }
                    }
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>
                        {item.title}
                    </Text>
                    <Icon
                    style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                    type="antdesign"
                    name="arrowright"
                    color="white" />
                </View>
            </TouchableOpacity>
        )}
        />
    )
}


