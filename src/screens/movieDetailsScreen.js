import React from 'react';
import {View, Text, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MovieItem from '../components/movieItem';

const MovieDetailsScreen = (props) =>{
    const {movie} = props.route.params;
    const imgURL = "http://image.tmdb.org/t/p/w92" + movie.poster_path;

    return <SafeAreaView>
        <View>
            {/*<MovieItem item={movie}/>

            <Image source={{uri: "http://image.tmdb.org/t/p/w92/" + movie.poster_path}} style={{width: 100, height: 100}}/>*/}
            <Image source={{uri: imgURL}} style={{width: 100, height: 150}}/>
            <Text>Title: {movie.title}</Text>
            <Text>Release Date: {movie.release_date}</Text>
            <Text>Overview: {movie.overview}</Text>
            <Text>Language: {movie.original_language === "en" ? "English" : movie.original_language === "es" ? "Spanish" : null}</Text>
            <Text>Adult: {movie.adult ? "Yes" : "No"}</Text>
            <Text>Popularity: {movie.popularity}</Text>
            <Text>Vote Average: {movie.vote_average}</Text>
            <Text>Vote Count: {movie.vote_count}</Text>
        </View>
    </SafeAreaView>
        
    //<View> <MovieItem item={props.movies}/></View>; {movie ? (<) : null}
}

export default MovieDetailsScreen;