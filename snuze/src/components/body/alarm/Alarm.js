//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, PickerIOS } from 'react-native';

// create a component
class Alarm extends Component {
    state = {
        periods: ['AM', 'PM'],
    };

    onTimeSelected = () => {
        console.log('====================================');
        console.log('Time Selected');
        console.log('====================================');
    }

    render() {
        const now = new Date();
        return (
            <View style={styles.container}>
                    <PickerIOS 
                        initDate={now.toISOString()}
                        onTimeSelected={(date) => this.onTimeSelected(date)} 
                    />
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
