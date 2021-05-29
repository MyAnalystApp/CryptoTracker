import React, {useState, useEffect} from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity, Image, ScrollView, Dimensions, Animated, ImageBackground, FlatList, LogBox, Alert, Linking, AsyncStorage } from 'react-native';

const { width, height } = Dimensions.get("window");

export default function About({navigation}){

    const[name , setName] = useState(null);

    const _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('name');
          if (value !== null) {
            console.log(value);
            setName(value);
          }
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(()=>{
        _retrieveData();
    },[])

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
            height: 250,
            width: width,
            backgroundColor: 'white'
        }}>
            <View style={{alignItems: 'center', marginTop: 30}}>
                <Image 
                    source={require('../assets/images/about-main.jpeg')}
                    resizeMode="cover"
                    style={{
                        marginBottom: 0,
                        width: 150,
                        height: 80,
                        marginTop: 20,
                        // borderRadius: 100,
                        // borderWidth: 4,
                        // borderColor: "#9779CF",
                        alignSelf: 'center'
                    }}
                />
            </View>
            <Text style={{fontFamily: "GothamMedium", textAlign: 'center', marginTop: 16, color: "black", fontSize: 16}}>{name}</Text>
            <View style={{backgroundColor: "#e2d9ff", width: 100, height: 25, alignSelf: 'center', marginTop: 20, justifyContent: 'center', borderRadius: 100, borderWidth: 1, borderColor: "#5D2DFD" }}>
                <Text style={{textAlign: 'center', fontSize: 10, alignSelf: 'center', fontFamily: "GothamMedium", color: "#5D2DFD"}}>Early Member</Text>
            </View>
        </View>
    )
}



function renderHeader(){
  return(
    <View style={{paddingLeft: 14, paddingRight: 14, marginTop: 14}}>
    <View
        style={{
            width: width-28,
            paddingTop: 10,
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
                    source={{uri: "https://res.cloudinary.com/neel0506/image/upload/v1621493632/wasteimages/pg6tdamtsjftdp17somo.jpg"}}
                    resizeMode="cover"
                    style={{
                        marginBottom: 0,
                        width: 80,
                        height: 80,
                        marginTop: 20,
                        borderRadius: 100,
                        borderWidth: 4,
                        borderColor: "#9779CF"
                    }}
                />
            </View>
            <View>
                <Text style={{color:"black", fontFamily: "GothamBold", fontSize: 16, lineHeight: 30, alignSelf: 'center'}}>@neelbavarva</Text>
                
                <View style={{flexDirection: 'row', borderBottomColor: "#ccc", borderBottomWidth: 1, justifyContent: 'center', marginHorizontal: width/7}}>
                    
                    <TouchableOpacity
                        style={{
                            width: 80,
                            backgroundColor: '#8f72f2',
                            alignItems: 'center',
                            marginTop: 10,
                            marginBottom: -20,
                            paddingVertical: 12,
                            borderRadius: 6
                        }}
                        onPress={() => Linking.openURL('mailto:neelbavarva5@gmail.com.com')}
                    >
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{color: 'white', fontFamily: 'GothamMedium'}}>Mail</Text>
                            <Image style={{width: 16, height: 12, tintColor: 'white', alignSelf: 'center', marginLeft: 5}} source={{uri: "http://simpleicon.com/wp-content/uploads/mail-6.png"}} />
                        </View>
                    </TouchableOpacity>
                    
                </View>

                <View style={{flexDirection: 'row', marginTop: 20}}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: "#f0faff",
                            width: width/3-20,
                            height: 100,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                            marginLeft: 7.5,
                            marginTop: 20
                        }} 
                        onPress={() => {Linking.openURL("https://www.linkedin.com/in/neel-bavarva-61662a1a3")}}
                    >
                        <Image style={{width: 30, height: 30, tintColor: "#0072B0"}} source={{uri: "https://image.flaticon.com/icons/png/512/61/61109.png"}} />
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
                            marginLeft: 7.5,
                            marginTop: 20
                        }} 
                        onPress={() => {Linking.openURL("https://github.com/neelbavarva")}}
                    >
                        <Image style={{width: 33, height: 33}} source={{uri: "https://image.flaticon.com/icons/png/512/25/25231.png"}} />
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
                            marginLeft: 7.5,
                            marginTop: 20
                        }} 
                        onPress={() => {Linking.openURL("https://neelbavarva.herokuapp.com")}}
                    >
                        <Image style={{width: 30, height: 30, tintColor: "#6C45BC"}} source={{uri: "https://media-public.canva.com/8ls10/MADmjO8ls10/2/tl.png"}} />
                        <Text style={{fontFamily: "GothamMedium", color: "grey", fontSize: 12, marginTop: 7}}>Website</Text>
                    </TouchableOpacity>
                </View>
                        
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
                      backgroundColor: "white",
                      marginTop: 20
                  }}
              >
                  <View style={{flexDirection: 'column'}}>
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
                                    paddingBottom: 24,
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
                marginTop: 15
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
      <View style={{marginBottom: 20}}>
        <View style={{backgroundColor: 'white', flexDirection: 'row', width: width - 30, alignSelf :'center', borderRadius: 8, marginTop: 15, height: 80, borderWidth: 4, borderColor: "#FEF3F3"}}>
          <Image style={{width: 50, height: 50, borderRadius: 100, marginLeft: 20 , alignSelf: 'center'}} source={{uri: "https://cdn.dribbble.com/users/251873/screenshots/9288094/media/a1c2f89065f68e1b2b5dcb66bdb9beb1.gif"}} />
          <View style={{ alignSelf: 'center', marginLeft: 20}}>
            <Text style={{fontFamily: "GothamMedium", color: 'grey', fontSize: 12}}>Have any copyright issue?</Text>
            <Text style={{fontFamily: "GothamMedium", marginTop: 5, color: 'grey', fontSize: 12}}>Mail us at: neelbavarva5@gmail.com</Text>
          </View>
        </View>
      </View>
    )
  }

  function renderAll(){
    return(
        <View style={{marginTop: 20}}>
            {/* <Text style={{fontFamily: "GothamMedium", color: 'grey', fontSize: 14, marginHorizontal: 20}}>About App</Text> */}
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
        </View>
    )
  }

  function renderAboutDeveloper(){
      return(
          <View style={{width: width - 30, height: 150, backgroundColor: "white", borderRadius: 8, marginTop: 20, alignSelf: 'center'}}>
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
                        <Image style={{width: 30, height: 30, tintColor: "#0072B0"}} source={{uri: "https://image.flaticon.com/icons/png/512/61/61109.png"}} />
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
                        <Image style={{width: 33, height: 33}} source={{uri: "https://image.flaticon.com/icons/png/512/25/25231.png"}} />
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
                        onPress={() => {Linking.openURL("https://neelbavarva.herokuapp.com")}}
                    >
                        <Image style={{width: 30, height: 30, tintColor: "#6C45BC"}} source={{uri: "https://media-public.canva.com/8ls10/MADmjO8ls10/2/tl.png"}} />
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

});

