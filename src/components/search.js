import React, {useState, useEffect} from 'react';
import {Text, TextInput, Button, View, ActivityIndicator} from 'react-native';

const Search = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [input, setInput] = useState('');

    useEffect(()=>{
        if(input.length === 0)
        {
            fetchUserData();
            props.setInputChange(false);
        }
        else{
            props.setInputChange(true);
        }
    },[input]);

    const fetchUserData = async() => {
        setIsLoading(true);
        
        try{
            const moviesResponse = await fetch('http://api.themoviedb.org/3/search/movie?api_key=b3070a5d3abfb7c241d2688d066914e7&query=Rocky&page=1');
            const moviesJsonResponse = await moviesResponse.json();
            
            var FilteredMoviesArray = moviesJsonResponse.results.filter(function (el)
                {
                    //if (el.title.toUpperCase())
                    return el.title === input;
                }
            );

            props.setMovies(FilteredMoviesArray); //I'm sending the json to the home to be used by other components
            props.setAllMovies(moviesJsonResponse);
            setIsLoading(false);
        }
        catch(err){
            console.log("ERROR", err);
        }
        
    };


    return (
    <View>

        <TextInput 
        value = {input}
        placeholder="Enter the movie name" 
        onChangeText={(val)=>{
            // validation
            setInput(val);
        }} />

        <Button 
        title="Search"
        onPress={() => {
            if(input)
            {
                fetchUserData();
            }
            
        }}
        />
        <Text> {isLoading ? <ActivityIndicator /> : null} </Text>
        
        {/*<Text>---------------------------------------------------------------</Text>
        <Button
        title="click"
        onPress={()=>{
            console.log("moviesLocal: ", fetchUserData().then((e)=>{
                console.log(e.);
            }));
        }}/>
        <FlatList data={moviesJsonResponse.results} renderItem={({item, index})=>{
            return (
                <View>
                    <Text>Movie title: {item.title}</Text>
                    <Text>Release Date: {item.release_date}</Text>
                    <Text>Movie Overview: {item.overview}</Text>
                    <Text>--------------------------------------------------------------</Text>
                </View>
            );
        }}>
        </FlatList>*/}
        
    </View>
    );
};

export default Search;