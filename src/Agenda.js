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
            <View>
                <View style={{
                    borderBottomWidth: 0.5,
                    borderBottomColor: '#AFAFAF',
                    paddingLeft: 20,
                    paddingBottom: 5,
                    paddingTop: 10
                }}>
                    <Text style={{fontSize: 16, lineHeight: 20, fontWeight: 'bold'}}> Client Requests
                        (1)</Text>

                </View>

                <View style={{flexDirection: 'row', paddingTop: 20}}>
                    <View style={{flex: 1}}>

                        <Image source={require('./img/Oval2.png')}
                               style={{width: 38, height: 38, marginLeft: 20}}/>

                    </View>
                    <View style={{flex: 4}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flex: 3, flexDirection: 'row'}}>
                                <Text style={{fontSize: 14, lineHeight: 17, fontWeight: 'bold'}}>
                                    Can Erenberk
                                </Text>

                                <View style={{
                                    backgroundColor: '#FF3B30',
                                    width: 15,
                                    height: 15,
                                    borderRadius: 45,
                                    marginLeft: 10
                                }}/>
                            </View>

                            <View style={{flex: 2}}>
                                <Text style={{fontSize: 12, lineHeight: 14, color: '#9B9B9B'}}>Yesterday
                                    12:24 pm</Text>
                            </View>

                        </View>
                        <Text style={{fontSize: 14, lineHeight: 17, color: '#4A4A4A', marginTop: 8}}>
                            Can requested a showing.
                        </Text>


                        <Text style={{
                            fontSize: 16,
                            lineHeight: 19,
                            color: '#4A4A4A',
                            marginTop: 20,
                            marginBottom: 10
                        }}>
                            Can Erenberk
                        </Text>
                        <Text style={{fontSize: 14, lineHeight: 16, color: '#9B9B9B'}}>Yesterday
                            Up to €250.000 | Essex, Kesington or Oxfordshire
                        </Text>


                        <View style={{flexDirection: 'row', marginTop: 20}}>
                            <View style={{

                                borderColor: '#4A90E2',
                                borderWidth: 1,
                                width: 95,
                                height: 27,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 5,
                                backgroundColor: '#4A90E2'
                            }}>
                                <Text style={{color: '#fff', fontSize: 14, fontFamily: 'Helvetica Neue'}}>Take
                                    Action</Text>
                            </View>


                            <View style={{

                                borderColor: '#4A90E2',
                                marginLeft: 10,
                                borderWidth: 1,
                                width: 95,
                                height: 27,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 5
                            }}>
                                <Text
                                    style={{color: '#4A90E2', fontSize: 14, fontFamily: 'Helvetica Neue'}}>Add
                                    Showing</Text>
                            </View>
                        </View>


                    </View>


                </View>


                <View>
                    <View style={{
                        borderBottomWidth: 0.5,
                        borderBottomColor: '#AFAFAF',
                        paddingLeft: 20,
                        paddingBottom: 5,
                        paddingTop: 10,
                        marginTop: 30
                    }}>
                        <Text style={{fontSize: 16, lineHeight: 20, fontWeight: 'bold'}}> Suggestions
                            (2)</Text>

                    </View>


                </View>
                <View>


                    <View style={{flexDirection: 'row', paddingTop: 20}}>
                        <View style={{flex: 1,}}>

                            <Image source={require('./img/renkliAvatar.png')}
                                   style={{width: 38, height: 38, marginLeft: 20}}/>
                            <Image source={require('./img/A.png')}
                                   style={{
                                       width: 20,
                                       height: 20,
                                       marginLeft: 28,
                                       marginTop: 8,
                                       position: 'absolute',
                                       zIndex: 2
                                   }}/>

                        </View>
                        <View style={{flex: 4}}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flex: 3, flexDirection: 'row'}}>
                                    <Text style={{fontSize: 14, lineHeight: 17, fontWeight: 'bold'}}>
                                        ABC
                                    </Text>

                                    <View style={{
                                        backgroundColor: '#FF3B30',
                                        width: 15,
                                        height: 15,
                                        borderRadius: 45,
                                        marginLeft: 10
                                    }}/>
                                </View>

                                <View style={{flex: 2}}>
                                    <Text style={{fontSize: 12, lineHeight: 14, color: '#9B9B9B'}}>Yesterday
                                        12:24 pm</Text>
                                </View>

                            </View>
                            <View>
                                <Text
                                    style={{fontSize: 14, lineHeight: 17, color: '#4A4A4A', marginTop: 8}}>
                                    There are potential new matches for this property if missing information
                                    is complete.
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                    lineHeight: 17,
                                    color: '#4A90E2',


                                }}>
                                    ... show more
                                </Text>
                            </View>


                            <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 20}}>
                                <View style={{

                                    borderColor: '#4A90E2',
                                    borderWidth: 1,
                                    width: 95,
                                    height: 27,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 5,
                                    backgroundColor: '#4A90E2'
                                }}>
                                    <Text
                                        style={{color: '#fff', fontSize: 14, fontFamily: 'Helvetica Neue'}}>Take
                                        Action</Text>
                                </View>


                                <View style={{

                                    borderColor: '#4A90E2',
                                    marginLeft: 10,
                                    borderWidth: 1,
                                    width: 95,
                                    height: 27,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 5
                                }}>
                                    <Text
                                        style={{
                                            color: '#4A90E2',
                                            fontSize: 14,
                                            fontFamily: 'Helvetica Neue'
                                        }}>Add
                                        Showing</Text>
                                </View>
                            </View>


                        </View>


                    </View>


                </View>

                <View>
                    <View style={{
                        borderBottomWidth: 0.5,
                        borderBottomColor: '#AFAFAF',
                        paddingLeft: 20,
                        paddingBottom: 5,
                        paddingTop: 10,

                    }}>


                    </View>


                    <View style={{flexDirection: 'row', paddingTop: 20}}>
                        <View style={{flex: 1,}}>

                            <Image source={require('./img/renkliAvatar.png')}
                                   style={{width: 38, height: 38, marginLeft: 20}}/>
                            <Image source={require('./img/A.png')}
                                   style={{
                                       width: 20,
                                       height: 20,
                                       marginLeft: 28,
                                       marginTop: 8,
                                       position: 'absolute',
                                       zIndex: 2
                                   }}/>

                        </View>
                        <View style={{flex: 4}}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flex: 3, flexDirection: 'row'}}>
                                    <Text style={{fontSize: 14, lineHeight: 17, fontWeight: 'bold'}}>
                                        ABC
                                    </Text>


                                </View>

                                <View style={{flex: 2}}>
                                    <Text style={{fontSize: 12, lineHeight: 14, color: '#9B9B9B'}}>Yesterday
                                        12:24 pm</Text>
                                </View>

                            </View>
                            <View>
                                <Text
                                    style={{fontSize: 14, lineHeight: 17, color: '#4A4A4A', marginTop: 8}}>
                                    Can liked this property!Would you like to proposea showing?
                                </Text>

                                <Image source={require('./img/Oval2.png')}
                                       style={{width: 38, height: 38, marginTop: 10}}/>

                                <Text style={{
                                    fontSize: 16,
                                    lineHeight: 19,
                                    color: '#4A4A4A',
                                    marginTop: 10,
                                    marginBottom: 5
                                }}>
                                    Can Erenberk
                                </Text>
                                <Text style={{fontSize: 14, lineHeight: 16, color: '#9B9B9B'}}>
                                    Up to €250.000 | Essex, Kesington or Oxfordshire
                                </Text>
                            </View>


                            <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 40}}>
                                <View style={{

                                    borderColor: '#4A90E2',
                                    borderWidth: 1,
                                    width: 95,
                                    height: 27,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 5,
                                    backgroundColor: '#4A90E2'
                                }}>
                                    <Text
                                        style={{color: '#fff', fontSize: 14, fontFamily: 'Helvetica Neue'}}>Take
                                        Action</Text>
                                </View>


                                <View style={{

                                    borderColor: '#4A90E2',
                                    marginLeft: 10,
                                    borderWidth: 1,
                                    width: 95,
                                    height: 27,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 5
                                }}>
                                    <Text
                                        style={{
                                            color: '#4A90E2',
                                            fontSize: 14,
                                            fontFamily: 'Helvetica Neue'
                                        }}>Add
                                        Showing</Text>
                                </View>
                            </View>


                        </View>


                    </View>


                </View>


                <View>
                    <View style={{
                        borderBottomWidth: 0.5,
                        borderBottomColor: '#AFAFAF',
                        paddingLeft: 20,
                        paddingBottom: 5,
                        paddingTop: 10,
                        marginTop: 30
                    }}>
                        <Text style={{fontSize: 16, lineHeight: 20, fontWeight: 'bold'}}> Snoozed (1)</Text>

                    </View>


                </View>


                <View>


                    <View style={{flexDirection: 'row', paddingTop: 20}}>
                        <View style={{flex: 1,}}>

                            <Image source={require('./img/renkliAvatar.png')}
                                   style={{width: 38, height: 38, marginLeft: 20}}/>
                            <Image source={require('./img/A.png')}
                                   style={{
                                       width: 20,
                                       height: 20,
                                       marginLeft: 28,
                                       marginTop: 8,
                                       position: 'absolute',
                                       zIndex: 2
                                   }}/>

                        </View>
                        <View style={{flex: 4}}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flex: 3, flexDirection: 'row'}}>
                                    <Text style={{fontSize: 14, lineHeight: 17, fontWeight: 'bold'}}>
                                        ABC
                                    </Text>

                                    <View style={{
                                        backgroundColor: '#FF3B30',
                                        width: 15,
                                        height: 15,
                                        borderRadius: 45,
                                        marginLeft: 10
                                    }}/>
                                </View>

                                <View style={{flex: 2}}>
                                    <Text style={{fontSize: 12, lineHeight: 14, color: '#9B9B9B'}}>Snoozed:
                                        12/12/2019</Text>
                                </View>

                            </View>
                            <View>
                                <Text
                                    style={{fontSize: 14, lineHeight: 17, color: '#4A4A4A', marginTop: 8}}>
                                    Jeremy Walsh's birthday is tomorrow.
                                </Text>

                            </View>


                            <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 20}}>
                                <View style={{

                                    borderColor: '#4A90E2',
                                    borderWidth: 1,
                                    width: 95,
                                    height: 27,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 5,
                                    backgroundColor: '#4A90E2'
                                }}>
                                    <Text
                                        style={{color: '#fff', fontSize: 14, fontFamily: 'Helvetica Neue'}}>Take
                                        Action</Text>
                                </View>


                                <View style={{

                                    borderColor: '#4A90E2',
                                    marginLeft: 10,
                                    borderWidth: 1,
                                    width: 95,
                                    height: 27,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 5
                                }}>
                                    <Text
                                        style={{
                                            color: '#4A90E2',
                                            fontSize: 14,
                                            fontFamily: 'Helvetica Neue'
                                        }}>Add
                                        Showing</Text>
                                </View>
                            </View>


                        </View>


                    </View>


                </View>


                <View>
                    <View style={{
                        borderBottomWidth: 0.5,
                        borderBottomColor: '#AFAFAF',
                        paddingLeft: 20,
                        paddingBottom: 5,
                        paddingTop: 10,
                        marginTop: 30
                    }}>
                        <Text style={{fontSize: 16, lineHeight: 20, fontWeight: 'bold'}}> Past (2)</Text>

                    </View>


                </View>


                <View>


                    <View style={{flexDirection: 'row', paddingTop: 20}}>
                        <View style={{flex: 1,}}>

                            <Image source={require('./img/renkliAvatar.png')}
                                   style={{width: 38, height: 38, marginLeft: 20}}/>
                            <Image source={require('./img/A.png')}
                                   style={{
                                       width: 20,
                                       height: 20,
                                       marginLeft: 28,
                                       marginTop: 8,
                                       position: 'absolute',
                                       zIndex: 2
                                   }}/>

                        </View>
                        <View style={{flex: 4}}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flex: 3, flexDirection: 'row'}}>
                                    <Text style={{fontSize: 14, lineHeight: 17, fontWeight: 'bold'}}>
                                        ABC
                                    </Text>


                                </View>

                                <View style={{flex: 2}}>
                                    <Text style={{fontSize: 12, lineHeight: 14, color: '#9B9B9B'}}>Yesterday
                                        12:24 pm</Text>
                                </View>

                            </View>
                            <View>
                                <Text
                                    style={{fontSize: 14, lineHeight: 17, color: '#4A4A4A', marginTop: 8}}>
                                    Can liked this property!Would you like to proposea showing?
                                </Text>

                                <Image source={require('./img/Oval2.png')}
                                       style={{width: 38, height: 38, marginTop: 10}}/>

                                <Text style={{
                                    fontSize: 16,
                                    lineHeight: 19,
                                    color: '#4A4A4A',
                                    marginTop: 10,
                                    marginBottom: 5
                                }}>
                                    Can Erenberk
                                </Text>
                                <Text style={{fontSize: 14, lineHeight: 16, color: '#9B9B9B'}}>
                                    Up to €250.000 | Essex, Kesington or Oxfordshire
                                </Text>
                            </View>


                            <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 40}}>
                                <View style={{

                                    borderColor: '#9B9B9B',
                                    borderWidth: 1,
                                    width: 95,
                                    height: 27,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 5,
                                    backgroundColor: '#9B9B9B'
                                }}>
                                    <Text
                                        style={{color: '#fff', fontSize: 14, fontFamily: 'Helvetica Neue'}}>Take
                                        Action</Text>
                                </View>


                                <View style={{

                                    borderColor: '#9B9B9B',
                                    marginLeft: 10,
                                    borderWidth: 1,
                                    width: 95,
                                    height: 27,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 5
                                }}>
                                    <Text
                                        style={{
                                            color: '#9B9B9B',
                                            fontSize: 14,
                                            fontFamily: 'Helvetica Neue'
                                        }}>Dismissed</Text>

                                </View>


                                <View style={{


                                    width: 95,
                                    height: 27,
                                    justifyContent: 'center',
                                    alignItems: 'center',

                                }}>
                                    <Text
                                        style={{
                                            color: '#9B9B9B',
                                            fontSize: 12,
                                            fontFamily: 'Helvetica Neue'
                                        }}>12/12/2019</Text>
                                </View>
                            </View>


                        </View>


                    </View>


                </View>


                <View>


                    <View style={{flexDirection: 'row', paddingTop: 20}}>
                        <View style={{flex: 1,}}>

                            <Image source={require('./img/Oval2.png')}
                                   style={{width: 38, height: 38, marginLeft: 20}}/>


                        </View>
                        <View style={{flex: 4}}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flex: 3, flexDirection: 'row'}}>
                                    <Text style={{fontSize: 14, lineHeight: 17, fontWeight: 'bold'}}>
                                        Can Erenek
                                    </Text>


                                </View>

                                <View style={{flex: 2}}>
                                    <Text style={{fontSize: 12, lineHeight: 14, color: '#9B9B9B'}}>Yesterday
                                        12:24 pm</Text>
                                </View>

                            </View>
                            <View>
                                <Text
                                    style={{fontSize: 14, lineHeight: 17, color: '#4A4A4A', marginTop: 8}}>
                                    Can liked this property!Would you like to proposea showing?
                                </Text>


                                <Text style={{
                                    fontSize: 16,
                                    lineHeight: 19,
                                    color: '#4A4A4A',
                                    marginTop: 10,
                                    marginBottom: 5
                                }}>
                                    Can Erenberk
                                </Text>
                                <Text style={{fontSize: 14, lineHeight: 16, color: '#9B9B9B'}}>
                                    Up to €250.000 | Essex, Kesington or Oxfordshire
                                </Text>
                            </View>



                            <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 40}}>
                                <View style={{

                                    borderColor: '#9B9B9B',
                                    borderWidth: 1,
                                    width: 95,
                                    height: 27,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 5,
                                    backgroundColor: '#9B9B9B'
                                }}>
                                    <Text
                                        style={{color: '#fff', fontSize: 14, fontFamily: 'Helvetica Neue'}}>Take
                                        Action</Text>
                                </View>


                                <View style={{

                                    borderColor: '#9B9B9B',
                                    marginLeft: 10,
                                    borderWidth: 1,
                                    width: 95,
                                    height: 27,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 5
                                }}>
                                    <Text
                                        style={{
                                            color: '#9B9B9B',
                                            fontSize: 14,
                                            fontFamily: 'Helvetica Neue'
                                        }}>Completed</Text>

                                </View>


                                <View style={{


                                    width: 95,
                                    height: 27,
                                    justifyContent: 'center',
                                    alignItems: 'center',

                                }}>
                                    <Text
                                        style={{
                                            color: '#9B9B9B',
                                            fontSize: 12,
                                            fontFamily: 'Helvetica Neue'
                                        }}>12/12/2019</Text>
                                </View>
                            </View>


                        </View>


                    </View>


                </View>


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
