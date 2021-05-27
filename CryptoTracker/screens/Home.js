import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, TouchableOpacity, SafeAreaView, StyleSheet, Image, LogBox, ImageBackground, FlatList, Linking, Dimensions} from 'react-native';

const { width } = Dimensions.get("window");

export default function Home({navigation}){

    const [trending, setTrending] = useState(null);

    const fetchTrending = () => {
        fetch(`https://api.coingecko.com/api/v3/search/trending`)
        .then(res=>res.json())
        .then(result_coin=>{
            setTrending(result_coin.coins);
            // console.log(JSON.stringify(trending.coins,null,4));
        })
    }

    useEffect(()=>{
        fetchTrending(),
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    },[])

    function renderNavbar(){
        return(
            <ScrollView>
                <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "white",}}>
                    <View style={{ flexDirection: 'row', marginTop: 15 , marginBottom: 15}}>
                        <TouchableOpacity   style={{ flex: 1,}}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                {/* <Image style={{marginLeft: 0, width: 27, height: 27, marginRight: 60 }} source={require('../assets/icons/menu.png')} /> */}
                            </View>
                        </TouchableOpacity>
                        <View style={{ flex: 1}}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{  marginLeft: 0, fontSize: 14, fontFamily: "GothamMedium", color: "black"}}>All Crypto Info</Text>
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

    const renderItem = ({item, index}) =>(
            
        <TouchableOpacity
            style={{
                width: 200,
                paddingTop: 20,
                paddingBottom: 20,
                paddingHorizontal: 30,
                marginLeft: index == 0 ? 12 : 0,
                marginRight: 20,
                borderRadius: 10,
                backgroundColor: "white"
            }}
            onPress={() => navigation.navigate("CryptoInfo",
                {
                    val: item.item.id,
                    img: item.item.large,
                    screen : "Home"
                }
            )}
            // onPress={() => console.log(item.item.id)}
        >
            <View style={{flexDirection: 'row'}}>
                <View>
                    <Image 
                        source={{ uri: `${item.item.large}`}}
                        resizeMode="cover"
                        style={{
                            marginTop: 0,
                            width: 25,
                            height: 25,
                            marginTop: 5
                        }}
                    />
                </View>
                <View style={{marginLeft: 8}}>
                    <Text style={{color:"black", fontFamily: "GothamBold", fontSize: 16, lineHeight: 30}}>{item.item.name}</Text>
                    <Text style={{color: "grey", fontFamily: "GothamMedium", fontSize: 12, lineHeight: 22}}>{item.item.symbol}</Text>
                </View>

            </View>

            <View style={{marginTop: 12, flexDirection: 'row'}}>
                <Text style={{color:"black", fontFamily: "GothamMedium", fontSize: 12, lineHeight: 30}}>Market Cap Rank: </Text>
                <Text style={{color: "grey", fontFamily: "GothamMedium", fontSize: 12, lineHeight: 30}}>{item.item.market_cap_rank}</Text>
            </View>
            
        </TouchableOpacity>
    )


    function renderHeader(){
        return(
            <View style={{flex: 1, paddingBottom: 10}} >
            <View style={{  width: "100%",  height: 300 }} > 
                <ImageBackground
                    source={require('../assets/images/banner.png')}
                    resizeMode="cover"
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 50
                    }}
                >
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 50
                        }}
                    >
                        <Text style={{color: "white", fontFamily: "GothamBold", fontSize: 22, lineHeight: 22}}>Cryptocurrency</Text>

                    </View>

                    <View style={{ position: 'absolute', bottom: "-20%"}}>
                        {trending===null ? (
                            <Text style={{marginLeft:16, color: "black", fontFamily: "GothamMedium", fontSize: 14, lineHeight: 30}}>
                                Loading...
                            </Text>
                        ) : (
                            <Text style={{marginLeft:16, color: "white", fontFamily: "GothamMedium", fontSize: 14, lineHeight: 30}}>
                                Trending
                            </Text>
                        )}

                        <FlatList 
                            contentContainerStyle={{marginTop: 8}}
                            data={trending}
                            renderItem={renderItem}
                            keyExtractor={item => `${item.item.id}`}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    
                </ImageBackground>
                
            </View>
        </View>
        )
    }

    function renderAbout(){
        return(
            <View>

                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginHorizontal: 14,
                        paddingVertical: 24,
                        paddingHorizontal: 8,
                        backgroundColor: "white",
                        borderRadius: 8,
                    }}
                    onPress = {() => navigation.navigate("Top100")}
                >
                    <View style={{flexDirection: 'column', marginLeft: 8}}>
                        <View style={{flexDirection: 'row', }}>
                            <Image
                                // source={require('../assets/icons/blockchain-logo.png')}
                                source={require('../assets/images/block.jpg')}
                                style={{
                                    width: 70,
                                    height: 70,
                                    marginRight: 8
                                }}
                            />
                            <View style={{alignSelf: 'center', width: width/2 + 20}}>
                                <Text style={{fontFamily: "GothamBold", alignSelf: 'center', fontSize: 14, alignSelf: 'flex-start'}}>All Cryptocurrencies</Text>
                                <Text style={{fontFamily: "GothamLight", marginRight: 8, fontSize: 12, lineHeight: 14, marginTop: 8}}>View all cryptocurrencies and their all market data along with their chart information.</Text>
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

                <View
                    style={{
                        marginTop: 16,
                        marginHorizontal: 14,
                        padding :20,
                        borderRadius: 8,
                        backgroundColor: "#5D2DFD"
                    }}
                >
                    <Text style={{fontFamily: "GothamBold", color: "white", fontSize: 15}}>Investing Info</Text>
                    <Text style={{
                        lineHeight: 18,
                        marginTop: 12,
                        fontFamily: "GothamLight", 
                        color: "white",
                        fontSize: 12
                    }}>This App is not for investment purpose, it's only for your daily cryptocurrency updates/info and to know how their rates changes, so that you can learn about it.</Text>

                    <TouchableOpacity style={{marginTop: 12}}
                        onPress={() => {Linking.openURL("https://www.investopedia.com/articles/investing/082914/basics-buying-and-investing-bitcoin.asp")}}
                    >
                        <Text
                            style={{
                                textDecorationLine: 'underline',
                                color: "#37E39F",
                                fontFamily: "GothamMedium",
                                fontSize: 14
                            }}
                        >
                            Learn More
                        </Text>
                    </TouchableOpacity>
                </View>

        </View>
        )
    }

    function renderFeature(){
        return(
            <View style={{flexDirection: 'row', marginLeft: 14, marginRight: 14, marginTop: 14}}>
            <TouchableOpacity
                style={{
                    width: width/2 -19,
                    paddingTop: 12.5,
                    paddingHorizontal: 0,
                    marginLeft: 0,
                    marginRight: 10,
                    borderRadius: 10,
                    backgroundColor: "white",
                    alignSelf: 'center',
                    paddingBottom: 22.5
                }}
                onPress = {() => navigation.navigate("AboutBitcoin")}
            >
                <View style={{flexDirection: 'column'}}>
                    <View style={{ alignItems: 'center'}}>
                        <Image 
                            source={require('../assets/images/bitcoin.webp')}
                            resizeMode="cover"
                            style={{
                                marginTop: 0,
                                width: 30,
                                height: 30,
                                marginTop: 15
                            }}
                        />
                    </View>
                    <View>
                        <Text style={{color:"black", fontFamily: "GothamBold", fontSize: 16, lineHeight: 30, alignSelf: 'center', marginTop: 10}}>About Bitcoin</Text>
                        <Text style={{color: "grey", fontFamily: "GothamMedium", fontSize: 10, lineHeight: 22, alignSelf: 'center', marginTop: 0}}>See how Bitcoin works</Text>
                    </View>

                </View>

                {/* Value */}
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    width: width/2 -19,
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingHorizontal: 0,
                    marginLeft: 0,
                    marginRight: 10,
                    borderRadius: 10,
                    backgroundColor: "white",
                    alignSelf: 'center',
                    paddingBottom: 20
                }}
                onPress = {() => navigation.navigate("About")}
            >
                <View style={{flexDirection: 'column'}}>
                    <View style={{ alignItems: 'center'}}>
                        <Image 
                            source={require('../assets/images/Block-Round.png')}
                            resizeMode="cover"
                            style={{
                                width: 40,
                                height: 40,
                                marginTop: 10,
                            }}
                        />
                    </View>
                    <View>
                        <Text style={{color:"black", fontFamily: "GothamBold", fontSize: 16, lineHeight: 30, alignSelf: 'center', marginTop: 10}}>About Tracker</Text>
                        <Text style={{color: "grey", fontFamily: "GothamMedium", fontSize: 10, lineHeight: 22, alignSelf: 'center', marginTop: 0}}>Know more about app</Text>
                    </View>

                </View>

                {/* Value */}
            </TouchableOpacity>
            
        </View>
        )
    }


    return (
        <ScrollView>
            {renderNavbar()}
            {renderHeader()}
            {renderAbout()}
            {renderFeature()}
        </ScrollView>
    );
};

const styles = StyleSheet.create({

});

