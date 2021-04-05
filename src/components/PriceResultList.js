import React from 'react';
import {StyleSheet, View, Text, FlatList } from 'react-native';
import PriceResultItem from './PriceResultItem';

const PriceResultList = (props) => {

    return(
        <View>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList 
            data={props.results}
            keyExtractor={(business) => business.id}
            renderItem={({ item }) => { 
                return <PriceResultItem result={item}/>
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