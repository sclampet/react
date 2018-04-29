//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Picker from './picker/Picker';


// create a component
class AlarmSettings extends Component {
    state = {
        chosenTime: new Date(),
    };

    setAlarm = (newTime) => {
        console.log('Time Change ', newTime)
        this.setState({chosenTime: newTime});
    };


    render() {
        const { chosenTime } = this.state;

        return (
            <View style={styles.container}>
                <View style={{height: 50, width: 200}}>
                    <Text>New Time: {String(chosenTime)}</Text>
                </View>
                <View style={[styles.section, styles.alarmClock]}>
                    <Picker chosenTime={chosenTime} setTime={this.setAlarm} />
                </View>
                <View style={[styles.section, styles.setAlarm]}>
                    <Text>Set Alarm</Text>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    section: {
        flex: 0,
        height: 55,
        width: 300,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 20,
    },
    alarmClock: {
        marginTop: 100,
    },
    amount: {
        marginTop: 50,
    },
    sound: {
    },
    setAlarm: {
        flex: 0,
        height: 55,
        width: 300,
        top: 200,
        borderColor: 'black',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center', 
    },
});

//make this component available to the app
export default AlarmSettings;
