import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';  
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style= {styles.listitem}>
      <View style= {styles.listitemview}> 
      <Text style = {styles.listitemtext}>{item.text}</Text>
      <Icon name = "minus" size = {20} color = "firebrick" onPress = {() => deleteItem(item.id)}/></View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
   listitem:{
     padding : 15,
     backgroundColor : '#afe',
     borderBottomWidth : 1,
       borderBottomColor : '#ffa'
   },
   listitemtext:{
      color : '#1a1a1a',
      fontSize : 15,
       fontWeight : 'bold'
   },
   listitemview:{
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems: 'center'
   }
});

export default ListItem; 