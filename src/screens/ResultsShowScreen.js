import React,{useState, useEffect} from 'react';
import { Text,StyleSheet,View,FlatList,Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = (props) =>{
    const id = props.navigation.getParam('id');
    console.log(id); 
    
    const [restaurants,setRestaurants] = useState(null);
    console.log(restaurants);

    const getRestaurant = async (id) =>{
        const response = await yelp.get(`/${id}`);
        setRestaurants(response.data);
    };
    useEffect(()=>{
        getRestaurant(id);
    },[]);

    if(!restaurants){
        return null;
    }

    return(
        <View>
            <Text>{restaurants.name}</Text>
            <FlatList
                data ={restaurants.photos}
                keyExtractor={(photo)=>{photo}}
                renderItem={({item})=>{
                    return(
                        <Image style = {styles.image} source = {{uri:item}}/>
                    )
                }}
            />

        </View>
    ); 
};

const styles = StyleSheet.create({
    image:{
        height:200,
        width:300
    }
});

export default ResultsShowScreen;
