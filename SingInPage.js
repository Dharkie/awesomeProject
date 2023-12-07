
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SignInPage = () => {

  const [error, setError]=useState('')
  const[username, setUsername]=useState('')
  const[Password, setPassword]=useState('')
  const navigation = useNavigation();

  function login()
  {
    if (!username || !Password) {
      setError("Please enter both username and password");
      return;
    }
    fetch('http://localhost:8080/login', {
      method:'POST',
      headers:{'Accept':'application/json', 'Content-Type':'application/json'},
      body:JSON.stringify({
        "userName": username,
        "password": Password,
      })
    })//eo Feetch function
    .then(Resp=> {
      if(!Resp.ok)
      {
        if (Resp.status === 401) 
        {
          setError(`${Resp.status} Wrong userName`);
        } 
      }
      else
      {  
        navigation.navigate('Profile', {username})
      }
    })
  }//eo login function

  
  return (
    <View style={{flex: 0.5,justifyContent: 'center',alignItems: 'center',height: "100%",}}>
      <Text style={{fontSize: 20, color: "black", marginBottom: 5,}}> LOGIN</Text>
    <Text style={{fontSize: 15, color: "red", marginBottom: 5,}}>{error}</Text>
    <TextInput placeholder= 'username' required style={styles.input} onChangeText={(text)=>{ setUsername(text)}} value={username}/>
    <TextInput placeholder='password' required secureTextEntry style={styles.input} onChangeText={(text)=>{setPassword(text)}} value= {Password} />
    <View style={{flexDirection:'row', justifyContent:"space-evenly",padding:"2%",borderadius: "2%",}}>
    <Button title="Login"  color='red' onPress={() => login()} />
    <View style={{ width: 20 }} /> 
    <Button title="Signup" color='blue' /*disabled*/ onPress={() => {navigation.navigate('Registration')}} />
    </View>
    </View>
    
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

