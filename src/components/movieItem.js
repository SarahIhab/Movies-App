import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, FlatList, Text, TouchableOpacity,Image} from 'react-native';

const MovieItem = (props) =>{
    const navigation = useNavigation();
    const {item} = props;
    const imgURL = "http://image.tmdb.org/t/p/w92" + item.poster_path;

    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("MovieDetails", {movie : item});
        }}>
            <View style={{flexDirection: "row"}}>
            {/*<Image source={{uri: "http://image.tmdb.org/t/p/w92"} + item.poster_path} style={{width: 100, height: 100}}/>*/}
            <Image source={{uri: imgURL}} style={{width: 100, height: 200}}/>
                <View>
                    
                    <Text>Movie title: {item.title}</Text>
                    <Text>Release Date: {item.release_date}</Text>
                    <Text>Movie Overview: {item.overview}</Text>
                    <Text>--------------------------------------------------------------</Text>
                    <Text>--------------------------------------------------------------</Text>
                    <Text>--------------------------------------------------------------</Text>
                </View>
            </View>
    </TouchableOpacity>
    );
}

export default MovieItem;