import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from 'react-redux';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [Loading, setLoading] = useState(false);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const login = () => {
    if (email.length > 0 && Password.length > 0) {
      setLoading(true);
      let userDetails = {
        userId: email,
        password: Password,
      };

      dispatch({
        type: 'USER-LOGIN',
        paylod: userDetails
      });



    } else {
      alert('Plese Fill the Details');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../Assets/login_back.png')}
        style={styles.image}>
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Text style={{ color: '#fff', fontSize: 28 }}>ACON</Text>
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            marginLeft: 30,
            marginRight: 30,
            marginTop: '20%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              marginBottom: 20,
              alignItems: 'center',
              height: 45,
              borderBottomColor: '#fff',
            }}>
            <TextInput
              style={styles.textInput}
              placeholder="UserName"
              placeholderTextColor="#fff"
              onChangeText={(email) => setEmail(email)}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginBottom: 20,
              borderBottomWidth: 1,
              alignItems: 'center',
              height: 45,
              borderBottomColor: '#fff',
            }}>
            <TextInput
              style={styles.textInput}
              secureTextEntry={showPassword}
              placeholder="PassWord"
              placeholderTextColor="#fff"
              onChangeText={(pass) => setPassword(pass)}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <Icon name="eye-off" color="#fff" size={25} />
              ) : (
                  <Icon name="eye" color="#fff" size={25} />
                )}
            </TouchableOpacity>
          </View>

          {Loading ? <ActivityIndicator size="large" color="#d0ddff" /> : null}

          <View style={{ marginTop: 50, flexDirection: 'row' }}>
            <TouchableOpacity onPress={login}>
              <Text style={{ color: '#fff', fontSize: 30 }}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={login}>
              <Avatar.Image
                style={{ marginLeft: '55%', marginBottom: 10 }}
                source={require('../Assets/Login_icon.png')}
                size={80}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
  textInput: {
    flex: 1,
    color: '#fff',
    height: 45,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: 'center',
  },
});

export default Login;
