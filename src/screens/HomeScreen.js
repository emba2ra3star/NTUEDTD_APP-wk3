import React from 'react';
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import TopBar from "../components/TopBar.js"
import PopularBook from '../components/PopularBook.js';
import popularBooks from "../json/popularBooks.json";
import newest from "../json/newest.json"
import Newest from '../components/Newest.js';
// import ShowStars from '../components/ShowStars.js';

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <TopBar navigation={navigation} />
            <View>
                <Text style={styles.text_Heading1}>Popular Books</Text>
                <View style={styles.popularBooks_Content}>
                    <FlatList
                        horizontal={true}
                        data={popularBooks[0].data}
                        renderItem={({ item }) => { return (<PopularBook book={item} />) }}
                    />
                </View>
            </View>

            <View>
                <Text style={styles.text_Heading1}>Newest</Text>
                <View style={styles.popularBooks_Content}>
                    <FlatList
                        horizontal={true}
                        data={newest[0].data}
                        renderItem={({ item }) => { return (<Newest book={item} />) }}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        popularBooks_Content: {
            marginHorizontal: -8,
            paddingHorizontal: 20,
        },
        popularBooks_card: {
            marginHorizontal: 8
        },
        popularBooks_img: {
            height: 200,
            width: 140,
        },
        text_Heading1: {
            fontSize: 24,
            fontWeight: "500",
            fontFamily: "Roboto",
            marginTop: 8,
            marginLeft: 20,
        },
        text_Heading2: {
            fontSize: 16,
            fontWeight: "500",
            fontFamily: "Roboto",
        },
        text_body1: {
            fontSize: 14,
            fontWeight: "500",
            fontFamily: "Roboto",
            opacity: 0.5,
        },
    }
);

export default HomeScreen;