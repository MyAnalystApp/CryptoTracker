import React, {useState, useEffect} from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity, Image, ScrollView, Dimensions, Animated, ImageBackground, FlatList, LogBox, Alert, Linking } from 'react-native';

const { width, height } = Dimensions.get("window");

export default function About({navigation}){

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

function renderHeader(){
  return(
      <View style={{flex: 1}} >
      <View style={{  width: "100%",  height: 225 }} > 
          <ImageBackground
              source={require('../assets/images/banner.png')}
              resizeMode="cover"
              style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 50,
                  borderBottomWidth: 4,
                  borderBottomColor: "#5D2DFD"
              }}
          >
              <View
                  style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 0
                  }}
              >
                  <Text style={{color: "white", fontFamily: "GothamBold", fontSize: 22, lineHeight: 22}}>About App</Text>

              </View>
              
          </ImageBackground>
          
      </View>
  </View>
  )
}

  function renderInfo(){
    return(
      <View>
          <View style={{paddingLeft: 14, paddingRight: 14, marginTop: -30}}>
              <View
                  style={{
                      width: width-28,
                      paddingTop: 0,
                      paddingBottom: 30,
                      marginLeft: 0,
                      marginRight: 10,
                      borderRadius: 10,
                      backgroundColor: "white"
                  }}
              >
                  <View style={{flexDirection: 'column'}}>
                      <View style={{ alignItems: 'center'}}>
                          <Image 
                              source={{uri: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"}}
                              resizeMode="cover"
                              style={{
                                  marginBottom: 0,
                                  width: 80,
                                  height: 80,
                                  marginTop: 10
                              }}
                          />
                      </View>
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
                                    backgroundColor: "#F7F5FE",
                                    alignSelf: 'center',
                                    paddingBottom: 24
                                }}
                                onPress={() => {Linking.openURL("https://github.com/MyAnalystApp")}}
                            >
                                <View style={{flexDirection: 'column'}}>
                                    <View style={{ alignItems: 'center'}}>
                                        <Image 
                                            source={{uri: "https://avatars.githubusercontent.com/u/81571274?s=200&v=4"}}
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
                                    backgroundColor: "#F7F5FE",
                                    alignSelf: 'center',
                                    paddingBottom: 20,
                                }}
                                onPress={() => {Linking.openURL("https://github.com/MyAnalystApp/CryptoTracker")}}
                            >
                                <View style={{flexDirection: 'column'}}>
                                    <View style={{ alignItems: 'center'}}>
                                        <Image 
                                            source={require('../assets/images/BlockLogoRound.png')}
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
                      </View>

                  </View>

              </View>
          </View>
      </View>
    )
  }

  function renderWebsite(){
    return(
      <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 14,
                paddingVertical: 24,
                paddingHorizontal: 8,
                backgroundColor: "white",
                borderRadius: 8,
                marginTop: 20
            }}
            onPress = {() => Alert.alert("Will be available in next Update!")}
        >
            <View style={{flexDirection: 'column', marginLeft: 8}}>
                <View style={{flexDirection: 'row', }}>
                    <Image
                        source={{uri: "https://cdn.dribbble.com/users/778834/screenshots/5380379/internet.png"}}
                        style={{
                            width: 70,
                            height: 70,
                            marginRight: 8
                        }}
                    />
                    <View style={{alignSelf: 'center', width: width/2 + 20, marginLeft: 10}}>
                        <Text style={{fontFamily: "GothamBold", alignSelf: 'center', fontSize: 14, alignSelf: 'flex-start'}}>Checkout our Website</Text>
                        <Text style={{fontFamily: "GothamLight", marginRight: 8, fontSize: 12, lineHeight: 14, marginTop: 8}}>Visit our website for more similar and interesting apps.</Text>
                    </View>
                    
                </View>
                
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 20}}>
                <Image
                    source={require('../assets/icons/right-arrow.png')}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: "grey",
                        marginLeft: 8
                    }}
                />
            </View>
        </TouchableOpacity>
    )
  }

  function renderIssue(){
    return(
      <View>
        <View style={{backgroundColor: 'white', flexDirection: 'row', width: width - 30, alignSelf :'center', borderRadius: 8, marginTop: 20, height: 80, borderWidth: 4, borderColor: "#FEF3F3"}}>
          <Image style={{width: 50, height: 50, borderRadius: 100, marginLeft: 30 , alignSelf: 'center'}} source={{uri: "https://cdn.dribbble.com/users/251873/screenshots/9288094/media/a1c2f89065f68e1b2b5dcb66bdb9beb1.gif"}} />
          <View style={{ alignSelf: 'center', marginLeft: 20}}>
            <Text style={{fontFamily: "GothamMedium", color: 'grey'}}>Have any copyright issue?</Text>
            <Text style={{fontFamily: "GothamMedium", marginTop: 5, color: 'grey'}}>Mail us at: bavarvaneel5@gmail.com</Text>
          </View>
        </View>
      </View>
    )
  }
  return (
    <ScrollView>
        {renderNavbar()}
        {renderHeader()}
        {renderInfo()}
        {renderWebsite()}
        {renderIssue()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({

});

