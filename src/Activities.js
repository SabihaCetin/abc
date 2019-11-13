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
            <View style={{alignItems:'center'}}>





                <Image source={require('./img/Bitmap.png')}
                       style={{width: 200, height: 120, marginTop:50}}/>
                       <Text style={{fontSize:24, marginTop:20}}>Add Activities</Text>

                       <Text style={{fontSize:14, textAlign:'center',width:250, marginTop:20, marginBottom:20, weight:250, color:'#9B9B9B'}}>Add your clients activities here and Aidy will keep track of all.You will no longer miss a single cliert task or forget an activity.</Text>



                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#AFAFAF',
                    width: deviceWidth,
                    marginTop: 10,
                    marginBottom: 10
                }}/>


                <Text style={{color:'#4A90E2', fontSize:17}}>Add Task</Text>
                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#AFAFAF',
                    width: deviceWidth,
                    marginTop: 10,
                    marginBottom: 10
                }}/>


                <Text style={{color:'#4A90E2', fontSize:17}}>Add Showing</Text>
                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#AFAFAF',
                    width: deviceWidth,
                    marginTop: 10,
                    marginBottom: 10
                }}/>


                <Text style={{color:'#4A90E2', fontSize:17}}>Add Offer</Text>




                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#AFAFAF',
                    width: deviceWidth,
                    marginTop: 10,
                    marginBottom: 70,

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
