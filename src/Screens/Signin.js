import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Google from '../../assets/google-icon.svg'
const Signin = ({ navigation }) => {

    return (
        <View style={{ flex: 1, backgroundColor: "#154DC6", justifyContent: "center", alignItems: "center" }}>
            <Image style={{ width: 77, height: 85 }} source={require('../../assets/Logo.png')} />
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>FHEORY</Text>
            <View style={{ width: '100%', position: "absolute", bottom: 110, }}>
                < TouchableWithoutFeedback
                onPress={()=>console.log("Button Name")}
                >
                    <View style={{ width: "90%", backgroundColor: "#fff", height: 45, borderRadius: 10, alignSelf: "center", justifyContent: 'center', bottom: 28 }}>
                        <View style={{ width: "90%", alignSelf: "center", flexDirection: "row", alignItems: "center" }}>
                            <Google width={25} height={25} />
                            <View style={{ flex: 1, marginRight: 20, }}>
                                <Text style={{ textAlign: "center", color: '#154DC6' }}>Button Name</Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
               <TouchableWithoutFeedback
               style={{}}
               onPress={()=>console.log("Create Account")}
               >
                <View style={{ width: "90%", backgroundColor: "#fff", height: 45, borderRadius: 10, alignSelf: "center", justifyContent: 'center' ,}}>
                    <View style={{ width: "95%", alignSelf: "center", }}>
                        <Text style={{ color: '#154DC6', textAlign: 'center', fontSize: 15 }}>Create Account</Text>
                    </View>
                </View>
                </TouchableWithoutFeedback>
                <View  style={{top:28,width:"90%",alignSelf:"center",alignItems:"center",flexDirection:"row",justifyContent:"center"}}>

               <Text  style={{color:"#fff"}}>Already have an account ?</Text>
               <TouchableWithoutFeedback
               onPress={()=>navigation.navigate("Login")}
               >

               <Text  style={{color:"#fff",fontSize:15,fontWeight:"600"}}> Sign ln</Text>
               </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
    )
}

export default Signin