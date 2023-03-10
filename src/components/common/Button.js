/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';

const Button = ({ onPress, children }) => {
    const { buttonStyles, textStyles } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyles}>
            <Text style={textStyles}>{ children }</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyles: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
    },
    textStyles: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    }
}

export {Button};
