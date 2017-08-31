import React from 'react';

import {
    View,
    ScrollView,
    Text,
    Image,
    TouchableWithoutFeedback,
    StyleSheet,
    Dimensions
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class MeetupList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            events : []
        }
    }

    render(){
        return(
            <ScrollView style={styles.container}>
                {this.state.events.map((event, i) => (
                    <TouchableWithoutFeedback
                        onPress={() => null}
                    >
                        <View style={styles.card}>
                            <Image style={styles.image} source={{uri : event.groupImage}}/>
                            <View style={styles.cardContent}>
                                <Text style={styles.title}>{event.title}</Text>
                                <Text>{event.groupName}</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                ))}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 10,
        height
    },
    card: {
        backgroundColor: '#ddd',
        borderColor: '#d9d9d9',
        borderWidth: 1,
        borderRadius: 3,
        flex: 1,
        flexDirection: 'row',
        justify: 'space-between',
        height: 100
    },
    image: {
        height: 100,
        width: 100
    },
    cardContent:{
        flex: 1,
        padding: 10,
        margin: 0
    },
    titles: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})