import React from 'react';
import {View, Text, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AboutScreen =({navigation}) =>{







    return(
        <View style={{flexDirection: 'column', flex: 0.5, alignItems: 'center',justifyContent: 'center',height: "100%", }}>
        <Text style={{fontSize: 20, color: "black", marginBottom: 5,}}> WELCOME</Text>

        <View style={{flexDirection:'row', justifyContent:"space-evenly",padding:"20%",borderadius: "10px",}}>

        <Button title="Login"  color='red' onPress={() => navigation.navigate('SingInPage')} />
        <View style={{ width: 20 }} /> 
        <Button title="Signup" color='blue' /*disabled*/ onPress={() => navigation.navigate('Registration')} />
        <View style={{ width: 20 }} />
        <Button title="Profile" color='blue' /*disabled*/ onPress={() => navigation.navigate('Profile')} />
        <View style={{ width: 20 }} />
        <Button title="Data" color='blue' /*disabled*/ onPress={() => navigation.navigate('Data')} />
        </View>
        </View>

    );
};
export default AboutScreen;