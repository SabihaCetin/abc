import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    View,
    Dimensions
} from 'react-native';


const deviceWidth = Dimensions.get('window').width;


export default class Main extends Component {


    render() {
        return (
            <View style={{}}>

                <View style={{alignItems: 'flex-end', width: deviceWidth, marginTop:10, marginBottom:10}}>
                    <Text style={{color: '#4A90E2', fontSize: 14, marginRight: 20}}>Add Offer</Text>
                </View>


                <View>

                    <Text style={{fontSize: 16, marginRight: 20, marginLeft: 20}}>Dec. 32th - Friday</Text>

                    <View style={{flexDirection: 'row'}}>


                        <Image source={require('./img/File1.png')}
                               style={{width: 60, height: 80, marginTop: 15, marginLeft: 25}}/>

                        <Text style={{marginTop: 15, marginLeft: 10}}> Yer gösterme belgeseli - Ev id : 215</Text>


                    </View>
                    <View style={{alignItems: 'flex-end', }}>
                        <Text style={{color: '#4A90E2', fontSize: 14, marginRight: 20}}>delete</Text>
                    </View>
                </View>


                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#AFAFAF',
                    width: deviceWidth,
                    marginTop: 20,
                    marginBottom: 20
                }}/>








                <View>

                    <Text style={{fontSize: 16, marginRight: 20, marginLeft: 20}}>Dec. 28th - Friday</Text>

                    <View style={{flexDirection: 'row'}}>


                        <Image source={require('./img/File2.png')}
                               style={{width: 60, height: 80, marginTop: 15, marginLeft: 25}}/>

                        <Text style={{marginTop: 15, marginLeft: 10}}> Kimlik belgeseli</Text>


                    </View>
                    <View style={{alignItems: 'flex-end', }}>
                        <Text style={{color: '#4A90E2', fontSize: 14, marginRight: 20}}>delete</Text>
                    </View>
                </View>


                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#AFAFAF',
                    width: deviceWidth,
                    margin:20
                }}/>




                <View>

                    <Text style={{fontSize: 16, marginRight: 20, marginLeft: 20}}>Dec. 28th - Friday</Text>

                    <View style={{flexDirection: 'row'}}>


                        <Image source={require('./img/File1.png')}
                               style={{width: 60, height: 80, marginTop: 15, marginLeft: 25}}/>

                        <Text style={{marginTop: 15, marginLeft: 10}}> Yer gösterme belgeseli - Ev id : 78</Text>


                    </View>
                    <View style={{alignItems: 'flex-end', }}>
                        <Text style={{color: '#4A90E2', fontSize: 14, marginRight: 20}}>delete</Text>
                    </View>
                </View>


                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#AFAFAF',
                    width: deviceWidth,
                    margin:20,
                    marginBottom:70
                }}/>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,


        backgroundColor: '#fff',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
