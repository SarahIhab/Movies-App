import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import Search from "../components/search";
import MoviesList from "../components/moviesList";
import AllMovies from "../components/allMoviesList";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [inputChange, setInputChange] = useState(false);
  const [apiPage, setAPIPage] = useState(1);
  const [moviesJsonResponseArray, setMoviesJsonResponseArray] = useState([]);
  const [allMoviesInAPI, setAllMoviesInAPI] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <Search
        setAllMovies={setAllMovies}
        setMovies={setMovies}
        setInputChange={setInputChange}
        apiPage={apiPage}
        setMoviesJsonResponseArray={setMoviesJsonResponseArray}
        moviesJsonResponseArray={moviesJsonResponseArray}
        allMoviesInAPI={allMoviesInAPI}
        setAllMoviesInAPI={setAllMoviesInAPI}
      />

      {inputChange ? (
        <MoviesList movies={movies} />
      ) : (
        <AllMovies
          allMovies={allMovies}
          setAPIPage={setAPIPage}
          apiPage={apiPage}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#242526",
  },
});

/*mounting
    useEffect(()=>{
        console.log("MOUNTING: ALL MOVIES LIST IS SHOWN");
        //return <AllMovies movies = {movies} />
    },[]);*/

/*//updating mount
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
    
    {/*allMoviesInAPI={allMoviesInAPI} setAllMoviesInAPI={setAllMoviesInAPI}*/

export default Home;
