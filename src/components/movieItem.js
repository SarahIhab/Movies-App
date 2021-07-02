import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
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

const MovieItem = (props) => {
  const navigation = useNavigation();
  const { item } = props;
  const imgURL = "http://image.tmdb.org/t/p/w92" + item.poster_path;
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

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      //clickable card
      <TouchableOpacity
        style={{ flexDirection: "row" }}
        onPress={() => {
          navigation.navigate("MovieDetails", { movie: item });
        }}
      >
        <View style={styles.container}>
          {/*Poster*/}
          {item.poster_path === null ? (
            <Text style={{ alignSelf: "center" }}>unavailable</Text>
          ) : (
            <Image source={{ uri: imgURL }} style={styles.image} />
          )}

          <View style={styles.viewContainer}>
            {/*Title*/}
            <Text style={styles.titleStyle}>{item.title}</Text>
            {/*Date*/}
            <Text style={styles.dateStyle}>
              {/* {item.release_date.substring(0, 4)} */}
              {item.release_date ? item.release_date : "unavailable"}
            </Text>
            {/*Overview*/}
            <Text style={styles.overviewStyle}>
              <Text style={styles.textStyle}>StoryLine: </Text>
              {item.overview ? item.overview : "unavailable"}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    width: "90%",
    margin: 20,
    paddingVertical: 10,
    borderWidth: 4,
    borderRadius: 15,
    borderColor: "darkorange",
    backgroundColor: "white",
  },

  image: {
    flex: 1,
    width: "30%",
    height: "70%",
    resizeMode: "cover",
    padding: "5%",
    marginTop: "12%",
    marginLeft: "4%",
    justifyContent: "center",
    alignContent: "center",
  },
  component: {
    height: "20%",
    flexDirection: "row",
  },
  viewContainer: {
    width: "50%",
    margin: "4%",
    justifyContent: "center",
    alignContent: "center",
  },
  titleStyle: {
    paddingBottom: "10%",
    fontFamily: "Roboto_700Bold",
    fontSize: 24,
  },
  dateStyle: {
    paddingBottom: "7%",
    fontFamily: "Roboto_500Medium",
    fontSize: 20,
  },
  overviewStyle: {
    paddingBottom: "10%",
    fontFamily: "Roboto_400Regular",
    fontSize: 14,
    lineHeight: 20,
  },
  textStyle: { fontFamily: "Roboto_500Medium", fontSize: 16 },
});

export default MovieItem;
