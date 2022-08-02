import React from 'react'
import GlobalStyles from '../GlobalStyles'
import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env"

import tw from "tailwind-react-native-classnames"
import NavOptions from '../components/NavOptions'
import {useDispatch} from 'react-redux';

const HomeScreen = () => {
    const dispatch = useDispatch();
    return (
        <SafeAreaView 
        style={
            GlobalStyles.droidSafeArea,
            tw`bg-white h-full p-5`
            }>
            <View>
                <Image
                style={{width: 100, height: 100, resizeMode: "contain"} }
                source={{ uri: "https://links.papareact.com/gzs"}} />

                <GooglePlacesAutocomplete
                    placeholder='Where from?'
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        }
                    }}
                    debounce={400}
                    onFail={(error) => console.log(error)}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en',
                    }}
                    minLength={2}
                    enablePoweredByContainer={false}
                    returnKeyType="Search"
                    />
                <NavOptions/>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({


})
