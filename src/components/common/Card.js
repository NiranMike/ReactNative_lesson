/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';

const Card = ({children}) => {
    return (
        <View style={styles.containerStyle}>
            {children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        boderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,
    },
};

export { Card };