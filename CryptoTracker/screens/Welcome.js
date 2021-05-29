import React, {useState, useEffect} from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity, Image, ScrollView, Dimensions, Animated, ImageBackground, FlatList, LogBox, Alert, Linking, TextInput, AsyncStorage } from 'react-native';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
  } from 'react-native-indicators';
const { width, height } = Dimensions.get("window");

export default function About({sendName, navigation}){

    const[viewMode, setViewMode] = useState("loading");
    const[name, setName] = useState(null);
    const[asyncName, setAsyncName] = useState(null);

    const _storeData = async () => {
        try {
          await AsyncStorage.setItem(
            'name', name
          );
        } catch (error) {
            console.log(error)
        }
    };

    const _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('name');
          if (value !== null) {
            setAsyncName(value);
          }else{
            setViewMode("intro");
          }
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(()=>{
        _retrieveData();
    },[])

    function register(){
        name == null ? Alert.alert("Please enter your name") : _storeData();
        sendName(name);
    }

    function renderIntro(){
        return(
            <View style={{width: width, height: height, backgroundColor: '#F8F9F8'}}>
                <Image style={{width : width/1.5, height: width/1.5, alignSelf: 'center', marginTop: height/6}} source={require('../assets/images/main.jpg')} />
                <View style={{borderBottomWidth: 5, borderBottomColor: '#FE7F5D', marginHorizontal: width/2.3 , borderRadius: 10, marginTop: 40}} />
                <View style={{flexDirection: 'column', alignSelf: 'center', marginTop: 20}}>
                    <Text style={{color: "#292365", fontFamily: 'GothamBold', fontSize: 20, textAlign: 'center'}}>Plan for the future</Text>
                    <Text style={{color: "#292365", fontFamily: 'GothamBold', fontSize: 20, textAlign: 'center'}}>from now on</Text>
                </View>
                <View style={{flexDirection: 'column', alignSelf: 'center', marginTop: 20}}>
                    <Text style={{color: "#B5B4B5", fontFamily: 'GothamMedium', fontSize: 11, textAlign: 'center', lineHeight: 16}}>We provide guidance regarding crypto</Text>
                    <Text style={{color: "#B5B4B5", fontFamily: 'GothamMedium', fontSize: 11, textAlign: 'center', lineHeight: 16}}>market and invseting.</Text>
                </View>

                <TouchableOpacity 
                    onPress={() => setViewMode("info")}
                    style={{backgroundColor: "#7884FE", width: 60, height: 60, borderRadius: 100, alignSelf: 'center', marginTop: 40}}
                >
                    <View style={{flex: 1,  justifyContent: 'center'}}>
                        <Image style={{width: 20, height: 20, tintColor: 'white', alignSelf: 'center'}} source={require('../assets/icons/right-arrow.png')} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    function renderInfo(){
        return(
            <View style={{width: width, height: height, backgroundColor: '#F8F9F8'}}>
                <Image style={{width : width/1.5, height: width/1.5, alignSelf: 'center', marginTop: height/6}} source={require('../assets/images/main.jpg')} />
                <View style={{borderBottomWidth: 5, borderBottomColor: '#FE7F5D', marginHorizontal: width/2.3 , borderRadius: 10, marginTop: 40}} />
                <View style={{flexDirection: 'column', alignSelf: 'center', marginTop: 20}}>
                    <Text style={{color: "#292365", fontFamily: 'GothamBold', fontSize: 20, textAlign: 'center'}}>Plan for the future</Text>
                    <Text style={{color: "#292365", fontFamily: 'GothamBold', fontSize: 20, textAlign: 'center'}}>from now on</Text>
                </View>
                
                <View style={{marginTop: 40}}>
                    <Text style={{color: "#B5B4B5", fontFamily: 'GothamMedium', fontSize: 11, lineHeight: 16, textAlign: 'center'}}>Enter Your Name</Text>
                    <TextInput 
                        onChangeText={text => setName(text)}
                        style={styles.textInput}
                    />
                </View>

                <TouchableOpacity 
                    onPress={() => register()}
                    style={{backgroundColor: "#7884FE", width: 80, height: 40, borderRadius: 5, alignSelf: 'center', marginTop: 40, justifyContent: 'center'}}
                >
                    <Text style={{color: "white", fontFamily: "GothamBold", textAlign: 'center', fontSize: 12}}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }

    function renderLoading(){
        return(
            <View style={{width: width, height: height, backgroundColor: '#F8F9F8'}}>
                <Image style={{width : width/1.5, height: width/1.5, alignSelf: 'center', marginTop: height/6}} source={require('../assets/images/main.jpg')} />
                <MaterialIndicator style={{marginBottom: 100}} trackWidth={5} size={50} color="#7884FE" />
            </View>
        )
    }

    return (
        <ScrollView>
            {viewMode === "loading" ? (
                <View>
                    {renderLoading()}
                </View>
            ) : (
                <View>
                    {asyncName == null ? (
                        <View>
                            {viewMode === "intro" ? (
                                <View>
                                    {renderIntro()}
                                </View>
                            ) : (
                                <View>
                                    {renderInfo()}
                                </View>
                            )}
                        </View>
                    ) : (
                        <View>
                            {renderLoading()}
                        </View>
                    )}
                </View>
            )}

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    textInput:{
        backgroundColor: "#f7f7f7", 
        width: width/2,
        alignSelf: 'center', 
        marginTop: 5, 
        borderRadius: 6, 
        borderWidth: 2, 
        borderColor: "#d9dcff", 
        paddingLeft: 15,
        fontFamily: "GothamMedium",
        color: "grey"
    }
});

