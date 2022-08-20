import { useEffect,useState } from "react";
import { View,Text,Image,StyleSheet, TouchableOpacity,Dimensions,TextInput } from "react-native";
import {COLORS} from '../FontColor'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function RegisterScreen2({navigation}:any)
{
    const [texts, onChangeText] = useState("");

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
        <View style = {styles.indicatorView}>
        <View style = {styles.indicator1}></View>
        <View style = {styles.line}></View>        
        <View style = {styles.indicator2}></View>
        <View style = {styles.line}></View>        
        <View style = {styles.indicator3}></View>
        </View>

        <View style = {styles.SignupWrapper}>
        <Text style = {styles.signupFont}>안녕하세요</Text>
        <View style = {{flexDirection : "row"}}><Text style ={{...styles.signupFont, color : COLORS.hand_blue}}>이름<Text style = {styles.signupFont}>을 입력해주세요.</Text></Text></View>
        <View style = {styles.textarea}>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={texts}
        placeholder = "이름을 입력하세요"
      /></View>
        </View>
        <View style = {styles.buttonLarge}>
            <Text style = {styles.caption} onPress = {() => alert("본인 인증하기를 눌렀습니다")}>본인 인증하기</Text> 
        </View>        
    </View>
    );
}

const styles = StyleSheet.create({
container :
{
    flex : 1,
    backgroundColor : "white",
}, 
input: {
    width: 320,
    height: 40,
    // backgroundColor: colors.WHITE,
    borderBottomWidth : 1,
    borderBottomColor: COLORS.hand_blue,
    // shadowColor: COLORS.hand_blue,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 0,
    shadowOpacity: 1
  },
SignupWrapper :
{
    flex : 1,
    marginTop : 30,
    marginLeft : 30,
},
signupButton :
{
    flex : 1,
},
signupFont :
{
  marginTop : 30,
//   fontFamily: "OpenSans",
  fontSize: 20,
  fontWeight: "bold",
  fontStyle: "normal",
  letterSpacing: -0.56,
  textAlign: "left",
  color: "grey"
    
},
indicatorView:
{
    marginTop : 80,
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "center",
    marginHorizontal : 30,
},
indicator1 :
{
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "rgb(255,196,31)",
    marginHorizontal : 20,
},
indicator2 :
{
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#68727e",
    marginHorizontal : 20,

},
indicator3 :
{
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#68727e",
    marginHorizontal : 20,

},
line :
{
    width: 40,
    height: 1,
    backgroundColor: "#b9b9c3"
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
  textarea :
  {
    marginTop:50,
  },
  caption :
  {
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