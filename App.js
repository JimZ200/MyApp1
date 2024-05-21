import { SafeAreaView, Text , Modal} from 'react-native';
import tw, { useDeviceContext } from 'twrnc';
import { Provider } from 'react-redux';
import { store } from './store';
import 'react-native-reanimated'; 
import { Image , ImageBackground} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { View , ScrollView, Button, Pressable} from 'react-native'; 
import {useState} from 'react';


const logoImg = require("./assets/adaptive-icon.png");
export default function App(){ 
  const [isModalVisible, setISModalVisible] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor:"plum", padding:60}}>
      <ScrollView>
        <Button title="Press" 
        onPress={()=> setISModalVisible(true)} 
        color="midnightblue"/>

        <Modal visible = {isModalVisible}>
          <ScrollView>
          <View style={{flex:1, padding:60, backgroundColor:"lightblue"}}>
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