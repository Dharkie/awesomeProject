import React from 'react';
import {View, Text, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AboutScreen =({navigation}) =>{







    return(
        <View style={{flexDirection: 'column', flex: 1,alignItems: 'center', }}>
        <Text> Thank you</Text>

        <View style={{flexDirection:'row', justifyContent:"space-evenly",padding:"10px 20px",borderadius: "10px",}}>

        <Button title="Login"  color='red' onPress={() => navigation.navigate('SingInPage')} />
        <View style={{ width: 20 }} /> 
        <Button title="Signup" color='blue' /*disabled*/ onPress={() => navigation.navigate('Registration')} />
        <View style={{ width: 20 }} />
        <Button title="Profile" color='blue' /*disabled*/ onPress={() => navigation.navigate('Profile')} />
        </View>
        </View>

    );
};
export default AboutScreen;