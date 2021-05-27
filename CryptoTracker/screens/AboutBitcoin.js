import React, {useState, useEffect} from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity, Image, ScrollView, Dimensions, Animated, ImageBackground, FlatList, LogBox } from 'react-native';

const { width, height } = Dimensions.get("window");

export default function AboutBitcoin({navigation}){

  return (
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
                            <Text style={{  marginLeft: 0, fontSize: 14, fontFamily: "GothamMedium" , color: "black"}}>About Bitcoin</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1,}}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} />
                    </View>
                </View>
            </View>

                <View style={{backgroundColor: 'white'}}>
                    <View
                        style={{
                            width: width,
                            paddingTop: 10,
                            paddingBottom: 30,
                            marginLeft: 0,
                            marginRight: 10,
                            backgroundColor: "white"
                        }}
                    >
                        <View style={{flexDirection: 'column'}}>
                            <View style={{ alignItems: 'center'}}>
                                <Image 
                                    source={require('../assets/images/AboutBitcoin/bitcoin-img.jpg')}
                                    resizeMode="cover"
                                    style={{
                                        marginBottom: 20,
                                        width: 180,
                                        height: 180,
                                        marginTop: 20
                                    }}
                                />
                            </View>
                            <View style={{marginTop: 20}}>
                                <Text style={{color:"black", fontFamily: "GothamBold", fontSize: 16, lineHeight: 30, alignSelf: 'center', marginBottom: 5}}>How does Bitcoin work?</Text>
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={{alignSelf: 'center' ,color: "grey", fontFamily: "GothamMedium", fontSize: 12, lineHeight: 22, alignSelf: 'center', marginHorizontal: 50, marginTop: 10}}>This is a question often surrounded</Text>
                                    <Text style={{alignSelf: 'center' ,color: "grey", fontFamily: "GothamMedium", fontSize: 12, lineHeight: 22, alignSelf: 'center', marginHorizontal: 50}}>by confusion, so here's a quick explanation!</Text>
                                </View>
                            </View>

                        </View>

                    </View>
                </View>

            <View style={{backgroundColor: 'white'}}>

                <View
                    style={{
                        width: width,
                        marginLeft: 0,
                        backgroundColor: "white",
                        padding: 10,
                    }}
                >
                    <View style={{borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10}}>
                        <View style={{marginBottom: 20}}>
                            <Text style={{fontFamily: "GothamBold", fontSize: 16, color: "orange", marginBottom: 10, marginTop: 10}}>The basics for a new user</Text>
                        </View>

                        <View style={{flexDirection: 'column'}}>
                            <View style={{ alignItems: 'center'}}>
                                <Image 
                                    source={require('../assets/images/AboutBitcoin/new-user.jpg')}
                                    resizeMode="cover"
                                    style={{
                                        width: 260,
                                        height: 252.5,
                                    }}
                                />
                            </View>
                            <View style={{marginTop: 20}}>
                                <Text style={{color: "grey", fontFamily: "GothamMedium", fontSize: 12, lineHeight: 22,  marginTop: 10}}>As a new user, you can get started with Bitcoin without understanding the technical details. Once you've installed a Bitcoin wallet on your computer or mobile phone, it will generate your first Bitcoin address and you can create more whenever you need one. You can disclose your addresses to your friends so that they can pay you or vice versa. In fact, this is pretty similar to how email works, except that Bitcoin addresses should be used only once.</Text>
                            </View>

                        </View>
                    </View>

                </View>

                <View
                    style={{
                        width: width,
                        marginLeft: 0,
                        backgroundColor: "white",
                        padding: 10,
                    }}
                >
                    <View style={{borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10}}>
                        <View style={{marginBottom: 20, flexDirection: 'row'}}>
                            <Text style={{fontFamily: "GothamBold", fontSize: 16, color: "orange", marginBottom: 10, marginTop: 10}}>Balances </Text>
                            <Text style={{fontFamily: "GothamBold", fontSize: 16, color: "grey", marginBottom: 10, marginTop: 10}}>- block chain</Text>
                        </View>

                        <View style={{flexDirection: 'column'}}>
                            <View style={{ alignItems: 'center'}}>
                                <Image 
                                    source={require('../assets/images/AboutBitcoin/blockchain.jpg')}
                                    resizeMode="cover"
                                    style={{
                                        width: 320,
                                        height: 252.5,
                                    }}
                                />
                            </View>
                            <View style={{marginTop: 20}}>
                                <Text style={{color: "grey", fontFamily: "GothamMedium", fontSize: 12, lineHeight: 22,  marginTop: 10}}>The block chain is a shared public ledger on which the entire Bitcoin network relies. All confirmed transactions are included in the block chain. It allows Bitcoin wallets to calculate their spendable balance so that new transactions can be verified thereby ensuring they're actually owned by the spender. The integrity and the chronological order of the block chain are enforced with cryptography.</Text>
                            </View>

                        </View>
                    </View>

                </View>


                <View
                    style={{
                        width: width,
                        marginLeft: 0,
                        backgroundColor: "white",
                        padding: 10,
                    }}
                >
                    <View style={{borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10}}>
                        <View style={{marginBottom: 20, flexDirection: 'row'}}>
                            <Text style={{fontFamily: "GothamBold", fontSize: 16, color: "orange", marginBottom: 10, marginTop: 10}}>Transactions </Text>
                            <Text style={{fontFamily: "GothamBold", fontSize: 16, color: "grey", marginBottom: 10, marginTop: 10}}>- private keys</Text>
                        </View>

                        <View style={{flexDirection: 'column'}}>
                            <View style={{ alignItems: 'center'}}>
                                <Image 
                                    source={require('../assets/images/AboutBitcoin/private-keys.jpg')}
                                    resizeMode="cover"
                                    style={{
                                        width: 320,
                                        height: 234,
                                    }}
                                />
                            </View>
                            <View style={{marginTop: 20}}>
                                <Text style={{color: "grey", fontFamily: "GothamMedium", fontSize: 12, lineHeight: 22,  marginTop: 10}}>A transaction is a transfer of value between Bitcoin wallets that gets included in the block chain. Bitcoin wallets keep a secret piece of data called a private key or seed, which is used to sign transactions, providing a mathematical proof that they have come from the owner of the wallet. The signature also prevents the transaction from being altered by anybody once it has been issued. All transactions are broadcast to the network and usually begin to be confirmed within 10-20 minutes, through a process called mining.</Text>
                            </View>

                        </View>
                    </View>

                </View>

                <View
                    style={{
                        width: width,
                        marginLeft: 0,
                        backgroundColor: "white",
                        padding: 10,
                    }}
                >
                    <View style={{borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10}}>
                        <View style={{marginBottom: 20, flexDirection: 'row'}}>
                            <Text style={{fontFamily: "GothamBold", fontSize: 16, color: "orange", marginBottom: 10, marginTop: 10}}>Processing </Text>
                            <Text style={{fontFamily: "GothamBold", fontSize: 16, color: "grey", marginBottom: 10, marginTop: 10}}>- mining</Text>
                        </View>

                        <View style={{flexDirection: 'column'}}>
                            <View style={{ alignItems: 'center'}}>
                                <Image 
                                    source={require('../assets/images/AboutBitcoin/mining.jpg')}
                                    resizeMode="cover"
                                    style={{
                                        width: 320,
                                        height: 266,
                                    }}
                                />
                            </View>
                            <View style={{marginTop: 20}}>
                                <Text style={{color: "grey", fontFamily: "GothamMedium", fontSize: 12, lineHeight: 22,  marginTop: 10}}>Mining is a distributed consensus system that is used to confirm pending transactions by including them in the block chain. It enforces a chronological order in the block chain, protects the neutrality of the network, and allows different computers to agree on the state of the system. To be confirmed, transactions must be packed in a block that fits very strict cryptographic rules that will be verified by the network. These rules prevent previous blocks from being modified because doing so would invalidate all the subsequent blocks. Mining also creates the equivalent of a competitive lottery that prevents any individual from easily adding new blocks consecutively to the block chain. In this way, no group or individuals can control what is included in the block chain or replace parts of the block chain to roll back their own spends.</Text>
                            </View>

                        </View>
                    </View>

                </View>


                <View
                    style={{
                        width: width,
                        marginLeft: 0,
                        backgroundColor: "white",
                        padding: 10,
                    }}
                >
                    <View style={{borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10}}>
                        <View style={{marginBottom: 20, flexDirection: 'row'}}>
                            <Text style={{fontFamily: "GothamBold", fontSize: 16, color: "orange", marginBottom: 10, marginTop: 10}}>Going down the rabbit hole</Text>
                        </View>

                        <View style={{flexDirection: 'column'}}>
                            <View style={{ alignItems: 'center'}}>
                                <Image 
                                    source={require('../assets/images/AboutBitcoin/paper.jpg')}
                                    resizeMode="cover"
                                    style={{
                                        width: 320,
                                        height: 264,
                                    }}
                                />
                            </View>
                            <View style={{marginTop: 20}}>
                                <Text style={{color: "grey", fontFamily: "GothamMedium", fontSize: 12, lineHeight: 22,  marginTop: 10}}>This is just a short summary of Bitcoin. If you want to learn more of the details, you can read the original paper that describes its design, the developer documentation, or explore the Bitcoin wiki.</Text>
                            </View>

                        </View>
                    </View>

                </View>
                
            </View>            
            
        </ScrollView>
  );
};

const styles = StyleSheet.create({

});

