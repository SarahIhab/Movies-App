import React, { useEffect, useState } from 'react';
import {Text, FlatList, View} from 'react-native';
import MovieItem from './movieItem';

const MoviesList = (props) => {

    const renderEmptyList =()=>{
        return <Text>Sorry there are no movies that match your search.</Text>;
    }

    return <FlatList data={props.movies} ListEmptyComponent={renderEmptyList()} renderItem={({item, index})=>{
        return <MovieItem item={item} />
    }}>
    </FlatList>
};

export default MoviesList;