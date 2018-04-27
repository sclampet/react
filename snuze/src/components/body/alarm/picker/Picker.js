//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, PickerIOS } from 'react-native';
import SimplePicker from 'react-native-simple-picker';

const alarmOptions = ['Time1', 'Time2', 'Time3'];
const ringtones = ['Ringtone1', 'Ringtone2', 'Ringtone3'];
const snuzeAmount = ['Amount1', 'Amount2', 'Amount3'];

// create a component
class Picker extends Component {
    state = {
        alarmSet: '',
        type: this.props.type,
        options: [],
    };
    
    componentWillMount() {
        const type = this.props.type;
        if(type === 'alarm') {
            this.setState({options: alarmOptions});
        } else if(type === 'ringtone') {
            this.setState({ options: alarmOptions });
        } else if(type === 'amount') {
            this.setState({options: snuzeAmount});
        };
    }
    
    
    render() {

        const title = this.state.alarmSet != '' ? "Your alarm has been set to "+this.state.alarmSet+'!' : "Please set your alarm!";  
        
        return (
            <View style={styles.container}>
                <Text>{title}</Text>
                <Text 
                    style={{ color: 'blue', marginTop: 20 }}
                    onPress={() => {
                        this.refs.picker.show();
                    }}>
                    Set Your Alarm
                </Text>
                <SimplePicker
                    ref={'picker'}
                    options={this.state.options}
                    itemStyle={{
                        fontSize: 25,
                        color: 'blue',
                        textAlign: 'center',
                        fontWeight: 'bold',
                    }}
                    onSubmit={(option) => {
                        this.setState({
                            alarmSet: option,
                        });
                    }}
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
        backgroundColor: 'grey',
    },
    setAlarmBox: {

    },
});

//make this component available to the app
export default Picker;
