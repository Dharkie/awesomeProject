
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState, useRef, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';

const Data = () => {
    const [error, seterror]=useState('')
    const [data, setdata]=useState([])


const navigation= useNavigation();
const handleData = async() =>{
    try{
        const resp = await fetch(`http://localhost:8080/users`, {
            method: 'GET',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json',}
          })
          if(!resp.ok)
          {
            seterror(`Error ${resp.status}`)
          }
            const userData = await resp.json();
            
            console.log(data);
            setdata(userData);
                
        }
    catch(error)
    {
        console.log(error);
    }

}
useEffect(()=>
{
    handleData();
},[])


  return (
    <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',height: "100%",}}>
        {data.map((user) => ( 
            <View key={user.id} style={styles.userContainer}>
            <Text>ID: {user.id}</Text>
            <Text>First Name: {user.firstName}</Text>
            <Text>Last Name: {user.lastName}</Text>
            <Text>Username: {user.userName}</Text>
            <View style={styles.separator} /> 
        </View>
        ))}
      </View>
    
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    userContainer: {
      marginBottom: 16,
    },
    separator: {
      height: 1,
      backgroundColor: 'gray',
      marginVertical: 8,
    },
  });
export default Data;

