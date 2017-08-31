import React from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { navigationOptions } from '../config/navOptions';

export default class MeetupDetail extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            event: {},
            assistants: []
        }
    }
    
    static navigationOptions = ({ navigation }) => ({
        title: `Evento de ${navigation.state.params.group}`,
        ...navigationOptions
    });

    componentWillMount(){
        this.setState({
            event: { id: 3, title: 'React native', groupName: 'LoopTalks', groupImage: 'https://dl.dropboxusercontent.com/u/12654912/elpunto/expresso-motivation.jpg' }
        });
    }

    render(){
        return (
            <ScrollView style={styles.container}>
                <Image style={styles.coverImage} source={require('../assets/networking-event.jpg')} />
                <Text style={styles.title}>Titulo del evento</Text>
                <View style={styles.info}>
                    <Icon style={styles.infoIcon} name="calendar-o" size={20} color="grey"/>
                    <View style={styles.infoTextContainer}>
                        <Text style={styles.infoText}>Una fecha</Text>
                        <Text style={styles.infoSubText}>Una segunda fecha</Text>
                    </View>
                </View>
                <View style={styles.info}>
                    <Icon style={styles.infoIcon} name="map-marker" size={20} color="grey"/>
                    <View style={styles.infoTextContainer}>
                        <Text style={styles.infoText}>Ubicacion</Text>
                        <Text style={styles.infoSubText}>Direccion</Text>
                    </View>
                </View>
                <View style={styles.info}>
                    <TouchableHighlight style={styles.registerButton} onPress={() => null}>
                        <View>
                            <Text style={styles.registerText}>Registrar</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.description}>
                    <Text style={styles.descriptionText}>Una bonita descripción</Text>
                </View>

            </ScrollView>
        )
    }
}

const styles = ({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    coverImage: {
        flex: 1,
        height: 240
    },
    title: {
        color: '#4b5f83',
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginVertical: 10
    },
    info: {
        flexDirection: 'row',
        marginHorizontal: 40
    },
    infoIcon: {
        margin: 10,
        marginRight: 22,
        textAlign: 'right'
    },
    infoText: {
        color: '#d8d8d8',
        fontSize: 17
    },
    infoSubText:{
        color: '#4b5f83',
    },
    infoTextContainer:{
        marginLeft: 20
    },
    registerButton: {
        flex: 1,
        backgroundColor: '#4b5f83',
        margin: 15,
        padding: 14,
        borderRadius: 5
    },
    registerText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    description: {
        backgroundColor: '#eaeaea',
        borderTopWidth: 1,
        borderColor: '#4b5f83',
        padding: 20,
        marginTop: 10
    },
    descriptionText: {
        fontSize: 18
    }
})