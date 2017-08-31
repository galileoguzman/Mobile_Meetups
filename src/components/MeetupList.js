import React from 'react';

import {
    View,
    ScrollView,
    Text,
    Image,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';

export default class MeetupList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            events : []
        }
    }

    render(){
        return(
            <ScrollView>
                <Text>Hola mundo</Text>
            </ScrollView>
        )
    }
}