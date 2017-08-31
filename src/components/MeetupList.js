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
                {this.state.events.map((event, i) => (
                    <TouchableWithoutFeedback>
                        <View>
                            <Image />
                            <View>
                                <Text>{event.title}</Text>
                                <Text>{event.groupName}</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                ))}
            </ScrollView>
        )
    }
}