//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Picker from './picker/Picker';

// create a component
class Alarm extends Component {
    state = {
        periods: ['AM', 'PM'],
    };

    render() {
        const now = new Date();
        return (
            <View style={styles.container}>
                <View style={styles.setAlarmBox}>
                    <Picker type="alarm"/>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    setAlarmBox: {
        
    },
});

//make this component available to the app
export default Alarm;
