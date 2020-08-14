import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux'
import Store from './store/store'
import { StatusBar } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack'
import Home from './src/pages/Home';
import Detail from './src/pages/Details/itemDetails'

const Stack = createStackNavigator();
const store = Store()

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Details' component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
