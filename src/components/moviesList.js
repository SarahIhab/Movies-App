import React, { useEffect, useState } from 'react';
import {Text, FlatList, View, StyleSheet} from 'react-native';
import MovieItem from './movieItem';

const MoviesList = (props) => {

    console.log(props.movies.length);

    if(props.movies.length === 0)
    {
        return <Text>Sorry there are no movies that match your search.</Text>;
    }
    else
    {
        return <FlatList  data={props.movies} keyExtractor={item => item.id} renderItem={({item, index})=>{
            return <MovieItem item={item} />
        }}>
        </FlatList>
    }

};

const styles = StyleSheet.create({
    container:{
        //flex:1,
        justifyContent: "center",
        alignContent: "center",
        //padding: 100
    }
});

//keyExtractor={item => item.id}

export default MoviesList;