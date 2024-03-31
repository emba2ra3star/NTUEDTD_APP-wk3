import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, Linking } from 'react-native';


const Newest = ({ book }) => {
    return (
        <View style={styles.popularBooks_card}>
            <Pressable onPress={() => console.log(2)}>
                <Image style={styles.popularBooks_img} source={{ uri: book.img }}></Image>
                {/* <ShowStars starAmount={newest[0].star_amount} /> */}
                <Text style={styles.text_Heading2}>{book.title}</Text>
                <Text style={styles.text_body1}>{book.author}</Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create(
    {
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

export default Newest;