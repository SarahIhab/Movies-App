import React, {useEffect, useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import Search from '../components/search';
import MoviesList from '../components/moviesList';
import AllMovies from '../components/allMoviesList';

const Home = ()=>{
    const [movies, setMovies] = useState([]);
    const [allMovies, setAllMovies] = useState([]);
    const [inputChange, setInputChange] = useState(false);

    //mounting
    useEffect(()=>{
        console.log("MOUNTING: ALL MOVIES LIST IS SHOWN");
        //return <AllMovies movies = {movies} />
    },[]);

    //updating mount
    useEffect(()=>{
        if(inputChange === false)
        {
            console.log("UPDATING: THE ALL MOVIES LIST IS SHOWN");
            //return <AllMovies movies = {movies} />;
        }
        else{
            console.log("UPDATING: THE SEARCHED FOR LIST IS SHOWN");
            //return <MoviesList movies = {movies}/>;
        }
    },[inputChange]);

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
            <Search setAllMovies={setAllMovies} setMovies={setMovies} setInputChange={setInputChange} />
            {inputChange ? <MoviesList movies = {movies}/> : <AllMovies allMovies = {allMovies} />}
            {/*{
                movies? <MoviesList /> : <Text>Sorry the movie you requested is not available.</Text>
            }*/}
            
            
        </SafeAreaView>
    );
};



export default Home;