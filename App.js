import { SafeAreaView, Text , Modal, ActivityIndicator, StyleSheet} from 'react-native';
import tw, { useDeviceContext } from 'twrnc';
import { Provider } from 'react-redux';
import { store } from './store';
import 'react-native-reanimated'; 
import { Image , ImageBackground, Alert} from 'react-native';
import { View , ScrollView, Button, Pressable, StatusBar} from 'react-native'; 
import {useState} from 'react';
import Greet from './components/Greet';


const logoImg = require("./assets/adaptive-icon.png");
export default function App(){ 
  const [isModalVisible, setISModalVisible] = useState(false);
  let x = false;
  return (
    <View style={stylesheet.container}>
      <ActivityIndicator size="large" color="lightgreen" animating={x}/>
      <StatusBar backgroundColor={"blue"} barStyle={"light-content"}/>
      <ScrollView>
        <Button title="Press" 
        onPress={()=> setISModalVisible(true)} 
        color="midnightblue"/>
        <Button title="Press2" onPress={()=> Alert.alert("Invalid option", "Try again", [
            {
              text: 'Cancel', 
              onPress: ()=> console.log("Cancel Pressed"),
            }, 
            { 
              text: 'Ok', 
              onPress: ()=> console.log("Ok Pressed"),
            }
        ])}/>
        <Modal visible = {isModalVisible}>
          <ScrollView>
          <View style={{flex:1, padding:60, backgroundColor:"lightblue"}}>
          <Button title="Click for alert" onPress={()=> Alert.alert("Hello")} />
            <Text>Modal Content</Text>
            
            <Pressable onPress={()=> console.log("Image Pressed")}>
          <Image source={logoImg} style={{height:300, width:300}}/>
          </Pressable>
        
        <Pressable>
          <Text>
          The dawn of the 21st century has ushered in an era of unprecedented technological advancement and connectivity, 
          transforming the way we live, work, and interact with one another. 
          From the advent of smartphones to the rise of social media platforms, 
          technology has bridged geographical divides, bringing people closer together while simultaneously creating new challenges. 
          The internet has become a central hub for information exchange, education, and commerce, empowering individuals with knowledge and opportunities that were once unimaginable. 
          However, this digital revolution also raises important questions about privacy, security, and the ethical use of technology. 
          As we navigate this rapidly evolving landscape, it is crucial to strike a balance between embracing innovation and safeguarding the values that underpin our society.
          </Text>
        </Pressable>
        
        <Pressable>
          <Image source={{uri: "https://picsum.photos/200"}} style={{height:300, width:300}}/>
        </Pressable>
        
        <Button title="Close" 
            color="midnightblue" 
            onPress={()=> setISModalVisible(false)}/>
          </View>
          </ScrollView>
        
        </Modal>
      
      </ScrollView>
    </View>
  );
}

const stylesheet = StyleSheet.create({
  container:{ flex: 1, backgroundColor:"gold", padding:60},
  lightblueBox:{backgroundColor:"lightblue", width:100, height:100, padding:10}, 
  lightgreenBox:{backgroundColor:"lightgreen", height:100, width:100, padding:10}
})