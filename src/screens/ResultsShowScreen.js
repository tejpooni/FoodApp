import React,{useState, useEffect} from 'react';
import { Text,StyleSheet,View,FlatList,Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = (props) =>{
    const id = props.navigation.getParam('id');//the second arg from ResultsList
    console.log(id);//take this id and make a req to yelp api 
    //id endpoint which gives info abt the business we asked or 
    const [restaurants,setRestaurants] = useState(null);//empty object singular not empty arr
    console.log(restaurants);

    const getRestaurant = async (id) =>{
        const response = await yelp.get(`/${id}`);
        //response.data;//the data we care abt is here we need to capture it and once we get it we need to rerender our comp (STATE!!!!)
        setRestaurants(response.data);//We only want to call it once or else we will get a bunch of api requests (useEffect!!!!)
    };
    useEffect(()=>{
        getRestaurant(id);
    },[]);

    if(!restaurants){//if no results returned yet dont show anything 
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