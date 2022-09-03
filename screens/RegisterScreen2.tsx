import { useEffect,useState,useMemo,Component } from "react";
import { View,Text,Image,StyleSheet, TouchableOpacity,Dimensions,TextInput, KeyboardAvoidingView } from "react-native";
import {COLORS} from '../FontColor'
import {Picker} from '@react-native-picker/picker';
import { Colors } from "react-native/Libraries/NewAppScreen";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function RegisterScreen2({navigation}:any)
{
    const [step,setStep] = useState(0);
    const [texts, onChangeText] = useState("");
    const [birthday, onChangeBirthday] = useState("");
    const [sexcode, onChangeSexCode] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [text, setText] = useState(true);
    const [submitText, setSubmitText] = useState("본인 인증하기")
    const [statusBarHeight, setStatusBarHeight] = useState(0)
    const [activated, setActivated] = useState(false);
    const buttonbgcolor = activated? COLORS.hand_blue : COLORS.hand_blue_unactivated; 
    const [phone,setPhone] = useState("");
    const TextAnimation = () => 
    {
        if(text == true)
            setText(false)
        else
        {
            setText(true)
        }
    }


    const stepChanger = (data:any) =>
    {
      if (step == 0 && texts.length >= 2)
        setStep(1)
      else if (step == 1 && (birthday.length == 6 && sexcode.length == 1)) 
        setStep(2)
      else if (step == 2 && (birthday.length == 6 && sexcode.length == 1 && texts.length >=2))
        setStep(3)
      else if (step == 3 && (birthday.length == 6 && sexcode.length == 1 && texts.length >=2 && phone.length >=11))
        alert("본인인증 가즈아")
      else
        alert("올바른 형식으로 입력 해주세요")
    }


    useEffect(()=> {
      if (step == 0 && texts.length >=2)
      {
        setSubmitText("다음")
        setActivated(true) 
      }

      else if (step == 0 && texts.length < 2)
      {
        setSubmitText("본인 인증하기")
        setActivated(false)
      }

      else if (step == 1 && birthday.length == 6 && sexcode.length == 1)
      {
        setSubmitText("다음")
        setActivated(true)
      }
      
      else if (step == 1 && (birthday.length < 6 || sexcode.length < 1))
      {
        setActivated(false)
      }

      else if (step == 2 && (birthday.length == 6 && sexcode.length == 1 && texts.length >=2))
      {
        setActivated(true)
      }
      else if (step ==3 && (birthday.length == 6 && sexcode.length == 1 && texts.length >=2 && phone.length >= 11))
      {
        setSubmitText("본인인증하기")
        setActivated(true)
      }
      else 
      {
        setActivated(false)
      }
      
    })




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
        {step == 0 ? <View style = {{flexDirection : "row"}}><Text style ={{...styles.signupFont, color : COLORS.hand_blue}}>이름<Text style = {styles.signupFont}>을 입력해주세요.</Text></Text></View> : null}
        {step == 1 ? <View style = {{flexDirection : "row"}}><Text style ={{...styles.signupFont, color : COLORS.hand_blue}}>주민등록번호<Text style = {styles.signupFont}>를 입력해주세요.</Text></Text></View> : null}
        {step == 2 ? <View style = {{flexDirection : "row"}}><Text style = {styles.signupFont}>사용하시는 </Text><Text style ={{...styles.signupFont, color : COLORS.hand_blue}}>통신사<Text style = {styles.signupFont}>를 선택해주세요.</Text></Text></View> : null}
        {step == 3 ? <View style = {{flexDirection : "row"}}><Text style = {styles.signupFont}>사용하시는 </Text><Text style ={{...styles.signupFont, color : COLORS.hand_blue}}>전화번호<Text style = {styles.signupFont}>를 입력해주세요.</Text></Text></View> : null}

        <View style = {styles.textarea}>
        {step == 0 ? (<TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={texts}
      placeholder = "이름을 입력하세요"
    />)  : null} 
      {step == 1? <View>
        <View style = {{flexDirection : "row"}}>
          <TextInput
            keyboardType='numeric' style={styles.inputbirth} onChangeText={onChangeBirthday} value={birthday}
            placeholder = "생년월일 6자리" maxLength={6}/>
          <View style = {{alignItems : "center",justifyContent : "center"}}><Text> - </Text></View>
            <TextInput
            style={{...styles.inputbirth, width : 30, marginHorizontal : 0,}}
            keyboardType='numeric' onChangeText={onChangeSexCode}
            value={sexcode} maxLength={1}/>
            <Text style = {{fontSize : 10, marginTop : 12,}}>● ● ● ● ● ●</Text>
          </View>
          <TextInput
            style={styles.input} onChangeText={onChangeText} value={texts} placeholder = "이름을 입력하세요" />
        </View> : null
      } 
      {step == 2? <View>
        <View><Picker
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label="SKT" value="skt" />
  <Picker.Item label="KT" value="kt" />
  <Picker.Item label="LGU+" value="lg" />
  <Picker.Item label="SKT알뜰폰" value="skl" />
  <Picker.Item label="KT알뜰폰" value="ktl" />
  <Picker.Item label="LG알뜰폰" value="lgl" />
</Picker></View>
        <View style = {{flexDirection : "row"}}>
          <View></View>
          <TextInput
            keyboardType='numeric' style={styles.inputbirth} onChangeText={onChangeBirthday} value={birthday}
            placeholder = "생년월일 6자리" maxLength={6}/>
          <View style = {{alignItems : "center",justifyContent : "center"}}><Text> - </Text></View>
            <TextInput
            style={{...styles.inputbirth, width : 30, marginHorizontal : 0,}}
            keyboardType='numeric' onChangeText={onChangeSexCode}
            value={sexcode}  maxLength={1}/>
            <Text style = {{fontSize : 10, marginTop : 12,}}>● ● ● ● ● ●</Text>
          </View>
          <TextInput
            style={styles.input} onChangeText={onChangeText} value={texts} placeholder = "이름을 입력하세요" />
        </View> : null}
        {step == 3? <View>
          <Text  style = {styles.topic}>전화번호</Text>
          <TextInput
            style={styles.input} onChangeText={setPhone} value={phone} placeholder = "전화번호를 입력하세요" />
          <View>
          <Text  style = {styles.topic}>통신사</Text>
          <TextInput
            keyboardType='default' style={styles.input} value={selectedLanguage}
            placeholder = "통신사정보" maxLength={6}/>
          </View>
          <Text  style = {styles.topic}>생년월일</Text>
        <View style = {{flexDirection : "row"}}>
          <TextInput
            keyboardType='numeric' style={styles.inputbirth} onChangeText={onChangeBirthday} value={birthday}
            placeholder = "생년월일 6자리" maxLength={6}/>
          <View style = {{alignItems : "center",justifyContent : "center"}}><Text> - </Text></View>
            <TextInput
            style={{...styles.inputbirth, width : 30, marginHorizontal : 0,}}
            keyboardType='numeric' onChangeText={onChangeSexCode}
            value={sexcode}  maxLength={1}/>
            <Text style = {{fontSize : 10, marginTop : 12,}}>● ● ● ● ● ●</Text>
          </View>
          <Text style = {styles.topic}>이름</Text>

          <TextInput
            style={styles.input} onChangeText={onChangeText} value={texts} placeholder = "이름을 입력하세요" />
        </View> : null}
      </View>
        </View>
        
        <KeyboardAvoidingView behavior={"padding"}  keyboardVerticalOffset = {statusBarHeight-20}>
          <View style = {{...styles.buttonLarge, backgroundColor : buttonbgcolor}}>
            <Text style = {styles.caption} onPress = {stepChanger}>{submitText}</Text> 
          </View>
        </KeyboardAvoidingView>        
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
  topic : 
  {
    fontSize : 15,
    fontWeight : "bold",
    marginVertical : 15,
  },
  inputbirth: {
    width: 150,
    height: 40,
    textAlign : "center",
    marginHorizontal : 20,
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