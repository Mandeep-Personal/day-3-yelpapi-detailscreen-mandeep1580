import React, {useState} from 'react';
// import {SafeAreaView,} from 'react-native';
import { StyleSheet, View, TextInput } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    const [term, setTerm] = useState('')
  
  return (
    <View>
    <SearchBar
      term={term}
      onTermChange={(newTerm) => setTerm(newTerm)} />
  </View>
  );
}

const styles = StyleSheet.create({});

export default SearchScreen;