import React, { useState } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import SearchBar from '../Components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import ResultsList from '../Components/ResultsList';

const SearchScreen = (props) => {
  const [term, setTerm] = useState('');
  const [searchApi, restaurants, errorMessage] = useRestaurants();

//   console.log(restaurants);
//   console.log(props);

  const filterRestaurantsByPrice = (price) =>{
    //price === '$' , '$$' , '$$$'
    return restaurants.filter( restaurants =>{
        return restaurants.price === price;
    })
  }
  //having an empty parent element <> </> placeholder we dont have to add flex:1 content
  //automatically rendered and by default react native wont allow content to go off of the screen

  return (
    // <View style={{borderColor: 'red', borderWidth:10}}>//to see border sizes
    //now lets set border constraints to allow vertical scrolling 
    //content cut off or expanding off screen add flex 1 tp parent comp usually works
    <View style={{flex:1}}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>{term}</Text>
      <Text>We have found {restaurants.length} results</Text>
        <ScrollView>
            <ResultsList navigation = {props.navigation} title = 'Cost Effective' results = {filterRestaurantsByPrice('$')}/>
            <ResultsList navigation = {props.navigation} title = 'Bit Pricier' results = {filterRestaurantsByPrice('$$')}/>
            <ResultsList navigation = {props.navigation} title = 'Big Spender' results = {filterRestaurantsByPrice('$$$')}/>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;