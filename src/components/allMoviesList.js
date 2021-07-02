import React from "react";
import { FlatList, StyleSheet } from "react-native";
import MovieItem from "./movieItem";

const AllMovies = (props) => {
  //Function to increment pages when the user scrolls down to load the next page
  const changePage = () => {
    if (props.apiPage <= 12) {
      props.setAPIPage(props.apiPage + 1);
    }
  };

  return (
    <FlatList
      style={styles.flatListStyle}
      maxToRenderPerBatch={10}
      initialNumToRender={10}
      keyExtractor={(item) => item.id}
      data={props.allMovies}
      renderItem={({ item, index }) => {
        return <MovieItem item={item} />;
      }}
      onEndReached={changePage}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  flatListStyle: {
    backgroundColor: "#242526",
  },
});

export default AllMovies;
