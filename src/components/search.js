import React, {useState, useEffect} from 'react';
import {Text, TextInput, Button, View, ActivityIndicator, FlatList, Keyboard, Touchable} from 'react-native';

const Search = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [input, setInput] = useState('');
    
    useEffect(()=>{
        console.log("API PAGE UPDATE: ", props.apiPage);
        //if(input.length === 0)
        if(props.apiPage<=12)
        {
            fetchUserData();
        }
        
    },[props.apiPage])
    
    const apiBaseURL = 'http://api.themoviedb.org/3/search/movie?api_key=b3070a5d3abfb7c241d2688d066914e7&query=Rocky&page=';

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

        {/*if(input.slice(-1) === ' ')
            {
                const valueWithoutWhiteSpace = input.slice(0, -1);
                console.log("SLICED INPUT", valueWithoutWhiteSpace);
                setInput(valueWithoutWhiteSpace);
                
            }*/}
        
        try{
            const moviesResponse = await fetch(apiBaseURL + props.apiPage);//+ 
            const moviesJsonResponse = await moviesResponse.json();

            var FilteredMoviesArray = moviesJsonResponse.results.filter(function (el)
                {
                    //if (el.title.toUpperCase())
                    return el.title === input;
                }
            );

            //console.log(FilteredMoviesArray);
            
            if(props.apiPage === 1)
            {
                var FilteredMoviesArray = moviesJsonResponse.results.filter(function (el)
                    {
                        //if (el.title.toUpperCase())
                        return el.title === input;
                    }
                );

                props.setMovies(FilteredMoviesArray); //I'm sending the json to the home to be used by other components
            }
            else{
                var FilteredMoviesArray = props.moviesJsonResponseArray.filter(function (el)
                    {
                        //if (el.title.toUpperCase())
                        return el.title === input;
                    }
                );

                props.setMovies(FilteredMoviesArray);
            }
            

            /*for(const i=1; i<13;i++){
                const allMovieResponseFromAPI = await fetch(apiBaseURL + i);
                const allMovieResponseFromAPIJSON = allMovieResponseFromAPI.json();
                props.setAllMoviesInAPI(props.allMoviesInAPI.concat(allMovieResponseFromAPIJSON.results));
            }

            console.log(props.allMoviesInAPI);*/

            //props.setMovies(FilteredMoviesArray); //I'm sending the json to the home to be used by other components
            
            props.setMoviesJsonResponseArray(props.moviesJsonResponseArray.concat(moviesJsonResponse.results))
            props.setAllMovies(props.moviesJsonResponseArray.concat(moviesJsonResponse.results));
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
            //validation
            setInput(val);
            
        }} />

        <Button 
        title="Search"
        
        onPress={() => {

            if(input)
            {
                fetchUserData();
            }

            Keyboard.dismiss();

        }}
        />

        <Button 
        title="Go Back"
        onPress={()=>{
            setInput('');
            Keyboard.dismiss();
        }}/>

        <Text> {isLoading ? <ActivityIndicator /> : null} </Text> 

    </View>
    );
};

export default Search;