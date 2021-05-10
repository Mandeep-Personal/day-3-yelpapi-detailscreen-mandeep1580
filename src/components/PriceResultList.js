import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import PriceResultItem from './PriceResultItem';

const PriceResultList = (props) => {
    const showDetails = (detail) => {
        props.navigation.navigate('DetailScreen', detail)
      }
    return(
        <View>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList 
            data={props.results}
            keyExtractor={(business) => business.id}
            renderItem={({ item }) => { 
                return (
                <TouchableOpacity onPress={() => showDetails(item)}>
                <PriceResultItem result={item}/>
                </TouchableOpacity>)
            }}

            horizontal={true}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default PriceResultList;