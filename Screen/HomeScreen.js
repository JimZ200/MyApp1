import {View, Text, StyleSheet, Button, Pressable, FlatList,TextInput, TouchableOpacity, SafeAreaView} from 'react-native';
import { useState } from 'react'; 

export default function HomeScreen({navigation}){ 
    const [note, setNote] = useState([{id:1, text:""}, {id:2 ,text:""}, {id:3, text:""} ]);

    return(
        <SafeAreaView style={style.container}>
            <FlatList
                data = {note}
                numColumns={2}
            />
            <TouchableOpacity style={style.button} onPress={()=> navigation.navigate("AddNote")}>
                <Text style ={style.addButton}>+</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{flex:1, alignItems:"center", justifyContent: "center", backgroundColor:"lightblue"},
    text:{fontSize:50, fontWeight: "bold", marginBottom:16}, 
    
    button: {position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'blue',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5}, 

    addButton: {color:'white', fontSize: 30, lineHeight: 30}
});