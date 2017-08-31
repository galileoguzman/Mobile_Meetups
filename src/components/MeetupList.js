import React from 'react';

import {
    View,
    ScrollView,
    Text,
    Image,
    TouchableWithoutFeedback,
    StyleSheet,
    Dimensions,
    ActivityIndicator
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class MeetupList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            events : [],
            isLoading : true
        }
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Meetups',
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
    });

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                events: [
                    {title: 'Bitcoin OX', groupName: 'LoopTalks', groupImage: 'https://dl.dropboxusercontent.com/u/12654912/elpunto/expresso-motivation.jpg'},
                    {title: 'Management', groupName: 'LoopTalks', groupImage: 'https://dl.dropboxusercontent.com/u/12654912/elpunto/expresso-motivation.jpg'},
                    {title: 'React native', groupName: 'LoopTalks', groupImage: 'https://dl.dropboxusercontent.com/u/12654912/elpunto/expresso-motivation.jpg'},
                    {title: 'Mobile development', groupName: 'LoopTalks', groupImage: 'https://dl.dropboxusercontent.com/u/12654912/elpunto/expresso-motivation.jpg'},
                    {title: 'JS for living', groupName: 'LoopTalks', groupImage: 'https://dl.dropboxusercontent.com/u/12654912/elpunto/expresso-motivation.jpg'},
                    {title: 'iOS Dev', groupName: 'LoopTalks', groupImage: 'https://dl.dropboxusercontent.com/u/12654912/elpunto/expresso-motivation.jpg'}
                ],
                isLoading: false
            });
        }, 4000);
    }

    render(){
        return this.state.isLoading
        ? (<ActivityIndicator style={styles.loader} color="#4b5f83"/>)
        : (<ScrollView style={styles.container}>
                {this.state.events.map((event, i) => (
                    <TouchableWithoutFeedback
                        key={ i }
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
            </ScrollView>)
    }
}

const styles = StyleSheet.create({
    loader: {
        marginTop: 200
    },
    container:{
        flex: 1,
        margin: 10,
        height
    },
    card: {
        backgroundColor: '#eee',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 3,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 100,
        marginVertical: 4
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