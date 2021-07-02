import React from "react";
import { Text, FlatList, StyleSheet } from "react-native";
import MovieItem from "./movieItem";

const MoviesList = (props) => {
  if (props.movies.length === 0) {
    return (
      <Text style={styles.textStyle}>
        Sorry, there are no movies that match your search.
      </Text>
    );
  } else {
    return (
      <FlatList
        data={props.movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return <MovieItem item={item} />;
        }}
      ></FlatList>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
  },

  textStyle: {
    color: "white",
  },
});

export default MoviesList;
