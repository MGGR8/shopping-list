import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';  
const Header = (props) => {
  return (
    <View style= {styles.header}>
      <Text style = {styles.text}>{props.title}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  header: {

    backgroundColor: 'darkblue',
  
    padding : 15,
    borderBottomColor:'#1a1a1a',
    
  },
  text: {
    fontSize: 23,
 color: '#fff',
    textAlign: 'center'
}
  
});

export default Header; 