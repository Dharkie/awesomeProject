
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useState, useEffect, useRef } from 'react';


const Profile = ({navigation}) => {

  const route =useRoute();
  const {username }=route.params || {}; //we use the {useRoute} hook to access ==> navigation.navigate('Profile', { bio }
  //in  route.params, {bio} is contained init. destructuring whats in 
  //const { userName } = useParams();
  //useStates hook
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userName, setUserName] = useState('');
  const[password, setPassword]=useState('');
  const [error, seterror]=useState('');
  const [isTrue, setistrue]=useState(false)
  const [biography, setBiography]=useState('')
  const[message, setMessage]=useState('')

  //USER REF====================================================
  const timerRef = useRef(null);

  const bioDisplay = async () => {
    try {
      const response = await fetch(`http://localhost:8080/${username}`, {
        method: 'GET',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json',}
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseData = await response.text(); 
      setBiography(responseData);
    }//eo TRY block
    
    catch (error) 
    {
      console.error('Error fetching user data', error);
    }
  };
  

useEffect(()=>{
  if (username && username.trim() !== '')
  {
    bioDisplay();
  }

},[username])

  function updatePassword()
  {
    if (!confirmPassword || !password) {
      setistrue(true);
      seterror("Please enter password");
      return;
    }
    if(password != confirmPassword)
    {
      setistrue(true);
      seterror("Passwords do not match");
      return;
    }
    setistrue(false);
    seterror('');
    
  fetch(`http://localhost:8080/${userName}`, {
    method: 'PUT',
    headers: {'Accept': 'application/json','Content-Type': 'application/json',},
    body: JSON.stringify({
      "password": password,
      "confirmPassword": confirmPassword
    }),
  })
    .then(response => {
      if (!response.ok) 
      {
        throw new Error('Failed to update password');
      }
      setMessage('Password updated successfully');
      setTimeout(()=>{navigation.navigate('Welcome');},2000);
      
    })
    .catch(error => {
      console.error(`Error updating password:${error.message}`);
    });
};

  return (
    <View style={{flex: 0.5, justifyContent: 'center',alignItems: 'center',}}>
    {isTrue && (<Text style={{ color: 'yellow',fontSize: 15, }}>{error}</Text>)}

    <Text style={{fontSize: 20, color: "black", marginBottom: 5,}}>Profile</Text>
    <Text style={styles.text2}>Bio:{biography}</Text>
    <Text style={styles.text2}> {message}</Text>

      <TextInput placeholder="userName"  required style={styles.text1} onChangeText={(text)=> setUserName(text)} value ={userName}/>

      <TextInput placeholder="Password" required secureTextEntry style={styles.text1} onChangeText={(text)=> setPassword(text)} value ={password}/>
      
      <TextInput placeholder="Confirm Password" required secureTextEntry style={styles.text1} onChangeText={(text)=> setConfirmPassword(text)} value ={confirmPassword}/>
     
     <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

    <Button title="Change Password" color="red" onPress={() => updatePassword()} />
    <View style={{ width: 20 }} />
    </View>

    </View>
    
  );
};

const styles = StyleSheet.create({
  
background:{flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: "100%",},
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

    text2:{color: "black",
    fontSize: 15,
    }
});


export default Profile;

