import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const Spinner = ({ size }) => {
    return (
        <View style={styles.spinnerStyles}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
};

const styles = {
    spinnerStyles: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    }
}

export {Spinner}