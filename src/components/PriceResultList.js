import React from 'react';
import {StyleSheet, View, Text, FlatList } from 'react-native';

const PriceResultList = (props) => {

    return(
        <View>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList 
            data={props.results}
            keyExtractor={(business) => business.id}
            renderItem={({ item }) => { 
                return <Text>{item.name}</Text>
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