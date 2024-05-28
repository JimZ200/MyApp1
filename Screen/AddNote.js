import {View, Text, StyleSheet} from 'react-native'; 
import React from 'react'; 

export default function AddNote(){ 
    //const {name} = route.params;
    return(
        <View style={style.container}>
            <Text style={StyleSheet.text}>
                Note Screen
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{flex:1, alignItems:"center", justifyContent: "center"},
    text:{fontSize:24, fontWeight: "bold", marginBottom:16}
});