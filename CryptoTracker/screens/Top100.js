import React, {useState, useEffect} from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity, Image, ScrollView, Dimensions, Animated, ImageBackground, FlatList, LogBox, AsyncStorage } from 'react-native';
import {VictoryScatter, VictoryLine, VictoryChart, VictoryAxis, VictoryBar} from "victory-native";
import VictoryCustomTheme from './components/VictoryCustomTheme';
import SearchBar from './components/SearchBar';
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

export default function Top100({navigation}){

    const LineDivider = () => {
        return (
            <View style={{ width: 0, paddingVertical: 20 }}>
                <View style={{ flex: 1, borderLeftColor: "gray", borderLeftWidth: 1 }}></View>
            </View>
        );
    }

    const [topCurrency, setTopCurrency] = useState(null);
    const [loadMore, setLoadMore] = useState(true);

    const [query, setQuery] = useState('');
    const [names, setNames] = useState(null);
    const [count, setCount] = useState(1);
    const [filteredCurrency, setFilteredCurrency] = useState(null);
    const [dummyCrypto, setDummyCrypto] = useState(null);
    const [loader, setLoader] = useState(false);
    const [card, setCard] = useState('');

    const fetchTopCurrency = () => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
        .then(res=>res.json())
        .then(result_coin=>{
            setTopCurrency(result_coin);
            setDummyCrypto(result_coin);
            //console.log(JSON.stringify(topCurrency,null,4));
        })
        .catch((e) => {
            console.log("Error in TopCrypto ke fetch mai !! \n"+e);
        })
    }

    const fetchAllCurrency = () => {
        setLoadMore(false)
        setLoader(true)
        setDummyCrypto(null)
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=200&page=1&sparkline=false`)
        .then(res=>res.json())
        .then(result_coin=>{
            setTopCurrency(result_coin);
            setDummyCrypto(result_coin);
        })
        .catch((e) => {
            console.log("Error in AllCrypto ke fetch mai !! \n"+e);
        })
    }

    useEffect(()=>{
        fetchTopCurrency(),
        fetchCardStatus(),
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    },[])

    

    function processData() {
        let data = [];
        for(let i=0 ; i<topCurrency.length ; i++) {
            data[i] = topCurrency[i].name;
        }

        setNames(data);
        setCount(2);
    }

    function findMatches(wordToMatch, names) {
		return names.filter(item => {
			const regularExpression = new RegExp(wordToMatch, 'gi');
			return item.match(regularExpression);
		})
	}


    function processFiltered(text) {
        setQuery(text);
        const matchedNames = findMatches(text, names);
        const dummyFiltered = topCurrency.filter(coin => (matchedNames.includes(coin.name)));
        setFilteredCurrency(dummyFiltered);
    }


    const disableCard = async () => {
        try {
            await AsyncStorage.setItem('future_card', 'false')
            fetchCardStatus()
        } catch (error) {
            console.log(error)
        }
    };

    const fetchCardStatus = async () => {
        try {
            const temp = await AsyncStorage.getItem('future_card')
            setCard(temp);
        } catch (error) {
            console.log(error)
        }
    };


    function renderAllCrypto(){
        return(
            <ScrollView>

                <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "white",}}>
                    <View style={{ flexDirection: 'row', marginTop: 10 , marginBottom: 10}}>
                        <TouchableOpacity   style={{ flex: 1,}} 
                                onPress = {() => navigation.navigate("Home")}
                                >
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{marginLeft: 0, width: 27, height: 27, marginRight: 60 }} source={require('../assets/icons/back_arrow.png')} />
                            </View>
                        </TouchableOpacity>
                        <View style={{ flex: 1}}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{  marginLeft: 0, fontSize: 14, fontFamily: "GothamMedium" , color: "black"}}>Top Crypto</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1,}}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} />
                        </View>
                    </View>
                </View>


                {/* Future is Here!! */}
                {card !='false' ? 
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
                        <View style={{alignItems: 'flex-end', marginBottom: -20}}>
                            <TouchableOpacity  
                                onPress={() => disableCard()} 
                                style={{padding: 10, borderRadius: 8.5, marginRight: 10, marginTop: 0, backgroundColor: '#f5f5f5'}}
                            >
                                <Image style={{width:20, height:20, tintColor: 'grey'}} source={require('../assets/icons/close.png')} />
                            </TouchableOpacity>
                        </View>
                        
                        <View style={{flexDirection: 'column'}}>
                            <View style={{ alignItems: 'center'}}>
                                <Image 
                                    source={require('../assets/images/block.jpg')}
                                    resizeMode="cover"
                                    style={{
                                        marginBottom: 0,
                                        width: 150,
                                        height: 150,
                                        marginTop: 0
                                    }}
                                />
                            </View>
                            <View>
                                <Text style={{color:"black", fontFamily: "GothamBold", fontSize: 16, lineHeight: 30, alignSelf: 'center'}}>The Future is here !</Text>
                                <Text style={{color: "grey", fontFamily: "GothamMedium", fontSize: 12, lineHeight: 22, alignSelf: 'center', marginHorizontal: 20, marginTop: 10}}>Blockchain solves every problem of digital money transfer. These cryptocurrencies are made using Blockchain technology which uses special hashing algorithms to make every transaction secure.</Text>
                            </View>

                        </View>

                    </View>
                </View> : null}
                

                <SearchBar onChangeTextHandler={processFiltered} />

                {((topCurrency) && (count==1)) ? processData() : null}

                {(query==='') ? (

                <View style={{marginTop: 10, marginBottom: 10}}>
                
                    { topCurrency == null ? (
                        <View style={{alignItems: 'center', marginTop: width - 300}}>
                            <MaterialIndicator trackWidth={5} size={50} color="#5D2DFD" />
                        </View>
                    )  : (

                        topCurrency.map(coin =>{
                            return(
                                <TouchableOpacity 
                                    key={coin.id}
                                    style={{  
                                        justifyContent: 'center', 
                                        paddingHorizontal: 12, 
                                        paddingVertical: 4
                                    }}
                                    onPress={() => navigation.navigate("CryptoInfo",
                                        {
                                            val: coin.id,
                                            img: coin.image,
                                            screen: "Top100"
                                        }
                                    )}
                                >
                                    <View style={{ flexDirection: 'row', height: 75, backgroundColor: "white", borderRadius: 8 }}>
                                        <View style={{ flex: 1, borderRadius: 6,justifyContent: 'center'}}>
                                            <View style={{flexDirection: 'row'}}>
                                                <View style={{
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    marginLeft: 15
                                                }}>
                                                <Image 
                                                    source={{ uri: `${coin.image}`}}
                                                    resizeMode="cover"
                                                    style={{
                                                        width: 30,
                                                        height: 30,
                                                    }}
                                                />
                                                </View>
                                                <View style={{marginLeft: 8, justifyContent: 'center'}}>
                                                    <Text style={{color:"black", fontFamily: "GothamBold", fontSize: 16, lineHeight: 30}}>{coin.name}</Text>
                                                    <Text style={{color: "grey", fontFamily: "GothamMedium", fontSize: 12, lineHeight: 22}}>{coin.symbol}</Text>
                                                </View>
                                        </View>
                                    </View>

                                    <View
                                        style={{ 
                                            flex: 1,
                                            marginHorizontal: -20,
                                            borderRadius: 8,
                                            justifyContent: 'center',
                                                alignItems: 'center',
                                        }}
                                    >
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexDirection: 'column',
                                            }}
                                        >   
                                            <View style={{flexDirection: 'row'}}>
                                                <Text style={{ 
                                                    marginLeft: 0, 
                                                    fontSize: 14, 
                                                    fontFamily: 'GothamMedium', 
                                                    lineHeight: 22, 
                                                    color: "grey"
                                                }}>Per Change: </Text>
                                                <Text style={{ 
                                                    marginLeft: 0, 
                                                    fontSize: 14, 
                                                    fontFamily: 'GothamMedium', 
                                                    lineHeight: 22, 
                                                    color: (coin.market_cap_change_percentage_24h) == null ? "#E02B55" : (coin.market_cap_change_percentage_24h).toString().charAt(0) == "-" ? "tomato" : "#37E39F", 
                                                }}>{(coin.market_cap_change_percentage_24h) == null ? "null" : (coin.market_cap_change_percentage_24h).toFixed(2)}</Text>
                                            </View>
                                            <View style={{flexDirection: 'row'}}>
                                                <Text style={{ marginLeft: 0, fontSize: 14, fontFamily: 'GothamMedium', lineHeight: 22, color: "grey" }}>Price: </Text>
                                                <Text style={{ 
                                                    marginLeft: 0, 
                                                    fontSize: 14, 
                                                    fontFamily: 'GothamMedium', 
                                                    lineHeight: 22, 
                                                    color: "black"
                                                }}
                                            >{coin.current_price}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            )
                        })
                    )} 
                    
                </View>

                ) : (   
                
                <View style={{marginTop: 10}}>
            
                    { filteredCurrency == null || filteredCurrency.length==0 ? (
                        <View style={{alignItems: 'center', marginTop: width/3.5}}>
                            <Text style={{fontSize: 20, fontFamily: "GothamMedium" , color: "black"}}>Not Found, try another</Text>
                        </View>
                    )  : (

                        filteredCurrency.map(coin =>{
                            return(
                                <TouchableOpacity 
                                    key={coin.id}
                                    style={{  
                                        justifyContent: 'center', 
                                        paddingHorizontal: 12, 
                                        paddingVertical: 4
                                    }}
                                    onPress={() => navigation.navigate("CryptoInfo",
                                        {
                                            val: coin.id,
                                            img: coin.image,
                                            screen: "Top100"
                                        }
                                    )}
                                >
                                    <View style={{ flexDirection: 'row', height: 75, backgroundColor: "white", borderRadius: 8 }}>
                                        <View style={{ flex: 1, borderRadius: 6,justifyContent: 'center'}}>
                                            <View style={{flexDirection: 'row'}}>
                                                <View style={{
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    marginLeft: 15
                                                }}>
                                                <Image 
                                                    source={{ uri: `${coin.image}`}}
                                                    resizeMode="cover"
                                                    style={{
                                                        width: 30,
                                                        height: 30,
                                                    }}
                                                />
                                                </View>
                                                <View style={{marginLeft: 8, justifyContent: 'center'}}>
                                                    <Text style={{color:"black", fontFamily: "GothamBold", fontSize: 16, lineHeight: 30}}>{coin.name}</Text>
                                                    <Text style={{color: "grey", fontFamily: "GothamMedium", fontSize: 12, lineHeight: 22}}>{coin.symbol}</Text>
                                                </View>
                                        </View>
                                    </View>

                                    <View
                                        style={{ 
                                            flex: 1,
                                            marginHorizontal: -20,
                                            borderRadius: 8,
                                            justifyContent: 'center',
                                                alignItems: 'center',
                                        }}
                                    >
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexDirection: 'column',
                                            }}
                                        >   
                                            <View style={{flexDirection: 'row'}}>
                                                <Text style={{ 
                                                    marginLeft: 0, 
                                                    fontSize: 14, 
                                                    fontFamily: 'GothamMedium', 
                                                    lineHeight: 22, 
                                                    color: "grey"
                                                }}>Per Change: </Text>
                                                <Text style={{ 
                                                    marginLeft: 0, 
                                                    fontSize: 14, 
                                                    fontFamily: 'GothamMedium', 
                                                    lineHeight: 22, 
                                                    color: (coin.market_cap_change_percentage_24h).toString().charAt(0) == "-" ? "tomato" : "#37E39F", 
                                                }}>{(coin.market_cap_change_percentage_24h).toFixed(2)}</Text>
                                            </View>
                                            <View style={{flexDirection: 'row'}}>
                                                <Text style={{ marginLeft: 0, fontSize: 14, fontFamily: 'GothamMedium', lineHeight: 22, color: "grey" }}>Price: </Text>
                                                <Text style={{ 
                                                    marginLeft: 0, 
                                                    fontSize: 14, 
                                                    fontFamily: 'GothamMedium', 
                                                    lineHeight: 22, 
                                                    color: "black"
                                                }}
                                            >{coin.current_price}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            )
                        })
                    )} 
                    
                </View>
                
                )}
                
                {topCurrency != null && (
                    loadMore && (
                        <TouchableOpacity 
                            onPress={() => fetchAllCurrency()}
                            style={styles.loadButton}
                        >
                            <Text style={{textAlign: 'center', fontFamily: 'GothamMedium', color: "#5D2DFD"}}>Load More</Text>
                        </TouchableOpacity>
                    )
                )}

                {dummyCrypto == null && (
                    loader && (
                        <View style={{marginVertical: 30}}>
                            <MaterialIndicator trackWidth={5} size={50} color="#5D2DFD" />
                        </View>
                    )
                )}


            </ScrollView>
        )
    }

    return (
        <ScrollView>    
            {renderAllCrypto()}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    loadButton: {
        backgroundColor: 'white',
        width: 120,
        paddingVertical: 15,
        alignSelf: 'center',
        borderRadius: 8,
        marginTop: 30,
        marginBottom: 30
    }
});

