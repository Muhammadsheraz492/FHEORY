import { View, Text ,Image, TextInput, ScrollView, TouchableWithoutFeedback} from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
   
  return (

    <View style={{flex:1,backgroundColor:"#154DC6",justifyContent:"center",alignItems:"center"}}>
    
        <View style={{height:'55%',justifyContent:"center",alignItems:"center"}}>
      <Image style={{width:77,height:85}} source={require('../../assets/Logo.png')}/>
      <Text style={{color:"#fff",fontWeight:"bold",fontSize:20,}}>FHEORY</Text>
        </View>
      <View  style={{height:"45%",backgroundColor:"#fff",width:"100%",borderTopEndRadius:30,borderTopLeftRadius:30}}>
      <View  style={{width:"90%",alignSelf:"center",top:10}}>
      <ScrollView  style={{height:"100%",}}>

     <Text  style={{fontSize:20,fontWeight:"700"}}>Sign in to your account </Text>
     <Text  style={{top:5}}>Hello there, please sign in to continue.</Text>
     <Text  style={{top:22,color:"#154DC6",}}>Email or phone Number</Text>
     <View  style={{top:30,bottom:22,width:"98%",height:48,borderWidth:1,alignSelf:"center",borderColor:"#B2B2B2",borderRadius:10,justifyContent:"center"}}>
      <TextInput 
      style={{width:"95%",alignSelf:"center"}}
      placeholder='Please Enter Email or Phone Number'
      />
     </View>
     <Text  style={{top:35,color:"#154DC6",}}>Password</Text>
     <View  style={{top:40,width:"98%",height:48,borderWidth:1,alignSelf:"center",borderColor:"#B2B2B2",borderRadius:10,justifyContent:"center"}}>
      <TextInput 
      style={{width:"95%",alignSelf:"center"}}
      placeholder='Please Enter Email or Phone Number'
      />
     </View>
     <View  style={{height:55}} />
     <TouchableWithoutFeedback
     onPress={()=>console.log("Enter Button Name")}
     >

     <View  style={{height:49,backgroundColor:'#154DC6',width:"98%",alignSelf:"center",borderRadius:10}}>
     </View>
     </TouchableWithoutFeedback>
     <View  style={{top:10,height:45,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>

       <Text  style={{}}>Don't have account? </Text>
       <TouchableWithoutFeedback
       onPress={()=>navigation.navigate("CreateAccount")}
       >
       <Text  style={{fontSize:16,color:"#154DC6"}}>Sign Up </Text>

       </TouchableWithoutFeedback>
     </View>
     </ScrollView>
      </View>
      </View>
    </View>
  )
}

export default Login