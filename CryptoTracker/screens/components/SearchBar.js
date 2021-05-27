import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity, Image, ScrollView, Dimensions, Animated, ImageBackground, FlatList, LogBox, TextInput } from 'react-native';

export default function SearchBar({ onChangeTextHandler}) {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.textInput}
                placeholder="Search"
                onChangeText={text => onChangeTextHandler(text)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        marginTop: 15, 
        marginHorizontal: 10, 
        backgroundColor: "white", 
        borderRadius: 8,
    }, 
    textInput : {
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
        paddingLeft: 20
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