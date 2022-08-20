import { useEffect,useState } from "react";
import { View,Text,Image,StyleSheet, TouchableOpacity,Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function RegisterScreen2({navigation}:any)
{
    const [text, setText] = useState(true);
    const TextAnimation = () => 
    {
        if(text == true)
            setText(false)
        else
        {
            setText(true)
        }
    }
    setTimeout(TextAnimation, 2000)
    return (
    <View style = {styles.container}>
        
        <View style = {styles.logoView}>
            <Image style = {styles.logo} source={require('../assets/logo.png')} />         
            <Text style = {styles.h6}>이곳은 어딜까</Text>
        </View>
        <TouchableOpacity onPress = {()=> {alert("시작하기를 눌렀습니다")}}>
        <View style = {styles.buttonLarge}>
            <Text style = {styles.caption}>시작하기</Text> 
        </View>
        </TouchableOpacity> 

    </View>
    );
}

const styles = StyleSheet.create({
container :
{
    flex : 1,
    backgroundColor : "white",

}, 
logoView :
{
    flex : 1,
    alignItems : "center",
    justifyContent : "center",
},
textView :
{
},
logo : 
{   
    width : windowWidth * 0.445,
    height : windowHeight * 0.1,
},

h6 :
{
    width: windowWidth * 0.706,
    height: windowHeight * 0.08,
    // fontFamily: "OpenSans",
    marginTop : 50,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: -0.56,
    textAlign: "center",
    color : "rgb(104,114,126)"
},
buttonLarge : {
    alignItems : "center",
    justifyContent : "center",
    bottom : 50,
    width: windowWidth * 0.911,
    height: windowHeight * 0.075,
    marginHorizontal : 16,
    borderRadius: 8,
    backgroundColor: "rgb(50,171,239)",
    shadowColor: "rgba(97, 97, 97, 0.2)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 2,
    shadowOpacity: 1,

  },
  caption :
  {
    width: 54,
    height: 21,
    // fontFamily: "OpenSans",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 21,
    letterSpacing: 0.7,
    textAlign: "left",
    color: "white"
  }

})