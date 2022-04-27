import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';  
import Icon from 'react-native-vector-icons/dist/FontAwesome';  
const AddItems = ({addItem}) => {
const [text,  setText] = useState('');
const onChange = textValue => setText(textValue);
return (
   <View>
     <TextInput placeholder='Add Here...' style = {styles.input} onChangeText = {onChange} />
      <TouchableOpacity style = {styles.btn} onPress = {() => addItem(text)}>
        <Text style = {styles.btntext}><Icon name = '500px' size ={20}/> Add Item </Text>

      </TouchableOpacity>
   </View>
  );
};


const styles = StyleSheet.create({
  input :{
    height : 60,
    padding : 8,
    fontSize : 20
  },
  btn:{
    backgroundColor : '#1a1a1a',
    padding : 4,
    margin: 10,
 
  },
  btntext:{
    textAlign : 'center',
    backgroundColor : '#a1a2a2',  
    fontSize : 20,
    color: '#1a1a1a'

  }

});

export default AddItems; 