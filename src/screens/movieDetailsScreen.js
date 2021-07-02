import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
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
import { useRef } from "react";

const MovieDetailsScreen = (props) => {
  const { movie } = props.route.params;
  const navigation = useNavigation();
  const imgURL = "http://image.tmdb.org/t/p/w92" + movie.poster_path;
  const scrollViewRef = useRef();
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
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        style={styles.container}
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }
      >
        {/*Header*/}
        <ImageBackground
          source={{ uri: imgURL }}
          resizeMode="stretch"
          style={styles.poster}
          imageStyle={{
            borderBottomRightRadius: 25,
            borderBottomLeftRadius: 25,
          }}
        >
          <View style={styles.backButtonView}>
            <View style={styles.backButtonView2}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => {
                  navigation.navigate("Home");
                }}
              >
                <Image
                  source={require("../../assets/left-arrow.png")}
                  style={styles.backButtonImg}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.posterGradientView}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["transparent", "#242526"]}
                style={styles.posterGradient}
              >
                <Text style={styles.movieTitle}>{movie.title}</Text>
              </LinearGradient>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.lineStyle} />

        {/*Category Containers*/}
        <View style={styles.categoriesView}>
          {/*Language*/}
          <View style={styles.categoriesView}>
            <Text style={styles.categoriesText}>Language</Text>
          </View>

          {/*Release date*/}
          <View style={styles.categoriesView}>
            <Text style={styles.categoriesText}>Year</Text>
          </View>

          {/*Vote Average*/}
          <View style={styles.categoriesView}>
            <Text style={styles.categoriesText}>Vote Average</Text>
          </View>

          {/*Vote Count*/}
          <View style={styles.categoriesView}>
            <Text style={styles.categoriesText}>Vote Count</Text>
          </View>
        </View>

        {/*Category Containers Details*/}
        <View style={styles.categoriesView}>
          {/*Language*/}
          <View style={styles.categoriesView}>
            <Text style={styles.categoriesDetailText}>
              {movie.original_language === "en"
                ? "English"
                : movie.original_language === "es"
                ? "Spanish"
                : movie.original_language === "fi"
                ? "Finnish"
                : movie.original_language === "hi"
                ? "Hindi"
                : movie.original_language === "it"
                ? "Italian"
                : movie.original_language === "pt"
                ? "Portuguese"
                : movie.original_language === "sv"
                ? "Swedish"
                : movie.original_language === "pa"
                ? "Punjabi"
                : movie.original_language === "tl"
                ? "Tagalog"
                : movie.original_language === "ga"
                ? "Ghana"
                : movie.original_language === "xx"
                ? "English"
                : movie.original_language === "fr"
                ? "French"
                : movie.original_language === "kn"
                ? "Kannada"
                : movie.original_language === "ta"
                ? "Tamil"
                : movie.original_language === "pl"
                ? "Polish"
                : movie.original_language === "ko"
                ? "Korean"
                : movie.original_language === "cn"
                ? "Chinese"
                : movie.original_language === "hr"
                ? "Croatian"
                : movie.original_language === "ja"
                ? "Japanese"
                : movie.original_language === "zh"
                ? "Chinese"
                : movie.original_language === "hu"
                ? "Hungarian"
                : movie.original_language === "lv"
                ? "Latvian"
                : movie.original_language === "da"
                ? "Danish"
                : movie.original_language === "de"
                ? "German"
                : null}
            </Text>
          </View>

          {/*Release date*/}
          <View style={styles.categoriesView}>
            <Text style={styles.categoriesDetailText}>
              {movie.release_date.substring(0, 4)
                ? movie.release_date.substring(0, 4)
                : "unavailable"}
            </Text>
          </View>

          {/*Vote Average*/}
          <View style={styles.categoriesView}>
            <Text style={styles.categoriesDetailText}>
              {movie.vote_average ? movie.vote_average : "unavailable"}
            </Text>
          </View>

          {/*Vote Count*/}
          <View style={styles.categoriesView}>
            <Text style={styles.categoriesDetailText}>
              {movie.vote_count ? movie.vote_count : "unavailable"}
            </Text>
          </View>
        </View>

        <View style={styles.lineStyle} />

        {/*Overview*/}
        <View style={{ justifyContent: "flex-start", padding: 26 }}>
          <View>
            <Text
              style={{
                fontFamily: "Roboto_700Bold",
                fontSize: 18,
                color: "darkorange",
              }}
            >
              StoryLine
            </Text>
          </View>
          <View>
            <Text style={styles.movieDetails}>{movie.overview}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242526",
  },
  poster: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: null,
    backgroundColor: "#c2c3c5",
  },
  posterGradientView: {
    flex: 1,
    justifyContent: "flex-end",
  },
  posterGradient: {
    width: "100%",
    height: 250,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  backButtonView: {
    flex: 1,
  },
  backButtonView2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? 40 : 20,
    marginLeft: 13,
  },
  backButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 20,
    backgroundColor: "darkorange",
  },
  backButtonImg: {
    width: 20,
    height: 20,
  },

  movieTitle: {
    color: "white",
    fontSize: 38,
    paddingVertical: 8,
    fontFamily: "Roboto_700Bold",
  },
  categoriesView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 15,
    paddingLeft: 15,
    paddingVertical: 3,
  },
  categoryContainers: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 15,
    paddingLeft: 15,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  categoriesText: {
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
    color: "darkorange",
  },
  categoriesDetailText: {
    alignItems: "center",
    color: "white",
    fontSize: 14,
    paddingRight: 10,
    paddingLeft: 10,
    paddingVertical: 7,
    fontSize: 16,
    fontFamily: "Roboto_700Bold",
  },
  movieDetails: {
    alignItems: "center",
    color: "white",
    fontSize: 14,
    paddingVertical: 7,
  },
  lineStyle: {
    height: 2,
    width: "80%",
    margin: 7,
  },
});

export default MovieDetailsScreen;
