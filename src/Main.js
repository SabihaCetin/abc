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
import Agenda from './Agenda'
import Activities from './Activities'
import Files from './Files'

const deviceWidth = Dimensions.get('window').width;


export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'Agenda',
            showDetail: false,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    paddingBottom: 10,
                    height: 84,
                    backgroundColor: '#FAFAFA'
                }}>
                    <View style={{justifyContent: 'flex-end', flex: 1,}}>
                        <Image source={require('./img/back.png')}
                               style={{width: 10.37, height: 21.43, justifyContent: 'flex-end', marginLeft: 20}}/>
                    </View>

                    <View style={{justifyContent: 'flex-end', alignItems: 'center', flex: 1, flexDirection: 'row'}}>

                        <Image source={require('./img/export.png')}
                               style={{width: 21.43, height: 21.43, marginLeft: 20}}/>
                        <Image source={require('./img/add.png')} style={{width: 21.43, height: 21.43, marginLeft: 20}}/>
                        <Image source={require('./img/bla.png')}
                               style={{width: 3.43, height: 3.43, margin: 3, marginLeft: 20}}/>
                        <Image source={require('./img/bla.png')} style={{width: 3.43, height: 3.43, margin: 3}}/>
                        <Image source={require('./img/bla.png')}
                               style={{width: 3.43, height: 3.43, margin: 3, marginRight: 20}}/>

                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{
                        borderWidth: 1,
                        borderColor: '#D9D9D9',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        flex: 1
                    }}>
                        <Image source={require('./img/phone.png')}
                               style={{width: 21.43, height: 21.43, justifyContent: 'flex-end', margin: 10}}/>
                        <Text style={{color: '#4A90E2'}}>Call</Text>
                    </View>
                    <View style={{
                        borderWidth: 1,
                        borderColor: '#D9D9D9',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        flex: 1
                    }}>
                        <Image source={require('./img/message.png')}
                               style={{width: 21.43, height: 21.43, justifyContent: 'flex-end', margin: 10}}/>
                        <Text style={{color: '#4A90E2'}}>Message</Text>
                    </View>
                    <View style={{
                        borderWidth: 1,
                        borderColor: '#D9D9D9',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        flex: 1
                    }}>
                        <Image source={require('./img/email.png')}
                               style={{width: 21.43, height: 16, justifyContent: 'flex-end', margin: 10}}/>
                        <Text style={{color: '#4A90E2'}}>E-mail</Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={{justifyContent: 'center', alignItems: 'center', padding: 8}}>
                        <Text style={{color: '#9B9B9B'}}>2 months 7 days to end contract</Text>

                    </View>
                    <View>
                        <View style={{flexDirection: 'row'}}>

                            <View style={{flex: 1, margin: 16}}>
                                <Image source={require('./img/Oval.png')}
                                       style={{
                                           width: 80,
                                           height: 80,
                                           justifyContent: 'flex-end',
                                           position: 'absolute'
                                       }}/>

                            </View>


                            <View style={{flex: 3,}}>


                                <View style={{flexDirection: 'row',}}>
                                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin: 16}}>
                                        <Text style={{
                                            fontFamily: 'Helvetica Neue',
                                            fontSize: 20,
                                            color: 'black'
                                        }}>25</Text>
                                        <Text style={{color: '#9B9B9B'}}>Sent</Text>

                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin: 16}}>
                                        <Text style={{
                                            fontFamily: 'Helvetica Neue',
                                            fontSize: 20,
                                            color: 'black'
                                        }}>25</Text>
                                        <Text style={{color: '#9B9B9B'}}>Showing</Text>

                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin: 16}}>
                                        <Text style={{
                                            fontFamily: 'Helvetica Neue',
                                            fontSize: 20,
                                            color: 'black'
                                        }}>25</Text>
                                        <Text style={{color: '#9B9B9B'}}>Offer</Text>

                                    </View>
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginRight: 10
                                }}>

                                    <View style={{
                                        flex: 1,
                                        borderColor: '#4A90E2',
                                        marginRight: 10,
                                        borderWidth: 1,
                                        width: 122,
                                        height: 27,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 5
                                    }}>
                                        <Text style={{color: '#4A90E2', fontSize: 14, fontFamily: 'Helvetica Neue'}}>Add
                                            Showing</Text>
                                    </View>
                                    <View style={{
                                        flex: 1, flexDirection: 'row', height: 40, justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>


                                        <View style={{
                                            borderColor: '#4A90E2',
                                            borderWidth: 1,
                                            width: 122,
                                            height: 27,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 5,
                                            backgroundColor: '#4A90E2'
                                        }}>
                                            <Text style={{color: '#fff', fontSize: 14, fontFamily: 'Helvetica Neue'}}>Show
                                                Matchings</Text>
                                        </View>

                                        <View style={{
                                            position: 'absolute',
                                            zIndex: 2,
                                        }}>
                                            <View style={{

                                                backgroundColor: 'red',
                                                width: 14,
                                                height: 14,
                                                marginLeft: 120,
                                                marginBottom: 20,
                                                borderRadius: 25,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                                <Text style={{
                                                    color: '#fff',
                                                    fontSize: 12,
                                                    fontFamily: 'Helvetica Neue'
                                                }}>9</Text>

                                            </View>
                                        </View>


                                    </View>

                                </View>


                            </View>


                        </View>


                    </View>


                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderBottomColor: '#AFAFAF',
                        borderBottomWidth: 1,
                        paddingBottom: 8
                    }}>
                        <View>
                            <Image source={require('./img/home.png')}
                                   style={{width: 21.43, height: 21.43, marginRight: 10, marginLeft: 20}}/>
                        </View>
                        <View style={{flex: 3}}>

                            <Text>
                                Property of Jeremy Walsh
                            </Text>
                        </View>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>

                            <Text style={{marginRight: 10}}>
                                €165.000
                            </Text>
                        </View>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>

                        <Text style={{fontSize: 14, marginTop: 10, marginBottom: 10}}>(Status) | For (Selling Type) |
                            (Property Type)</Text>
                        <View style={{borderBottomWidth: 0.5, borderBottomColor: '#AFAFAF', width: deviceWidth - 30,}}/>

                        <Text style={{fontSize: 14, marginTop: 10, marginBottom: 10}}>(Room) | (SurfaceArea) |
                            (SelectedAnquituty) </Text>
                        <View style={{borderBottomWidth: 0.5, borderBottomColor: '#AFAFAF', width: deviceWidth - 30,}}/>


                    </View>


                    {this.state.showDetail ?
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({showDetail: false});
                            }}
                            style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 14, marginTop: 10, marginBottom: 10, color: '#4A90E2'}}>Edit
                                Property
                                Details</Text>

                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({showDetail: true});
                            }}
                            style={{justifyContent: 'center', alignItems: 'center'}}>

                            <Text style={{fontSize: 14, marginTop: 10, marginBottom: 10, color: '#4A90E2'}}>Show More
                                Details</Text>
                        </TouchableOpacity>
                    }


                    <View style={{justifyContent: 'center', alignItems: 'center',}}>
                        {this.state.showDetail ?
                            <View style={{justifyContent: 'center', alignItems: 'center',}}>


                                <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 20,}}>
                                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                        <Text style={{fontSize: 18}}>
                                            (X)
                                        </Text>
                                        <Text style={{fontSize: 18}}>
                                            Partking Lot
                                        </Text>
                                    </View>

                                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                        <Text style={{fontSize: 18}}>
                                            (X)
                                        </Text>
                                        <Text style={{fontSize: 18}}>
                                            WC Number
                                        </Text>
                                    </View>


                                </View>
                                <View style={{
                                    borderBottomWidth: 0.5,
                                    borderBottomColor: '#AFAFAF',
                                    width: deviceWidth - 30,
                                    marginTop: 10,
                                    marginBottom: 10
                                }}/>

                                <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 20}}>
                                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                        <Text style={{fontSize: 18}}>
                                            (X)
                                        </Text>
                                        <Text style={{fontSize: 18}}>
                                            Property Floor
                                        </Text>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                                        <Text style={{fontSize: 18}}>
                                            (X)
                                        </Text>
                                        <Text style={{fontSize: 18}}>
                                            Total Building
                                        </Text>
                                    </View>


                                </View>
                                <View style={{
                                    borderBottomWidth: 0.5,
                                    borderBottomColor: '#AFAFAF',
                                    width: deviceWidth - 30,
                                    marginTop: 10,
                                    marginBottom: 10
                                }}/>


                                <View style={{
                                    paddingBottom: 10,
                                    borderBottomWidth: 0.5,
                                    borderBottomColor: '#AFAFAF',
                                    width: deviceWidth - 30
                                }}>
                                    <Text style={{fontSize: 14,}}>Heating: (Heating Option)</Text>
                                </View>
                                <View style={{
                                    padding: 10,
                                    borderBottomWidth: 0.5,
                                    borderBottomColor: '#AFAFAF',
                                    width: deviceWidth - 30
                                }}>
                                    <Text style={{fontSize: 14,}}>In Site: Yes | No</Text>
                                </View>
                                <View style={{
                                    padding: 10,
                                    borderBottomWidth: 0.5,
                                    borderBottomColor: '#AFAFAF',
                                    width: deviceWidth - 30
                                }}>
                                    <Text style={{fontSize: 14,}}>Furnished: Yes | No</Text>
                                </View>
                                <View style={{
                                    padding: 10,
                                    borderBottomWidth: 0.5,
                                    borderBottomColor: '#AFAFAF',
                                    width: deviceWidth - 30
                                }}>
                                    <Text style={{fontSize: 14,}}>Loan Status: Yes | No</Text>
                                </View>
                                <View style={{
                                    padding: 10,
                                    borderBottomWidth: 0.5,
                                    borderBottomColor: '#AFAFAF',
                                    width: deviceWidth - 30
                                }}>
                                    <Text style={{fontSize: 14,}}>Min Carpet Area: (MinCarpetArea)</Text>
                                </View>
                                <View style={{
                                    padding: 10,
                                    borderBottomWidth: 0.5,
                                    borderBottomColor: '#AFAFAF',
                                    width: deviceWidth - 30
                                }}>
                                    <Text style={{fontSize: 14,}}>View Side: (Selection1),(Selection2)...</Text>
                                </View>
                                <View style={{
                                    padding: 10,
                                    borderBottomWidth: 0.5,
                                    borderBottomColor: '#AFAFAF',
                                    width: deviceWidth - 30
                                }}>
                                    <Text style={{fontSize: 14,}}>Max Maintenance Fee: (XYZ) (Currency)</Text>
                                </View>

                                <View style={{
                                    padding: 10,
                                    borderBottomWidth: 0.5,
                                    borderBottomColor: '#AFAFAF',
                                    width: deviceWidth - 30
                                }}>
                                    <Text style={{fontSize: 14,}}>Swap Status: Yes | No</Text>
                                </View>

                                <View style={{
                                    padding: 10,
                                    borderBottomWidth: 0.5,
                                    borderBottomColor: '#AFAFAF',
                                    width: deviceWidth - 30
                                }}>
                                    <Text style={{fontSize: 14,}}>Using Status: (Selection)</Text>
                                </View>

                                <View style={{
                                    padding: 10,
                                    borderBottomWidth: 0.5,
                                    borderBottomColor: '#AFAFAF',
                                    width: deviceWidth - 30,
                                    height: 100
                                }}>
                                    <Text style={{fontSize: 14,}}>Description</Text>
                                </View>

                                <View style={{
                                    padding: 10,
                                    borderBottomWidth: 0.5,
                                    borderBottomColor: '#AFAFAF',
                                    width: deviceWidth - 30
                                }}>
                                    <Text style={{fontSize: 14,}}>Indoor Features: [Selection Feature Name]</Text>
                                </View>

                                <View style={{
                                    padding: 10,
                                    borderBottomWidth: 0.5,
                                    borderBottomColor: '#AFAFAF',
                                    width: deviceWidth - 30
                                }}>
                                    <Text style={{fontSize: 14,}}>Outdoor Features: [Selected Feature Name]</Text>
                                </View>


                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({showDetail: false});
                                    }}
                                    style={{justifyContent: 'center', alignItems: 'center'}}>

                                    <Text style={{fontSize: 14, marginTop: 10, marginBottom: 10, color: '#4A90E2'}}>Show
                                        Less
                                        Details</Text>

                                </TouchableOpacity>
                            </View>

                            :
                            null

                        }

                        <View style={{
                            borderBottomWidth: 1,
                            borderBottomColor: '#AFAFAF',
                            width: deviceWidth,
                            marginTop: 10,
                            marginBottom: 10
                        }}/>

                        <View style={{flexDirection: 'row',}}>
                            <View style={{flex: 3, flexDirection: 'row', paddingLeft: 10}}>

                                <View style={{
                                    backgroundColor: '#D8D8D8',
                                    borderRadius: 1.7,
                                    margin: 10,
                                    padding: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text>#showing</Text>
                                </View>

                                <View style={{
                                    backgroundColor: '#D8D8D8',
                                    borderRadius: 1.7,
                                    margin: 10,
                                    padding: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text>#offer</Text>
                                </View>
                                <View style={{
                                    backgroundColor: '#D8D8D8',
                                    borderRadius: 1.7,
                                    margin: 10,
                                    padding: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text>#visited</Text>
                                </View>
                            </View>

                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                                <Text style={{fontSize: 14, marginTop: 10, marginBottom: 10, color: '#4A90E2'}}>edit
                                    tags</Text>

                            </View>

                        </View>

                    </View>
                    <View>
                        <View style={{
                            position: 'absolute',
                            zIndex: 2,
                            margin: 10,
                            backgroundColor: '#F5A623',
                            width: 94,
                            height: 19,
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{color: '#fff'}}>Fair Priced</Text>

                        </View>

                        <View style={{
                            width: 70, height: 70, opacity: 0.4,
                            borderRadius: 45, backgroundColor: '#C4C4C4',
                            position: 'absolute', zIndex: 2,
                            marginLeft: -35,
                            marginTop: 52, marginBottom: 54
                        }}>

                        </View>

                        <Image source={require('./img/right.png')}
                               style={{
                                   width: 13, height: 23, position: 'absolute', zIndex: 3,
                                   marginLeft: 7,
                                   marginTop: 76, marginBottom: 76
                               }}/>


                        <View style={{
                            width: 70, height: 70, opacity: 0.4,
                            borderRadius: 45, backgroundColor: '#C4C4C4',
                            position: 'absolute', zIndex: 2,
                            marginLeft: deviceWidth - 35,
                            marginTop: 52, marginBottom: 54
                        }}>

                        </View>

                        <Image source={require('./img/left.png')}
                               style={{
                                   width: 13, height: 23, position: 'absolute', zIndex: 3,
                                   marginLeft: deviceWidth - 20,
                                   marginTop: 76, marginBottom: 76
                               }}/>


                        <Image source={require('./img/Rectangle.png')}
                               style={{width: deviceWidth, height: 176,}}/>
                    </View>
                    <View style={{
                        flexDirection: 'row'
                    }}>


                        <TouchableOpacity

                            onPress={() => {
                                this.setState({activeTab: 'Agenda'});
                            }}
                            style={{
                                flex: 1,
                                flexDirection: 'row', justifyContent: 'center',
                                alignItems: 'center',
                            }}>


                            <View style={{
                                borderBottomColor: this.state.activeTab === 'Agenda' ? 'black' : '#B2B2B2',
                                borderBottomWidth: 1,
                                width: 122,
                                height: 27,
                                justifyContent: 'center',
                                alignItems: 'center',


                            }}>
                                <Text style={{fontSize: 14, fontFamily: 'Helvetica Neue'}}>Agenda</Text>
                            </View>

                            <View style={{
                                position: 'absolute',
                                zIndex: 2,
                            }}>
                                <View style={{

                                    backgroundColor: 'red',
                                    width: 14,
                                    height: 14,
                                    marginLeft: 80,
                                    marginBottom: 5,
                                    borderRadius: 25,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{
                                        color: '#fff',
                                        fontSize: 12,
                                        fontFamily: 'Helvetica Neue'
                                    }}>9</Text>

                                </View>
                            </View>

                        </TouchableOpacity>


                        <TouchableOpacity
                            onPress={() => {
                                this.setState({activeTab: 'Activities'});
                            }}
                            style={{

                                flex: 1,
                                flexDirection: 'row', height: 40, justifyContent: 'center',
                                alignItems: 'center',
                            }}>


                            <View style={{
                                borderBottomColor: this.state.activeTab === 'Activities' ? 'black' : '#B2B2B2',
                                borderBottomWidth: 1,
                                width: 122,
                                height: 27,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text style={{fontSize: 14, fontFamily: 'Helvetica Neue'}}>Activities</Text>
                            </View>

                            <View style={{
                                position: 'absolute',
                                zIndex: 2,
                            }}>
                                <View style={{

                                    backgroundColor: 'red',
                                    width: 14,
                                    height: 14,
                                    marginLeft: 80,
                                    marginBottom: 5,
                                    borderRadius: 25,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{
                                        color: '#fff',
                                        fontSize: 12,
                                        fontFamily: 'Helvetica Neue'
                                    }}>2</Text>

                                </View>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity
                            onPress={() => {
                                this.setState({activeTab: 'Files'});
                            }}
                            style={{
                                flex: 1,
                                flexDirection: 'row', height: 40, justifyContent: 'center',
                                alignItems: 'center',
                            }}>


                            <View style={{
                                borderBottomColor: this.state.activeTab === 'Files' ? 'black' : '#B2B2B2',
                                borderBottomWidth: 1,
                                width: 122,
                                height: 27,
                                justifyContent: 'center',
                                alignItems: 'center',


                            }}>
                                <Text style={{fontSize: 14, fontFamily: 'Helvetica Neue'}}>Files</Text>
                            </View>


                        </TouchableOpacity>


                    </View>
                    {this.state.activeTab === 'Agenda' ?
                       <Agenda/>
                       :
this.state.activeTab==='Activities'?

    <Activities/>

                        :

                    <Files/>
                    }
                </ScrollView>

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
