import {View, Text, StyleSheet, TextInput, Button} from 'react-native'; 
import React from 'react'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-web';

export default function AddNote({navigation}){ 
    const [note, setNote] = useState("");
    const saveNote = ()=>{ 
        //navigate back to home and display the note 
        navigation.navigate('Home', { newNote: note });
        //reset the current note for the next note taking
        setNote(''); 
    }
    //textinput and a button to trigger the saveNote function
    return(
        <SafeAreaView style={style.container}>
           <TextInput style={style.textInput} placeholder="Notes goes here" value={note} onChangeText={setNote} />
           <TouchableOpacity style={style.saveButton} onPress={saveNote}>
            <Text style={style.saveButtonText}>Save</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
};

//style sheet
const style = StyleSheet.create({
    container:{flex:1, alignItems:"center", justifyContent: "center", backgroundColor:"gold"},
    text:{fontSize:24, fontWeight: "bold", marginBottom:16},
    textInput: {
        position:"absolute", 
        top:0,
        marginTop:16,
        width: '100%',
        height: 300,
        padding: 10,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        backgroundColor: '#fff',
      }, 
      saveButton:{backgroundColor:"blue", padding:10, borderRadius:5}, 
      saveButtonText:{color:"white", fontWeight:"bold"}
});