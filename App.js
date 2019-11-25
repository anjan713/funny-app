import React from "react";
import {View,TextInput,StyleSheet,Text} from "react-native";

export default class App extends React.Component{
constructor(props){
  super(props);
  this.state={
    text:"welcome",
  }
}  
render(){
  return(
    <View>
      <TextInput style={styles.input} 
      placeholderTextColor='black'
      placeholder="Enter your input here.."
      onChangeText={(texts)=>{this.setState({text:texts})}}
      />
      <Text style={{marginTop:60,fontSize:25,marginLeft:75,}}>
      {this.state.text
      .split(' ') //
      .map(text=>text&&"🤪")
      .join(' ')
      }</Text>
    </View>
  );
}
}


const styles=StyleSheet.create({
 input:{
   marginTop:40,
   borderWidth:2,
   height:50,
   width:200,
   padding:10,
   borderRadius:5,
   borderColor:"#23abab",
   marginLeft:75,
 }
})











// code for flex box practice
//render() {
  //   return (
  //      <View style={{
  //        flex:1,
  //       flexDirection:"row" ,
  //       alignItems:"center",
  //      justifyContent:"space-between"
  //     }}>
  //        <View style={{width:100,height:100,backgroundColor:'#25CCF7',}}></View>
  //        <View style={{width:100,height:100,backgroundColor:'#45CE30',}}></View>
  //        <View style={{width:100,height:100,backgroundColor:'#E74292',}}></View>
  //      </View>
  //   );