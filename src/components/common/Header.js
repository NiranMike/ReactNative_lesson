/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import React from "react";
import  { Text, View } from 'react-native';

const Header = ({headerText}) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{ headerText }</Text>
        </View>
    );
};

const styles =  {
    textStyle: {
        fontSize: 20,
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        elevation: 2,
        position: 'relative',
    },
};

export { Header };