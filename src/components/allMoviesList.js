import React from 'react';
import {View, FlatList, Text, Button} from 'react-native';
import MovieItem from './movieItem';
import Search from './search'; 

const AllMovies = (props) =>{
    
    /*const FooterButtons = ()=>{
        //props.setAPIPage(+1);
        return <View>
            <Button title="Next Page" onPress={()=>{
            props.setAPIPage(props.apiPage + 1);
        }}/>

        {props.apiPage === 1 ? console.log("NO MORE BACK: ", props.apiPage) : 
        <Button title="Previous Page" onPress={()=>{
            props.setAPIPage(props.apiPage - 1);
        }}/>}
        </View>
    }*/

    const changePage = ()=>{
        if(props.apiPage <=12)
        {
            props.setAPIPage(props.apiPage + 1);
        }
        
    }

    return <FlatList data={props.allMovies} keyExtractor={(item, index) => { return item.id; }} renderItem={({item, index})=>{
        return <MovieItem item={item} />
    }}
    onEndReached = {changePage}
    //ListFooterComponent= {FooterButtons}
        >
    </FlatList>
}

export default AllMovies;