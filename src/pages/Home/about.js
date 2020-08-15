import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default About = () => {
    return(
        <View style={Styles.Page}>
            <Text>About Page</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    Page:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#368B8E'
    }
})