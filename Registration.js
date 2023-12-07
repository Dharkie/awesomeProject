
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';
import { useState, useRef} from 'react';
import { useNavigation } from '@react-navigation/native';

const Registration = () => {
const [email, setEmail]=useState('')
const [firstName, setFirstname]=useState('')
const [lastName, setLastname]=useState('')
const[username, setUsername]=useState('')
const[Password, setPassword]=useState('')
const [bio, setBio]=useState('')
const timer= useRef(null);
const [confirmPassword, setConfirmPassword] = useState('');
const [error, seterror]=useState('');
const [error1, setError1]=useState('')
const [isTrue, setistrue]=useState(false)
const[isTrue2, setistrue2]=useState(false)

const navigation= useNavigation();


function signup()
  {
    if (Password !== confirmPassword) {
      setistrue(true);
      seterror("Passwords do not match");
      return;
    }
      setistrue(false);
      seterror('');
    
    if (firstName === "" || lastName === "" || email === "" || bio === "") {
      setistrue(true);
      seterror("Field can't be empty");
      return;
    }  
    setistrue(false);
    seterror('');

    fetch('http://localhost:8080/signup', {
      method:'POST',//client is submitting data to be processed by the endpoint
      headers:{'Accept':'application/json', 'Content-Type':'application/json'},
      //Headers are included in the request, specifying that the client can accept and send data in JSON format
      
      body:JSON.stringify({//to convert the user input data (from the component's state) into a JSON string.
        "firstName":firstName,
        "lastName":lastName,
        "userName":username,
        "password":Password,
        "confirmPassword":confirmPassword,
        "email": email,
        "shortBio":bio
        
      })
    })
    .then(Resp=> {//The server processes the incoming request, handling user registration based on the provided data.
      if(!Resp.ok)//The .then block is executed when a response is received from the server.
      {
        if (Resp.status === 500) 
        {
          //setistrue2(true)
          setistrue(true);
          seterror(`Error ${Resp.status}: UserName Already exist`);
        } 
      }
      else
      {
        setError1("Details Updated Successfully");
        console.log("Details Updated Successfully")
        setTimeout(()=>{ navigation.navigate('Welcome');}, 2000);
      }
      setError1('');
    })
    .catch(err => {
      //console.error("Error:", err);
      setError1(err);
    })
  }


  return (
    <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',height: "100%",}}>
    
      <View>
       {isTrue && (
        <Text style={{ color: 'red' }}>{error}</Text>)}
      </View>

      <View>
       
        <Text style={{ color: 'red' }}>{error1}</Text>
      </View>

      <Text style={{fontSize: 20, color: "black", marginBottom: 5,}}>REGISTRATION</Text> 
      <TextInput placeholder="FirstName"  required style={styles.input} onChangeText={(text)=>{ setFirstname(text)}} value={firstName}/> 
      <TextInput placeholder="lastName"  required style={styles.input} onChangeText={(text)=>{ setLastname(text)}} value={lastName}/> 
      <TextInput placeholder="Username" required style={styles.input} onChangeText={(text)=>{ setUsername(text)}} value={username}/>
      <TextInput placeholder="Email" keyboardType='email-address' style={styles.input} onChangeText={(text)=>{ setEmail(text)}} value={email}/>
      <TextInput placeholder="Password" required secureTextEntry style={styles.input} onChangeText={(text)=>{ setPassword(text)}} value={Password}/>
      <TextInput placeholder="Confirm Password" required secureTextEntry style={styles.input} onChangeText={(text) => { setConfirmPassword(text) }} value={confirmPassword} />
           
      
      <TextInput placeholder="Short Bio" style={styles.bio} onChangeText={(text)=>{ setBio(text)}} value={bio} />
      <View style={{flexDirection:'row', justifyContent:"space-evenly"}}>
      <Button title="Signup" color='red' onPress={() => {signup()}} /> 
      <Button title="Signup" color='grey' disabled onPress={() => {}} />
      </View>
      </View>
    
  );
};


const styles = StyleSheet.create({
  
  header: {
    fontSize: 24,
    marginBottom: 5,
  },
  bio:{width: 200,
    height: 100,
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

