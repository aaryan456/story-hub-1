import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import { Header } from 'react-native-elements';

const TextInputBox = (props) => {
    return (
      <TextInput {...props} 
      editable
      maxLength={700}
      />
    );
  }

export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Header
                    centerComponent={{
                        text: 'Story Hub',
                        style: { color: '#000000', fontSize: 30, fontWeight: "bold" },
                    }}
                />

                <View style={styles.inputView}>
                    
                     <TextInput style={styles.inputBx1} placeholder="Title"/>   
                </View>

                <View style={styles.inputView}>
                     <TextInput style={styles.inputBx1} placeholder="Author of the story"/>   
                </View>

                <View style={styles.inputView}>
                    <TextInputBox  style={styles.inputBox2} multiline numberOfLines={40} placeholder="Write Story"/>
                </View>

                <View style={styles.container}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent:'center',
        alignItems:'center'
    },
    inputView:{
        flexDirection:"row",
        margin:20
    },
    inputbx1:{
        width:200,
        height:40,
        borderWidth:1.5,
        borderRightWidth:0,
        fontSize:20
    },
    inputBox2:{
        width:200,
        height:40,
        borderWidth:1.5,
        borderRightWidth:0,
        fontSize:20,
    },
    button:{
        backgroundColor:'#f6416c',
        width:200,
        height:50,
       
    },
    buttonText:{
        fontSize:30,
        fontWeight:"bold"
    }
});