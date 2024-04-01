import React from 'react';
import { StyleSheet, Text, View, Pressable, FlatList, Button } from 'react-native';

const BookInfoScreen=()=>{
    <View>
        <Image source={{uri:"https://github.com/emba2ra3star/NTUEDTD_APP-wk3/blob/main/assets/imgs/img_book_ysl.png?raw=true"}} />
        <Text>Yves Saint Laurent</Text>
        <Text>Suzy Menkes </Text>
        <View>
            <View></View>
            <Text>4.0</Text>
            <Text> / 5.0</Text>
        </View>
        <Text>A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.</Text>
        <Pressable>
            <Text>Buy Now for $46.99</Text>
        </Pressable>
    </View>
};

export default BookInfoScreen;