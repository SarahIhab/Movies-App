import React, { useState, useEffect, useCallback } from "react";
import { Pressable } from "react-native";
import {
  Text,
  TextInput,
  View,
  ActivityIndicator,
  Keyboard,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";

const Search = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [backBtnVisibility, setBackBtnVisibility] = useState("none");
  var [allMoviesearch, setallMoviesearch] = useState([]);
  var [successfulSearches, setSuccessfulSearches] = useState([]);
  const [temp, setValueTemp] = useState("none");
  var moviesResponse;
  var moviesJsonResponse;
  //var allMovieResponseFromAPI;
  //var allMovieResponseFromAPIJSON;
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  const apiBaseURL =
    "http://api.themoviedb.org/3/search/movie?api_key=b3070a5d3abfb7c241d2688d066914e7&query=Rocky&page=";

  /*Effects*/

  //Effect to update the page number in pagination
  useEffect(() => {
    //console.log("API PAGE UPDATE: ", props.apiPage);
    //if(input.length === 0)
    if (props.apiPage <= 12) {
      fetchUserData();
    }
  }, [props.apiPage]);

  /*useEffect(() => {
    console.log("MOUNTINGGGGGGGG");
    var getAllMovies = async () => {
      for (var i = 1; i < 13; i++) {
        allMovieResponseFromAPI = await fetch(apiBaseURL + i);
        allMovieResponseFromAPIJSON = await allMovieResponseFromAPI.json();

        //console.log("ALLLLLLLLLLLLL : " , allMovieResponseFromAPIJSON);
        //console.log("ALLMOVIES RESPONSE" , allMovieResponseFromAPI);
        //var allMovieResponseFromAPIJSON = allMovieResponseFromAPI.json();
        //props.setAllMoviesInAPI(props.allMoviesInAPI.concat(allMovieResponseFromAPIJSON.results));
        //props.allMoviesInAPI.push(allMovieResponseFromAPIJSON.results);
        //console.log("LENGTHHHH " , props.allMoviesInAPI.length);
      }
    };

    getAllMovies();
  }, []);*/

  //Effect to keep up with the input change
  useEffect(() => {
    if (input.length === 0) {
      fetchUserData();
      props.setInputChange(false);
    } else {
      props.setInputChange(true);
    }
  }, [input]);

  //Effect to show or hide the back button depending on the user input
  useEffect(() => {
    showBackButton();
  }, [input]);

  /*Callbacks*/

  //Callback used to call the function that displays the back button to avoid re-rendering of the state
  const showBackButtonCallback = useCallback(
    (show) => {
      showBackButton(show);
    },
    [showBackButton]
  );

  //Callback used to call the function that displays the search queries to avoid re-rendering of the state
  const showCallback = useCallback(
    (flag) => {
      showSearchQueries(flag);
    },
    [showSearchQueries]
  );

  /*Functions*/

  //Function that searches for the input
  var search = async (input) => {
    moviesResponse = await fetch(apiBaseURL + props.apiPage);
    moviesJsonResponse = await moviesResponse.json();
    if (props.apiPage === 1) {
      var FilteredMoviesArray = moviesJsonResponse.results.filter(function (
        el
      ) {
        //if (el.title.toUpperCase())
        if (el.title.toUpperCase() === input.toUpperCase()) {
          var found = false;
          for (var i = 0; i < successfulSearches.length; i++) {
            if (successfulSearches[i] === el.title) {
              found = true;
              break;
            }
          }
          if (found === false) {
            if (successfulSearches.length === 10) {
              successfulSearches.reverse().pop();
              successfulSearches.reverse();
            }
            successfulSearches.push(el.title);
          }
        }
        return el.title.toUpperCase() === input.toUpperCase();
      });

      props.setMovies(FilteredMoviesArray); //I'm sending the json to the home to be used by other components
    } else {
      var FilteredMoviesArray = props.moviesJsonResponseArray.filter(function (
        el
      ) {
        //if (el.title.toUpperCase())
        if (el.title.toUpperCase() === input.toUpperCase()) {
          var found = false;
          for (var i = 0; i < successfulSearches.length; i++) {
            if (successfulSearches[i] === el.title) {
              found = true;
              break;
            }
          }
          if (found === false) {
            if (successfulSearches.length === 10) {
              successfulSearches.reverse().pop();
              successfulSearches.reverse();
            }
            successfulSearches.push(el.title);
          }
        }
        return el.title.toUpperCase() === input.toUpperCase();
      });

      props.setMovies(FilteredMoviesArray);
    }
  };

  //Function that fetches the movie data
  const fetchUserData = async () => {
    setIsLoading(true);

    try {
      moviesResponse = await fetch(apiBaseURL + props.apiPage);
      moviesJsonResponse = await moviesResponse.json();

      search(input);

      props.setMoviesJsonResponseArray(
        props.moviesJsonResponseArray.concat(moviesJsonResponse.results)
      );
      props.setAllMovies(
        props.moviesJsonResponseArray.concat(moviesJsonResponse.results)
      );
      setIsLoading(false);
    } catch (err) {
      console.log("ERROR", err);
    }
  };

  //Function that displays the search queries
  var showSearchQueries = (flag) => {
    if (flag == true) {
      setValueTemp("block");
    } else {
      setValueTemp("none");
    }
  };

  //Function that displays the back button queries
  const showBackButton = () => {
    if (input.length !== 0) {
      setBackBtnVisibility("block");
    } else if (input.length === 0) {
      setBackBtnVisibility("none");
    }
  };
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          {/*Back Button*/}
          <View style={{ display: backBtnVisibility }}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                setInput("");
                Keyboard.dismiss();
              }}
            >
              <Image
                source={require("../../assets/left-arrow.png")}
                style={styles.backButtonImg}
              />
            </TouchableOpacity>
          </View>

          {/*Search Bar*/}
          <TextInput
            style={styles.textInput}
            value={input}
            placeholder="Enter the movie name"
            onChangeText={(val) => {
              setInput(val);
            }}
            onFocus={() => {
              showCallback(true);
              showBackButtonCallback();
            }}
            onBlur={() => {
              showCallback(false);
              showBackButtonCallback();
            }}
          />

          {/*Search Button*/}
          <Pressable
            style={styles.searchButton}
            onPress={() => {
              if (input) {
                fetchUserData();
              }

              Keyboard.dismiss();
            }}
          >
            <Text style={styles.searchButtonText}>Search</Text>
          </Pressable>
        </View>

        {/*Search Queries List(styles.searchQueriesList,*/}
        <View
          style={{
            display: temp,
            borderWidth: 1,
            borderColor: "white",
            width: Dimensions.get("window").width * 0.5,
            alignItems: "center",
            marginLeft: "15%",
            backgroundColor: "white",
            marginTop: "-1%",
            borderRadius: 5,
          }}
        >
          {successfulSearches.map((item, index) => (
            <View>
              <Text
                style={styles.searchQueriesListText}
                onPress={() => {
                  setInput(item);
                  search(item);
                }}
              >
                {item}
              </Text>
              <View style={styles.lineStyle} />
            </View>
          ))}
        </View>

        {/*Loading Activity Indicator*/}
        <View
          style={{ justifyContent: "center", alignItems: "center", margin: 20 }}
        >
          <Text> {isLoading ? <ActivityIndicator /> : null} </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#242526",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
  },

  backButton: {
    marginRight: "5%",
  },

  backButtonImg: {
    width: 20,
    height: 20,
    backgroundColor: "darkorange",
    borderRadius: 4,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,
    width: Dimensions.get("window").width * 0.6,
    padding: 15,
    fontFamily: "Roboto_400Regular",
    backgroundColor: "white",
  },

  searchButton: {
    marginLeft: "3%",
    borderRadius: 9,
    backgroundColor: "darkorange",
    padding: 11,
  },

  searchButtonText: {
    color: "white",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },

  searchQueriesList: {
    marginTop: 10,
  },

  searchQueriesListText: {
    alignSelf: "center",
    color: "black",
    fontFamily: "Roboto_400Regular",
    fontSize: 15,
  },

  lineStyle: {
    borderWidth: 0.5,
    borderColor: "black",
    margin: 10,
  },
});

export default Search;
