import { useEffect,useState,useMemo,Component } from "react";
import { View,Text,Image,StyleSheet, TouchableOpacity,Dimensions,TextInput, KeyboardAvoidingView } from "react-native";
import {COLORS} from '../FontColor'
import {Picker} from '@react-native-picker/picker';


const windowWidth = Dimensions.get('window').width; 
const windowHeight = Dimensions.get('window').height;




export default function RegisterScreen2({navigation}:any)
{

    const [texts, onChangeText] = useState("");
    const [step,setStep] = useState(0);
    const [birthday, onChangeBirthday] = useState("");
    const [sexcode, onChangeSexCode] = useState("");
    const [telecom, setTelecom] = useState();
    const [submitText, setSubmitText] = useState("본인 인증하기")
    const [statusBarHeight, setStatusBarHeight] = useState(0)
    const [activated, setActivated] = useState(false);
    const buttonbgcolor = activated? COLORS.hand_blue : COLORS.hand_blue_unactivated; 
    const [phone,setPhone] = useState("");
    
    interface StepProps
    {
      texts:string
    }

    const loginSequence = (props:any) =>
    {
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={texts}
        placeholder = "이름을 입력하세요"
      />
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
      if (step == 0 && texts.length < 2)
      {
        setSubmitText("본인 인증하기")
        setActivated(false)
      }

      else if (step == 0 && texts.length >=2)
      {
        setSubmitText("다음")
        setActivated(true) 
      }

      else if (step == 1 && birthday.length == 6 && sexcode.length == 1)
        setActivated(true)
      
      else if (step == 1 && (birthday.length < 6 || sexcode.length < 1))
        setActivated(false)

      else if (step == 2 && (birthday.length == 6 && sexcode.length == 1 && texts.length >=2))
        setActivated(true)

      else if (step ==3 && (birthday.length == 6 && sexcode.length == 1 && texts.length >=2 && phone.length >= 11))
      {
        setSubmitText("본인인증하기")
        setActivated(true)
      }
      else 
        setActivated(false)
    })

    type DescriptionProps = {
      title: string;
    };

const Description1= ({title}:DescriptionProps) =>
{
  return (
  <View style = {{flexDirection : "row"}}><Text style ={{...styles.signupFont, color : COLORS.hand_blue}}>{title}<Text style = {styles.signupFont}>을 입력해주세요.</Text></Text></View>
  )
}

const Description2 =  ({title}:DescriptionProps) => 
{
  return(
 <View style = {{flexDirection : "row"}}><Text style = {styles.signupFont}>사용하시는 </Text><Text style ={{...styles.signupFont, color : COLORS.hand_blue}}>{title}<Text style = {styles.signupFont}>를 선택해주세요.</Text></Text></View>
  )
}

const Step0 =(prop:any)=>
{
  return (
    <Text style={{...styles.input, color : "grey"}}>{prop.texts}</Text>
  );
}

const Step1 = (prop:any) =>
{
  
  return (
          <View style = {{flexDirection : "row"}}>
          <Text  style={{...styles.inputbirth, color: "grey"}}>{prop.birthday}</Text>
          <View style = {{alignItems : "center",justifyContent : "center"}}>
            <Text> - </Text>
          </View>
            <Text style={{...styles.inputbirth, width : 30, marginHorizontal : 0, color : "grey"}}>{prop.sexcode}</Text>
            <Text style = {{fontSize : 10, marginTop : 12,}}>● ● ● ● ● ●</Text>
          </View>
  )
}

const Step2 = (prop:any) =>
{
  return (
    <Text style={{...styles.input, color:"grey"}}>{prop.telecom}</Text>
  )
}



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

        {step == 0 ? <Description1 title =  {"이름"}/> : null}
        {step == 1 ? <Description1 title =  {"주민등록번호"} /> : null}
        {step == 2 ? <Description2 title = {"통신사"} /> : null}
        {step == 3 ? <Description2 title = {"전화번호"} /> : null}

        <View style = {styles.textarea}>
      {step == 0?   <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={texts}
          placeholder = "이름을 입력하세요"
        /> : null}

      {step == 1? 
        <View>          
        <Text style = {styles.topic}>생년월일</Text>
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
          <Text style = {styles.topic}>이름</Text>
        <Step0 texts = {texts}/> 
        </View> : null
      } 
      {step == 2? <View>
        <Text  style = {styles.topic}>통신사</Text>
        <View><Picker
    selectedValue={telecom}
    onValueChange={(itemValue, itemIndex) =>
      setTelecom(itemValue)
    }>
    <Picker.Item label="SKT" value="skt" />
    <Picker.Item label="KT" value="kt" />
    <Picker.Item label="LGU+" value="lg" />
    <Picker.Item label="SKT알뜰폰" value="skt알뜰폰" />
    <Picker.Item label="KT알뜰폰" value="kt알뜰폰" />
    <Picker.Item label="LG알뜰폰" value="lg알뜰폰" />
  </Picker></View>
          <Text  style = {styles.topic}>생년월일</Text>
          <Step1 birthday = {birthday} sexcode = {sexcode}/>
          <Text style = {styles.topic}>이름</Text>
          <Step0 texts= {texts}/>
        </View> : null}


        {step == 3? 
        <View>
          <Text style = {styles.topic}>전화번호</Text>
          <View>
      <TextInput
      style={styles.input} onChangeText={setPhone} value={phone} placeholder = "전화번호를 입력하세요" />
      </View>
      <Text  style = {styles.topic}>통신사</Text>
        <Step2 telecom = {telecom}/>
        <Text  style = {styles.topic}>생년월일</Text>
          <Step1 birthday = {birthday} sexcode = {sexcode} />
          <Text style = {styles.topic}>이름</Text>
          <Step0 texts= {texts}/>
        </View> : null}
      </View>
        </View>
        
        <KeyboardAvoidingView behavior={"padding"}  keyboardVerticalOffset = {statusBarHeight-20}>
          <TouchableOpacity onPress = {stepChanger}>
          <View style = {{...styles.buttonLarge, backgroundColor : buttonbgcolor}}>
            <Text style = {styles.caption} >{submitText}</Text> 
          </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>      
        {/*<View style= {{position : 'absolute', alignItems : "center", bottom : -windowHeight+400, width : windowWidth,  borderRadius : 16, height :windowHeight , backgroundColor : "white" }}><Text>What's going on</Text></View>  */}
    </View>
    );
}

const styles = StyleSheet.create({
container :
{
    flex : 1,
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