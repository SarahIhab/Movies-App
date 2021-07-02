import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, FlatList, Text, TouchableOpacity,Image, StyleSheet, Platform} from 'react-native';
import AppLoading from 'expo-app-loading';
import {useFonts, 
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
  } from '@expo-google-fonts/roboto';

const MovieItem = (props) =>{
    const navigation = useNavigation();
    const {item} = props;
    const imgURL = "http://image.tmdb.org/t/p/w92" + item.poster_path;
    let [fontsLoaded] = useFonts({Roboto_100Thin,
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
        Roboto_900Black_Italic});

    if (!fontsLoaded) {
        return <AppLoading />;
    }
    else{

        return (
            <TouchableOpacity style={{flexDirection:"row", }} onPress={() => {
                navigation.navigate("MovieDetails", {movie : item});
            }}>
                <View style={{flexDirection:"row", justifyContent: "center" , alignContent: "center", width:"90%",margin: 20,paddingVertical:10, borderWidth: 1}}>
                {/*<Image source={{uri: "http://image.tmdb.org/t/p/w92"} + item.poster_path} style={{width: 100, height: 100}}/>*/}
                
                <Image source={{uri: imgURL}} style={{verticalAlign: "middle",width: "30%", height: "60%", objectFit: "contain"}}/>
                
                    <View style={{width: "50%", paddingLeft:"10%", justifyContent: "center", alignContent: "center"}}>
                        <Text style={{paddingBottom:"10%", fontFamily: 'Roboto_700Bold', fontSize:24}}>{item.title}</Text>
                        <Text style={{paddingBottom:"7%", fontFamily: 'Roboto_500Medium', fontSize:20}}>{item.release_date.substring(0,4)}</Text>
                        <Text style={{paddingBottom:"10%", fontFamily: 'Roboto_400Regular', fontSize:14}}><Text style={{fontFamily: 'Roboto_500Medium', fontSize:16}}>StoryLine:  </Text>{item.overview}</Text>
                    </View>
                </View>
        </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignContent: "center",
        //padding: 50
    },
    component:{
        height:"20%",
        flexDirection: "row",
        //padding:100
    }
});

export default MovieItem;