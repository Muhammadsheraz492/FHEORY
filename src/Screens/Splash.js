import { View, Text ,Image} from 'react-native'
import React from 'react'

const Splash = ({navigation}) => {
    setTimeout(() => {
        navigation.navigate("Signin")
    }, 2000);
  return (
    <View style={{flex:1,backgroundColor:"#154DC6",justifyContent:"center",alignItems:"center"}}>
      <Image style={{width:77,height:85}} source={require('../../assets/Logo.png')}/>
     <View  style={{position:"absolute",bottom:80,}}>
      <View >

      <Text style={{color:"#fff",fontWeight:"bold",fontSize:20,}}>FHEORY</Text>
      </View>
     </View>
    </View>
  )
}

export default Splash