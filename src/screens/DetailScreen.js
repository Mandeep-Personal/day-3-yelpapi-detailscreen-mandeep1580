import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text,FlatList} from 'react-native';
import yelp from '../api/yelp'
import ResultDetails from '../components/ResultDetails';


const DetailScreen =({route}) => {
    const [businesses, setBusinesses] = useState([]);

    const searchDetails = async () => {
       const response = await yelp.get(`/${route.params.id}`);
            setBusinesses(response.data.photos);
    }
    useEffect(() => {
        searchDetails();
    }, [])
        return (
            <View>
                <Text style={styles.text}>Photo gallery</Text>

            <FlatList
                data={businesses}
                keyExtractor={(result) => result}
                renderItem={({item}) => {
                return(
                <ResultDetails result={item}/>
                )
            }}
            />
                
            </View>
        )
    }

    const styles = StyleSheet.create({
        text: {
          alignSelf: 'center',
          padding: 10
        },
      });
    

export default DetailScreen;