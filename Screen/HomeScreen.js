import {View, Text, StyleSheet, Button, Pressable, FlatList,TextInput, TouchableOpacity, SafeAreaView} from 'react-native';
import { useState , useEffect} from 'react'; 

export default function HomeScreen({navigation, route}){ 
    //array of notes 
    const [notes, setNotes] = useState([]);
    
  //use effect
  useEffect(() => {
    if (route.params?.newNote) {
      setNotes(prevNotes => [...prevNotes, route.params.newNote]);
    }
  }, [route.params?.newNote]);

  //delete note 
  const deleteNote = (index) => {
    setNotes(prevNotes => prevNotes.filter((_, i) => i !== index));
};

    return(
        //flat list to display the notes taken where the data is the note and use renderItem to display it 
        <SafeAreaView style={style.container}>
            <Text style={style.title}>Note taking</Text>
            <FlatList
            data={notes}
             keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
          <View style={style.noteContainer}>
            <Text style={style.noteText}>{item}</Text>
            <TouchableOpacity onPress={() => deleteNote(index)} style={style.deleteButton}>
               <Text style = {style.deleteButtonText}>Delete</Text>
                  </TouchableOpacity>
          </View>
        )}
      />
            <TouchableOpacity style={style.button} onPress={()=> navigation.navigate("AddNote")}>
                <Text style ={style.addButton}>+</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
    //above is the + button to navigate to addNote page 
}

//stylesheet
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

    addButton: {color:'white', fontSize: 30, lineHeight: 30},
    title:{fontSize:20, fontWeight:"bold"}, 
    noteText:{fontSize: 18}, 
    noteContainer:{padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5},

        deleteButton: {
          backgroundColor: 'red',
          padding: 10,
          borderRadius: 5
      },
      deleteButtonText: {
          color: 'white',
          fontWeight: 'bold'
      }
});