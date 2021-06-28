import React from 'react';
import {View, FlatList, Text} from 'react-native';
import MovieItem from './movieItem';

const AllMovies = (props) =>{
    return <FlatList data={props.allMovies.results} renderItem={({item, index})=>{
        console.log("ALL MOVIES BEING SHOWN WAIIIIIT");
        return <MovieItem item={item} />
    }}>
</FlatList>

    //return <Text>ALL MOVIES LIST COMPONENT</Text>;

}

export default AllMovies;