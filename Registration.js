
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';

const Registration = () => {
  return (
    <ImageBackground source={{uri: 'https://hips.hearstapps.com/hmg-prod/images/03-the-joker-w1200-h630-1562679871.jpg?crop=0.525xw:1xh;center,top&resize=980:*'}} 
    resizeMode="cover" style={{flex: 1,
    justifyContent: 'center', height: "700px",}}>
    <View style={{flex: 0.5,justifyContent: 'center',alignItems: 'center',}}>
      <Text style={{fontSize: 50, color: "white", marginBottom: 5,}}>Register</Text> 
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      <TextInput placeholder="Confirm Password" secureTextEntry style={styles.input} />      
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Short Bio" style={styles.bio} />
      <View style={{flexDirection:'row', justifyContent:"space-evenly"}}>
      <Button title="Signup" color='red' onPress={() => {}} /> 
      <Button title="Signup" color='' disabled onPress={() => {}} />
      </View>
      </View>
   
    </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  
  header: {
    fontSize: 24,
    marginBottom: 5,
  },
  bio:{width: 200,
    height: 200,
    margin: 5,
    borderColor: 'red',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    borderRadius: 20,
    backgroundColor: 'white',},

  input: {
    width: 200,
    height: 40,
    margin: 5,
    borderColor: 'red',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    borderRadius: 20,
    backgroundColor: 'white',
  },
 
});

export default Registration;

