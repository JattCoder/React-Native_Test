import React,{ useEffect } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Info from './Info';
import Market from './Market';
import About from './about'

const HomeTabs = createMaterialBottomTabNavigator();

const Home = () => {

  return (
    <HomeTabs.Navigator
      initialRouteName='Home'
      activeColor='white'
      inactiveColor='black'
      shifting={true}
      barStyle={{backgroundColor:'#5810d8',borderTopLeftRadius:25}}>
      <HomeTabs.Screen name='Home' component={Info} options={{
          tabBarLabel: 'Home',
          tabBarColor:'#5810d8',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={26} />
          ),
        }}/>
      <HomeTabs.Screen name='Market' component={Market} options={{
          tabBarLabel: 'Market',
          tabBarColor:'#FF7133',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="shop" color={color} size={26} />
          ),
        }}/>
      <HomeTabs.Screen name='About' component={About} options={{
          tabBarLabel: 'About',
          tabBarColor:'#368B8E',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="info" color={color} size={26} />
          ),
        }}/>
    </HomeTabs.Navigator>
  );
};

export default Home;
