import React from 'react';
import {View, FlatList, Text} from 'react-native';

const MovieItem = (props) =>{
    const {item} = props;
    return (
        <View>
            <Text>Movie title: {item.title}</Text>
            <Text>Release Date: {item.release_date}</Text>
            <Text>Movie Overview: {item.overview}</Text>
        {/*<Text>Title: {item.title}</Text>
        <Text>Release Date: {item.release_date}</Text>
        <Text>Overview: {item.overview}</Text>
        <Text>Language: {item.original_language}</Text>
        <Text>Adult: {item.adult}</Text>
        <Text>Popularity: {item.popularity}</Text>
        <Text>Vote Average: {item.vote_average}</Text>
    <Text>Vote Count: {item.vote_count}</Text>*/}
        <Text>--------------------------------------------------------------</Text>
    </View>
    );
}

export default MovieItem;