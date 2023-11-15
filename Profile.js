
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Profile = ({navigation}) => {
  return (
    <ImageBackground source={{uri: 'https://i0.wp.com/batman-news.com/wp-content/uploads/2015/02/theJoker.jpeg?w=1920&quality=80&strip=info&ssl=1'}} 
    resizeMode="cover" style={styles.background}>
    <View style={{flex: 0.5, justifyContent: 'center',alignItems: 'center',}}>
    <Text style={{fontSize: 50, color: "yellow", marginBottom: 5,}}>Profile</Text>
    <Text style={styles.text2}> Bob, the tech whiz, built robots and 
        programmed software that revolutionized the industry.
        With a green thumb, Bob cultivated a garden that was a riot of colors, attracting butterflies 
        and birds from miles around.</Text>
      <TextInput placeholder="Password" secureTextEntry style={styles.text1} />
      <TextInput placeholder="Confirm Password" secureTextEntry style={styles.text1} />
     <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
    <Button title="Change Password" color="red" onPress={() => navigation.navigate('Welcome')} />
    <View style={{ width: 20 }} />
    </View>

    </View>
    </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  
background:{flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: "700px",},
  header: {
    fontSize: 24,
    marginBottom: 5,
  },
  input: {
    width: 400,
    height: 40,
    margin: 100,
    borderColor: 'red',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  text1:{ width: 200,
    height: 40,
    margin: 5,
    borderColor: 'red',
    borderWidth: 1,
    padding: 5,
    borderRadius: 20,
    backgroundColor: 'white',},

    text2:{color: "white",
    margin: 15, 
    alignItems: 'center',
    width: 300,}
});


export default Profile;

