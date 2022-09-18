import React from 'react';
import { View,Text,StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';//navigation without passing as a prop thru parent component direct use

const ResultsList = (props) =>{

    if(!props.results.length ){
        return null;
    }

    return(
        <View style={styles.container}>
            <Text style ={styles.title}>{props.title}</Text>
            {/* <Text>Results: {props.results.length}</Text> */}
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={props.results}
                keyExtractor ={(results)=>{results.id}}
                renderItem = {({item})=>{
                    return (
                        //We had to pass navigation object from SearchScreen->ResultsList we can just go
                        //directly and skip that extra step
                        <TouchableOpacity onPress={()=>{props.navigation.navigate('ResultsShow',{id: item.id})}}>
                           <ResultsDetail result = {item}/>
                        </TouchableOpacity>
                    
                    ) 
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft:15,
        marginBottom: 10
    },
    container:{
        marginBottom: 10
    }
});
// export default ResultsList;
export default withNavigation(ResultsList);