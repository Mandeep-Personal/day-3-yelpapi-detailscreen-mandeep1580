import React from 'react';
import {StyleSheet, View, Text, FlatList } from 'react-native';

const PriceResultList = ({}) => {

    return(
        <View>
            <FlatList 
            data={results}
            keyExtractor={(business) => business.id}
            renderItem={({ item }) => { 
                return <Text>{item.name}</Text>
            }}
            />

        </View>
    )

}

const styles = StyleSheet.create({});

export default PriceResultList;