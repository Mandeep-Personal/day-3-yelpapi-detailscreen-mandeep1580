import React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';

const ResultDetails = ({result}) => {
    
        return (
           <ScrollView style={styles.container}>
               <Image style={styles.image} source={{uri:result}} />
           </ScrollView>
        )
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 10
    },
    image:{
        width:350,
        height:300
    }
  });

export default ResultDetails;