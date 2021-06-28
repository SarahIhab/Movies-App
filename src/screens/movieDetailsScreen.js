import React from 'react';
import {View} from 'react-native';
import MovieItem from '../components/movieItem';

const MovieDetailsScreen = (props) =>{
    return <View>
        <MovieItem item={props.movies}/>
    </View>;
}

export default MovieDetailsScreen;