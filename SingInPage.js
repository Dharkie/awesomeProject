
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';

const SignInPage = () => {
  return (
    <ImageBackground source={{uri: 'https://cdn.vox-cdn.com/thumbor/Ku3bTCLUoegr66kT2LZzPWuVs8s=/0x0:1200x600/1820x1213/filters:focal(561x40:753x232):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65381399/joker2.0.jpg'}}
     resizeMode="cover" style={{flex: 1,
    justifyContent: 'center', height: "700px",}}>
    <View style={{flex: 0.5,justifyContent: 'center',alignItems: 'center',height: "200px",}}>
    <Text style={{fontSize: 50, color: "white", marginBottom: 5,}}>Login</Text>
    <TextInput placeholder="Email" style={styles.input} />
    <TextInput placeholder="Password" secureTextEntry style={styles.input} />
    <View style={{flexDirection:'row', justifyContent:"space-evenly",padding:"10px 20px",borderadius: "10px",}}>
    <Button title="Login"  color='red' onPress={() => {}} />
    <View style={{ width: 20 }} /> 
    <Button title="Signup" color='blue' /*disabled*/ onPress={() => {}} />
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

export default SignInPage;

