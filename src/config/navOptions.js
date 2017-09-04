import React from 'react';
import{
    View,
    Text,
    Button
} from 'react-native';

import { auth } from './firebase';

export const navigationOptions = {
    headerRight: (
        <View style={{ flexDirection: 'row', }}>
            <Text style={{ color: 'white', paddingVertical: 5, paddingRight: 5 }}>
                { auth.currentUser ? auth.currentUser.email : '' }
            </Text>
            <Button color='orangered' title='Salir' onPress={() => auth.signOut()}></Button>
        </View>
    ),
    headerStyle: {
        backgroundColor: '#4b5f83',
        paddingTop: 15,
        paddingHorizontal: 10,
        height: 55
    },
    headerTitleStyle: {
        color: 'white'
    },
    headerTintColor: 'white'
}