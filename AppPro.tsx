/* eslint-disable prettier/prettier */
import React from "react";
import {View,Text,StyleSheet, useColorScheme} from 'react-native'

function AppPro():JSX.Element{
  const isDark=useColorScheme()==='dark'
  return(
    <View style={styles.container}>
      <Text style={isDark?styles.whiteColor:styles.darkColor}>
        hey
      </Text>
    </View>
  );
}
 
export default AppPro;

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  whiteColor:{
    color:'white'
  },
  darkColor:{
    color:'#000000'
  }
})