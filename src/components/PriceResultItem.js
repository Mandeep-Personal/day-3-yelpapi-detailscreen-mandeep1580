import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const PriceResultItem = ({result}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{ uri: result.image_url}}/>
        <Text style={styles.name}>{result.name}</Text>
        <Text style={styles.name}>Avg. {result.rating} stars from {result.review_count} reviews</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        margin:10
    },
image : {
    width: '100%',
    height: 100,
    borderRadius: 4
},
name: {
    fontWeight: 'bold'
}
});

export default PriceResultItem;