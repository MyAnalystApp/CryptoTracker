import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity, Image, ScrollView, Dimensions, Animated, ImageBackground, FlatList, LogBox, TextInput } from 'react-native';
const { width, height } = Dimensions.get("window");
export default function SearchBar({ onChangeTextHandler}) {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.textInput}
                placeholder="Search"
                placeholderTextColor="grey"
                onChangeText={text => onChangeTextHandler(text)}
            />
            <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
                <TouchableOpacity
                    onPress={() => onChangeTextHandler("")}
                    style={{ width: 48, height: 48, justifyContent: 'center', backgroundColor: '#f5f5f5', alignSelf: 'center', marginRight: 5, borderRadius: 6}}
                >
                    <Image style={{width: 23, height: 23, alignSelf: 'center', tintColor: 'grey'}} source={require('../../assets/icons/close.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        marginTop: 15, 
        marginHorizontal: 10, 
        backgroundColor: "white", 
        borderRadius: 8,
        flexDirection: 'row'
    }, 
    textInput : {
        width: width-80,
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "#37E39F",
        borderRadius: 8,
        padding: 10,
        marginTop: 4,
        marginBottom: 4,
        fontFamily: 'GothamMedium',
        fontSize: 14,
        marginHorizontal: 4,
        paddingLeft: 20,
        color: 'black'
    },
    searchButton: {
        backgroundColor: "#37E39F",
        marginTop: 5,
        marginHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 8
    },
    searchButtonText: {
        marginTop:0, 
        lineHeight: 22, 
        color: 'white', 
        textAlign: "center",
        fontFamily: 'GothamMedium'
    },
});