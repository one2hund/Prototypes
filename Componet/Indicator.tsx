import { View,StyleSheet} from "react-native";


const Indicator = (props:any) =>
{
  return(
  <View style = {styles.indicatorView}>
  <View style = {styles.indicator1}></View>
  <View style = {styles.line}></View>        
  <View style = {styles.indicator2}></View>
  <View style = {styles.line}></View>        
  <View style = {styles.indicator3}></View>
  </View>
  )
}


const styles = StyleSheet.create({

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
},})

export default Indicator