import React, { useRef, useState } from 'react';
import { ImageBackground, Text, TextInput, View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from './Registration'
import SignInPage from './SingInPage';
import Profile from './Profile';
import AboutScreen from './AboutScreen';


const Stack = createNativeStackNavigator();

  const TextInputExample = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hidden, setHidden] = useState(false);

  const inputRef2 = useRef(null);

  const changeStatusBarVisibility = () => {
    setHidden(!hidden);
    alert(`Username: ${username}, Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}`);
  };

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome">
      
      <Stack.Screen name ="Welcome" component={AboutScreen}/>
      <Stack.Screen name ="Profile" component={Profile}/>
      <Stack.Screen name ="Registration" component={Registration}/>
      <Stack.Screen name ="SingInPage" component={SignInPage}/>

    </Stack.Navigator>
    </NavigationContainer>
    )
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    flexDirection:'column'
  },
  input: {
    height: 30,
    width: 200,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderRadius: 20,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default TextInputExample;
