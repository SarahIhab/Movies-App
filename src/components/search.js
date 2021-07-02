import React, {useState, useEffect, useCallback} from 'react';
import { render } from 'react-dom';
import {Text,FlatList ,TextInput, Button, View, ActivityIndicator, Keyboard, StyleSheet, Dimensions, TouchableOpacity, Image} from 'react-native';
import {SearchBar} from 'react-native-elements';
import App from '../../App';

const Search = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [input, setInput] = useState('');
    const [backBtnVisibility, setBackBtnVisibility] = useState(false);
    var [allMovieResponseFromAPI, setValueData]=useState([]);
    var [successfulSearches, setSuccessfulSearches]=useState([]);
    var moviesResponse;
    var moviesJsonResponse;
    var allMovieResponseFromAPI;
    var allMovieResponseFromAPIJSON;
    var [flag, setFlag]=useState(false);
    const [temp, setValueTemp]=useState('none');

    

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
        console.log("MOUNTINGGGGGGGG");
        var getAllMovies = async()=>{
            for(var i=1; i<13;i++){

                allMovieResponseFromAPI = await fetch(apiBaseURL + i); 
                allMovieResponseFromAPIJSON = await  allMovieResponseFromAPI.json();
                
                //console.log("ALLLLLLLLLLLLL : " , allMovieResponseFromAPIJSON);
                console.log("IIIIIII " , i);
                console.log("SHOWWWW " , i);
                //console.log("ALLMOVIES RESPONSE" , allMovieResponseFromAPI);
                //var allMovieResponseFromAPIJSON = allMovieResponseFromAPI.json();
                //props.setAllMoviesInAPI(props.allMoviesInAPI.concat(allMovieResponseFromAPIJSON.results));
                //props.allMoviesInAPI.push(allMovieResponseFromAPIJSON.results);
                //console.log("LENGTHHHH " , props.allMoviesInAPI.length);
            }
        }

        getAllMovies();
        

    
    },[])

    

    


    
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

    const showBackButton = () =>{
        if(input.length !== 0)
        {
            setBackBtnVisibility(false)
        }
        else if (input.length === 0){
            setBackBtnVisibility(true);
        }
    }

    useEffect(()=>{
        showBackButton();
    },[input])

    var search = async (input) =>{
        moviesResponse = await fetch(apiBaseURL + props.apiPage); 
        moviesJsonResponse = await moviesResponse.json();
    if(props.apiPage === 1)
    {
        var FilteredMoviesArray = moviesJsonResponse.results.filter(function (el)
            {
                //if (el.title.toUpperCase())
                if(el.title.toUpperCase() === input.toUpperCase())
                {
                    var found=false;
                    for(var i=0; i<successfulSearches.length; i++) 
                    {
                        if (successfulSearches[i]===el.title){
                            found = true;
                            break;
                        }
                    }
                    if(found ===false){
                        if (successfulSearches.length===10){
                            successfulSearches.reverse().pop()
                            successfulSearches.reverse()
                        }
                        successfulSearches.push(el.title);
                    }
                }
                return el.title.toUpperCase() === input.toUpperCase();
            }
        );

        props.setMovies(FilteredMoviesArray); //I'm sending the json to the home to be used by other components
    }
    else{

        

        var FilteredMoviesArray = props.moviesJsonResponseArray.filter(function (el)
            {
                //if (el.title.toUpperCase())
                if(el.title.toUpperCase() === input.toUpperCase())
                {
                    var found=false;
                    for(var i=0; i<successfulSearches.length; i++) 
                    {
                        if (successfulSearches[i]===el.title){
                            found = true;
                            break;
                        }
                    }
                    if(found ===false){
                        if (successfulSearches.length===10){
                            successfulSearches.reverse().pop()
                            successfulSearches.reverse()
                        }
                        successfulSearches.push(el.title);
                    }
                }
                return el.title.toUpperCase() === input.toUpperCase();
            }
        );

        props.setMovies(FilteredMoviesArray);
    }
    }

    const fetchUserData = async() => {
        setIsLoading(true);
        console.log(input);
        {/*if(input.slice(-1) === ' ')
            {
                const valueWithoutWhiteSpace = input.slice(0, -1);
                console.log("SLICED INPUT", valueWithoutWhiteSpace);
                setInput(valueWithoutWhiteSpace);
                
            }*/}
        
        try{
            //const moviesResponse = await fetch(apiBaseURL + props.apiPage); 
            //const moviesJsonResponse = await moviesResponse.json();

             moviesResponse = await fetch(apiBaseURL + props.apiPage); 
             moviesJsonResponse = await moviesResponse.json();
            
            
            
            //var allMovieResponseFromAPI = await fetch(apiBaseURL + 1);
            //console.log("ALLMOVIES RESPONSE" , allMovieResponseFromAPI);
                

                

            /*var FilteredMoviesArray = moviesJsonResponse.results.filter(function (el)
                {
                    //if (el.title.toUpperCase())
                    return el.title === input;
                }
            );*/

            //console.log(FilteredMoviesArray);
            
            

            search(input);
            

            

            //props.setMovies(FilteredMoviesArray); //I'm sending the json to the home to be used by other components
            
            props.setMoviesJsonResponseArray(props.moviesJsonResponseArray.concat(moviesJsonResponse.results))
            props.setAllMovies(props.moviesJsonResponseArray.concat(moviesJsonResponse.results));
            setIsLoading(false);
        }
        catch(err){
            console.log("ERROR", err);
        }
        
    };
    var showSearchQueries = (flag)=>{
        //console.log('hena');
        //setFlag(prevFlag => !prevFlag );
        if(flag==true){
            setValueTemp("block");
        }
        else{
            setValueTemp("none");
        }
    };
    //console.log("SUCCESSFUL SEARCHES......",successfulSearches);

    /*const showSearchQueries=()=>{
        console.log("Hello");
        // return <FlatList data={successfulSearches} renderItem={({item, index})=>{
           <View >{...successfulSearches.map(item=>
                <Text>{item}</Text>    
            )}
            
            </View>
        //     console.log(item);
        //     return <Text>{item}</Text>
        // }}>

        // </FlatList>
        
        }*/
    const showCallback = useCallback((flag) => {
        showSearchQueries(flag)
    }, [showSearchQueries])
    return (
    <View >
        <View style={{flexDirection: 'row', justifyContent: "center", alignItems: "center", marginTop: 35}}>
            
        {/*<Button 
            title="Go Back"
            onPress={()=>{
                setInput('');
                Keyboard.dismiss();
            }}
        disabled={backBtnVisibility}/>*/}

            <View style={styles.backButtonView2}>
                <TouchableOpacity style={styles.backButton} onPress={()=>{setInput(''); Keyboard.dismiss();} }disabled={backBtnVisibility}>
                    <Image source={require("../../assets/backBtn.png")} style={styles.backButtonImg}/>
                </TouchableOpacity>
            </View>
            
            <TextInput 
            value = {input}
            placeholder="Enter the movie name" 
            onChangeText={(val)=>{
                //validation
                setInput(val);
                
            }} 
            onFocus={() => showCallback(true)}
            onBlur={() => showCallback(false)}
            style={styles.textInput}

            />
            

            <Button 
            title="Search"
            
            onPress={() => {

                if(input)
                {
                    fetchUserData();
                }

                Keyboard.dismiss();
            }}

            style={styles.searchButton}
        />

        </View>
        
        <View style={{display:temp}}>
            {successfulSearches.map(item=>
            <Text onPress={()=>{
                setInput(item);
                search(item);
            }}>{item}</Text>    
            )}

        </View>
        
        <View style={{justifyContent:"center", alignItems:"center", margin: 20}}>
            <Text> {isLoading ? <ActivityIndicator /> : null} </Text> 
        </View>

    </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        //marginTop: 35,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
        width: Dimensions.get('window').width * 0.7,
        padding:15
    },

    backButtonImg:{
        width: 20,
        height:20

    },

    backButtonView2:{
        //marginTop: Platform.OS === "ios" ? 40 : 20,
        marginRight: 20
    },
});

export default Search;