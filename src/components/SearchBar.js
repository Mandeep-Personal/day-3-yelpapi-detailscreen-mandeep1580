import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import {EvilIcons} from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange }) => {
    return (
    <View style={styles.background}>
        <View style={styles.searchText}>
            <EvilIcons style={styles.searchIcon} name="search" />
            <TextInput
            value={term}
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#96A7AF"
            onChangeText={newTerm => onTermChange(newTerm)}
            onSubmitEditing={() => onTermSubmit()}
            />
            </View>
        </View>
            );
          }
            
            const styles = StyleSheet.create({
                background:{
                    flexDirection: 'row',
                    marginHorizontal: 15,
                    marginTop: 5,
                    alignItems: 'center'
                },
                searchText: {
                    backgroundColor: '#1A282F',
                    borderRadius: 10,
                    height: 60,
                    width: '70%',
                    flexDirection: 'row',
                },
                searchInput: {
                    color: '#A9A9A9',
                    flex: 1
                },
                searchIcon: {
                    fontSize: 35,
                    alignSelf: 'center',
                    marginHorizontal: 15,
                    color: "#96A7AF"
                },
            });
            export default SearchBar