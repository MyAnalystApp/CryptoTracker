import React, {useState, useEffect} from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity, Image, ScrollView, Dimensions, Animated, ImageBackground, FlatList, LogBox, Alert, Linking, AsyncStorage, TextInput, ToastAndroid } from 'react-native';

const { width, height } = Dimensions.get("window");

export default function Portfolio({navigation}){

    const [email, setEmail] = useState(null)

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
                                <Text style={{marginLeft: 0, fontSize: 14, fontFamily: "GothamMedium", color: "black"}}>Student Portfolio</Text>
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

    function renderPortfolioInfo(){
        return(
            <ScrollView style={{marginBottom: 20, borderBottomColor: "#ccc", borderBottomWidth: 1, marginHorizontal: 15, paddingBottom: 20}}>
                <View style={{marginHorizontal: 0, borderRadius: 10, paddingBottom: 20, marginTop: 10}}>
                    <Image style={{width: width - 40, height: 200, alignSelf: 'center', marginTop: 20}} source={require('../assets/images/Gemini-Cryptocurrencies_Stellar_Stellar_Lumens__XLM_-_The_Token_Powering_an_Open_Network_for_Exchanging_2x.webp')} />
                    <Text style={{fontFamily: "GothamBold", color: "black", textAlign: 'center', marginTop: 20, fontSize: 14}}>Student Portfolio</Text>
                    <Text style={{fontFamily: "GothamLight", color: "grey", textAlign: 'center', marginTop: 7.5, fontSize: 18}}>Comming Soon!</Text>
                </View>

                <View style={{marginHorizontal: 0, backgroundColor: "#F5F5F5", borderRadius: 10, paddingBottom: 20, marginTop: 10}}>
                    <Text style={{fontFamily: "GothamBold", color: "#5D2DFD", textAlign: 'left', marginTop: 20, fontSize: 14, marginLeft: 20, marginStart: 20}}>Search and analyse your Cryptocurrencies</Text>
                    <Image style={{width: width - 40, height: 200, alignSelf: 'center', marginTop: 20, marginLeft: 10}} source={require('../assets/images/Gemini-Category_Cryptocurrencies_1__1_.webp')} />
                </View>

                <View style={{marginHorizontal: 0, backgroundColor: "#F5F5F5", borderRadius: 10, paddingBottom: 20, marginTop: 20}}>
                    <Text style={{fontFamily: "GothamBold", color: "#5D2DFD", textAlign: 'left', marginTop: 20, fontSize: 14, marginLeft: 20, marginStart: 20}}>Add any Cryptocurrencies to your virtual wallet</Text>
                    <Image style={{width: width - 40, height: 200, alignSelf: 'center', marginTop: 20, marginLeft: 10}} source={require('../assets/images/Gemini-Cryptocurrencies__Bread__Bread-_Secure_Crypto_Wallet___Rewards_Platform.webp')} />
                </View>

                <View style={{marginHorizontal: 0, backgroundColor: "#F5F5F5", borderRadius: 10, paddingBottom: 20, marginTop: 20}}>
                    <Text style={{fontFamily: "GothamBold", color: "#5D2DFD", textAlign: 'left', marginTop: 20, fontSize: 14, marginLeft: 20, marginStart: 20}}>Track your Cryptocurrencies in your wallet</Text>
                    <Image style={{width: width - 40, height: 200, alignSelf: 'center', marginTop: 20, marginLeft: 10}} source={require('../assets/images/Gemini-How_Do_I_Invest_In_and_Trade_Bitcoin___1_.webp')} />
                </View>

                <View style={{marginHorizontal: 0, backgroundColor: "#F5F5F5", borderRadius: 10, paddingBottom: 20, marginTop: 20}}>
                    <Text style={{fontFamily: "GothamBold", color: "#5D2DFD", textAlign: 'left', marginTop: 20, fontSize: 14, marginLeft: 20, marginStart: 20}}>Sell your Cryptocurrencies whenever you want</Text>
                    <Image style={{width: width - 40, height: 200, alignSelf: 'center', marginTop: 20, marginLeft: 10}} source={require('../assets/images/Gemini-Category_Cryptocurrencies_2__2_.webp')} />
                </View>

                <View style={{marginHorizontal: 0, backgroundColor: "#F5F5F5", borderRadius: 10, paddingBottom: 20, marginTop: 20}}>
                    <Text style={{fontFamily: "GothamBold", color: "#5D2DFD", textAlign: 'left', marginTop: 20, fontSize: 14, marginLeft: 20, marginStart: 20}}>Practice until your are ready to go for Trading</Text>
                    <Image style={{width: width - 40, height: 200, alignSelf: 'center', marginTop: 20, marginLeft: 10}} source={require('../assets/images/Gemini-Cryptocurrencies_Bitcoin_Proof_of_Work_Deep_Dive-_How_Bitcoin_Mining_Works.webp')} />
                </View>
            </ScrollView>
        )
    }

    function subscribe(){
        ToastAndroid.showWithGravity(
            "Subscribed",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM
        )

        setEmail(null)
    }


    return (
        <ScrollView style={{backgroundColor: "white"}}>
            {renderNavbar()}
            {renderPortfolioInfo()}
            <View style={{marginHorizontal: 0, backgroundColor: "#F5F5F5", borderRadius: 10, paddingBottom: 10, marginHorizontal: 15, marginBottom: 20}}>
                <Text style={{fontFamily: "GothamBold", marginHorizontal: 12, paddingBottom: 15, color: "grey", marginTop: 15, lineHeight: 16, fontSize: 13}}>Subsrcibe to get notified whenever Student Portfolio is released</Text>

                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <TextInput 
                        onChangeText={e => setEmail(e)}
                        value={email}
                        placeholder='Email' 
                        placeholderTextColor="grey"
                        style={{backgroundColor: "white", width: width - 100, borderRadius: 8, color: "grey", fontFamily: "GothamBold", paddingLeft: 20}} 
                    />
                    <TouchableOpacity 
                        onPress={() => subscribe()}
                        style={{backgroundColor: "#5D2DFD", marginLeft: 5, borderRadius: 8, width: 50, justifyContent: 'center'}}
                    >
                        <Image style={{width: 20, height: 20, tintColor: "white", alignSelf: 'center'}} source={require('../assets/icons/right-arrow.png')} />
                    </TouchableOpacity>
                </View>
            </View>
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

