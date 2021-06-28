import React, { useEffect, useState } from 'react';
import {Text, FlatList, View} from 'react-native';
import MovieItem from './movieItem';

const MoviesList = (props) => {

    const renderEmptyList =()=>{
        return <Text>Sorry there are no movies that match your search.</Text>;
    }


    return <FlatList data={props.movies} ListEmptyComponent={renderEmptyList()} renderItem={({item, index})=>{
        return <MovieItem item={item} />
        /*(
            <View>
            <Text>Movie title: {item.title}</Text>
            <Text>Release Date: {item.release_date}</Text>
            <Text>Movie Overview: {item.overview}</Text>
            <Text>--------------------------------------------------------------</Text>
        </View>
        );*/
    }}>
    </FlatList>
};

export default MoviesList;