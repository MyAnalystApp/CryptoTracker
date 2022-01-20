import React, {useState, useEffect} from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity, Image, ScrollView, Dimensions, Animated, ImageBackground, FlatList, LogBox, Alert, Linking, AsyncStorage, TextInput, ToastAndroid } from 'react-native';

const { width, height } = Dimensions.get("window");

export default function About({navigation}){

    const[name , setName] = useState(null);

    const _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('name');
          if (value !== null) {
            setName(value);
          }
        } catch (error) {
            console.log(error)
        }
    };

    const _storeData = async () => {
        try {
            await AsyncStorage.setItem(
                'name', name
            );
        } catch (error) {
            console.log(error)
        }
    };


    useEffect(()=>{
        _retrieveData();
    },[])

    const[editName, setEditName] = useState("view");

  function renderNavbar(){
    return(
        <ScrollView>
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "white",}}>
                <View style={{ flexDirection: 'row', marginTop: 10 , marginBottom: 10}}>
                    <TouchableOpacity style={{ flex: 1}}
                      onPress = {() => navigation.navigate("Home")}
                    >
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Image style={{marginLeft: 0, width: 27, height: 27, marginRight: 60 }} source={require('../assets/icons/back_arrow.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ flex: 1}}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{  marginLeft: 0, fontSize: 14, fontFamily: "GothamMedium", color: "black"}}>About</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1,}}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

function renderUser(){
    return(
        <View style={{
            height: 300,
            width: width,
            backgroundColor: 'white'
        }}>
            <View style={{alignItems: 'center', marginTop: 20}}>
                <Image 
                    source={require('../assets/images/Gemini-Bitcoin_Cash__BCH_-_Structure_and_Function_of_Peer-to-Peer_Electronic_Cash.webp')}
                    resizeMode="cover"
                    style={{
                        marginBottom: 0,
                        width: 250,
                        height: 150,
                        marginTop: 10,
                        alignSelf: 'center'
                    }}
                />
            </View>
            

            {editName == "view" ? (
                <View>
                    <Text style={{fontFamily: "GothamMedium", textAlign: 'center', marginTop: 16, color: "black", fontSize: 16}}>{name}</Text>
                    <TouchableOpacity onPress={() => setEditName("edit")} style={{backgroundColor: "#e2d9ff", width: 100, height: 25, alignSelf: 'center', marginTop: 20, justifyContent: 'center', borderRadius: 100, borderWidth: 1, borderColor: "#5D2DFD" }}>
                        <Text style={{textAlign: 'center', fontSize: 10, alignSelf: 'center', fontFamily: "GothamMedium", color: "#5D2DFD"}}>Change Name</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={{marginTop: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                
                    <TextInput 
                        value={name}
                        onChangeText={text => setName(text)}
                        placeholder="Change Name"
                        placeholderTextColor="#ccc"
                        style={styles.textInput}
                    />
                    <TouchableOpacity onPress={() => _storeData() & setEditName("view")} style={{backgroundColor: '#f5f5f5', width: 43, height: 43 , justifyContent: 'center', borderRadius: 6, marginLeft: 5, marginTop: 4}}>
                        <Image style={{width: 20, height: 20, alignSelf: 'center', marginBottom: 2, tintColor: 'grey'}} source={require('../assets/icons/done.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setEditName("view")} style={{backgroundColor: '#f5f5f5', width: 43, height: 43 , justifyContent: 'center', borderRadius: 6, marginLeft: 5, marginTop: 4}}>
                        <Image style={{width: 20, height: 20, alignSelf: 'center', marginBottom: 2, tintColor: 'grey'}} source={require('../assets/icons/close.png')} />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}


  function renderAll(){
    return(
        <View style={{marginTop: 20}}>
            <View
                style={{
                    width: width-28,
                    paddingTop: 10,
                    paddingBottom: 30,
                    borderRadius: 10,
                    backgroundColor: "white",
                    alignSelf: 'center'
                }}
            >
                <View style={{flexDirection: 'column'}}>
                    
                    <View>
                                
                        <View style={{flexDirection: 'column', marginTop: 20}}>
                            <View>
                                <Text style={{color:"black", fontFamily: "GothamBold", fontSize: 16, lineHeight: 30, alignSelf: 'center'}}>View the project on GitHub</Text>
                                <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 20}}>
                                <TouchableOpacity
                                        style={{
                                            width: width/2 -40,
                                            paddingTop: 14,
                                            paddingHorizontal: 0,
                                            marginLeft: 0,
                                            marginRight: 10,
                                            borderRadius: 10,
                                            backgroundColor: "white",
                                            alignSelf: 'center',
                                            paddingBottom: 24,
                                            borderWidth: 1,
                                            borderColor: "#ebebeb"
                                        }}
                                        onPress={() => {Linking.openURL("https://github.com/MyAnalystApp")}}
                                    >
                                        <View style={{flexDirection: 'column'}}>
                                            <View style={{ alignItems: 'center'}}>
                                                <Image 
                                                    source={require('../assets/images/org.jpeg')}
                                                    resizeMode="cover"
                                                    style={{
                                                        marginTop: 0,
                                                        width: 37,
                                                        height: 37,
                                                        marginTop: 15,
                                                        borderRadius: 4
                                                    }}
                                                />
                                            </View>
                                            <View>
                                                <Text style={{color:"black", fontFamily: "GothamBold", fontSize: 16, lineHeight: 30, alignSelf: 'center', marginTop: 15}}>Organization</Text>
                                                <Text style={{color: "grey", fontFamily: "GothamMedium", fontSize: 10, lineHeight: 22, alignSelf: 'center'}}>See our organization</Text>
                                                <Text style={{color: "grey", fontFamily: "GothamMedium", fontSize: 10, lineHeight: 10, alignSelf: 'center'}}>to find more similar apps</Text>
                                            </View>

                                        </View>

                                        {/* Value */}
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{
                                            width: width/2 -40,
                                            paddingTop: 10,
                                            paddingHorizontal: 0,
                                            marginLeft: 10,
                                            borderRadius: 10,
                                            backgroundColor: "white",
                                            alignSelf: 'center',
                                            paddingBottom: 20,
                                            borderWidth: 1,
                                            borderColor: "#ebebeb"
                                        }}
                                        onPress={() => {Linking.openURL("https://github.com/MyAnalystApp/CryptoTracker")}}
                                    >
                                        <View style={{flexDirection: 'column'}}>
                                            <View style={{ alignItems: 'center'}}>
                                                <Image 
                                                    source={require('../assets/images/logo.png')}
                                                    resizeMode="cover"
                                                    style={{
                                                        marginTop: 0,
                                                        width: 50,
                                                        height: 50,
                                                        marginTop: 15
                                                    }}
                                                />
                                            </View>
                                            <View>
                                                <Text style={{color:"black", fontFamily: "GothamBold", fontSize: 16, lineHeight: 30, alignSelf: 'center', marginTop: 10}}>App Repo</Text>
                                                <Text style={{color: "grey", fontFamily: "GothamMedium", fontSize: 10, lineHeight: 22, alignSelf: 'center'}}>Wanna contribute?</Text>
                                                <Text style={{color: "grey", fontFamily: "GothamMedium", fontSize: 10, lineHeight: 10, alignSelf: 'center'}}>Check our Repo for more</Text>
                                            </View>

                                        </View>

                                        {/* Value */}
                                    </TouchableOpacity>
                                </View>
                                <Text style={{color: 'grey', fontSize: 10, fontFamily: "GothamMedium", marginLeft: 20, marginTop: 20, marginRight: 20, lineHeight: 16}}>Note: This app is currently under development, so new updates will arrive frequently. If you've found any bug please create an issue in the repository of the app given above or contact the developer.</Text>
                            </View>

                        </View>
                    </View>

                </View>

            </View>
        </View>
    )
  }

  function renderAboutDeveloper(){
      return(
          <View style={{width: width - 30, height: 150, backgroundColor: "white", borderRadius: 8, marginTop: 20, alignSelf: 'center', marginBottom: 20}}>
              <Text style={{color:"black", fontFamily: "GothamBold", fontSize: 16, alignSelf: 'center', marginTop: 15}}>Developer's Info</Text>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: "#f0faff",
                            width: width/3-20,
                            height: 100,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                            marginLeft: 7.5
                        }} 
                        onPress={() => {Linking.openURL("https://www.linkedin.com/in/neel-bavarva-61662a1a3")}}
                    >
                        <Image style={{width: 30, height: 30, tintColor: "#0072B0"}} source={require('../assets/images/linkedin.png')} />
                        <Text style={{fontFamily: "GothamMedium", color: "grey", fontSize: 12, marginTop: 7}}>Connect</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: "#f5f5f5",
                            width: width/3-20,
                            height: 100,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                            marginLeft: 7.5
                        }} 
                        onPress={() => {Linking.openURL("https://github.com/neelbavarva")}}
                    >
                        <Image style={{width: 33, height: 33}} source={require('../assets/images/github.png')} />
                        <Text style={{fontFamily: "GothamMedium", color: "grey", fontSize: 12, marginTop: 7}}>Follow</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: "#F7F5FE",
                            width: width/3-20,
                            height: 100,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                            marginLeft: 7.5
                        }} 
                        onPress={() => {Linking.openURL("https://portfolio-neelbavarva.vercel.app")}}
                    >
                        <Image style={{width: 35, height: 35}} source={require('../assets/images/react.png')} />
                        <Text style={{fontFamily: "GothamMedium", color: "grey", fontSize: 12, marginTop: 7}}>Website</Text>
                    </TouchableOpacity>
                </View>
          </View>
      )
  }

  return (
    <ScrollView>
        {renderNavbar()}
        {renderUser()}
        {renderAll()}
        {renderAboutDeveloper()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    textInput:{
        backgroundColor: "white", 
        width: width/2.5,
        alignSelf: 'center', 
        marginTop: 5, 
        borderRadius: 6, 
        borderWidth: 2, 
        borderColor: "#d9dcff", 
        paddingLeft: 15,
        fontFamily: "GothamMedium",
        color: "grey",
        height: 45
    }
});

