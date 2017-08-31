import React from 'react';
import {View, Text} from 'react-native';

import { navigationOptions } from '../config/navOptions';

export default class MeetupDetail extends React.Component{
    
    static navigationOptions = ({ navigation }) => ({
        title: `Evento de ${navigation.state.params.group}`,
        ...navigationOptions
    });

    render(){
        return (
            <View>
                <Text>MeetupDetail</Text>
            </View>
        )
    }
}