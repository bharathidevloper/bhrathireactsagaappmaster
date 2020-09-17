import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

import Login from './src/Login';
import MainScreen from './src/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import { useSelector, useDispatch } from 'react-redux';
const Main = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { isLoading, userToken } = state.user;
  console.log(state.user);

  useEffect(() => {
    dispatch({
      type: 'FETCH_TOKEN',
      paylod: { token: null },
    });
    const bootstrapAsync = async () => {
      // let userToken;
      // try {
      //   const jsonValue = await AsyncStorage.getItem('userLoginData');
      //   userToken = JSON.parse(jsonValue).UserUniqueId;
      // } catch (e) {
      //   // error reading value
      // }
      // screen will be unmounted and thrown away.
    };

    //bootstrapAsync();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {userToken == null ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="MainScreen"
              component={MainScreen}
              options={{ headerShown: false, headerBackground: 'green' }}
            />
          </Stack.Navigator>
        )}
    </NavigationContainer>
  );
};

export default Main;
