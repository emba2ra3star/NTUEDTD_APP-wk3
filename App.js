import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, StatusBar, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TopBar from './src/components/TopBar';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TopBar />

        <View>
          <Text style={styles.text_Heading1}>Popular Books</Text>
          <ScrollView horizontal={true} style={styles.popularBooks_Content}>
            <View style={styles.popularBooks_card}>
              <Image style={styles.popularBooks_img} source={require("./assets/imgs/img_book_calligraphy.png")}></Image>
              <Text style={styles.text_Heading2}>Fashionopolis</Text>
              <Text style={styles.text_body1}>Dana Thomas</Text>
            </View>
            <View style={styles.popularBooks_card}><Image style={styles.popularBooks_img} source={require("./assets/imgs/img_book_calligraphy.png")}></Image></View>
            <View style={styles.popularBooks_card}><Image style={styles.popularBooks_img} source={require("./assets/imgs/img_book_calligraphy.png")}></Image></View>
          </ScrollView>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    popularBooks_Content: {
      paddingHorizontal: 20,
    },
    popularBooks_card: {
      marginHorizontal:8
    },
    popularBooks_img: {
      height: 200,
      width: 140,
    },
    text_Heading1:{
      fontSize:24,
      fontWeight:"500",
      fontFamily:"Roboto",
    },
    text_Heading2:{
      fontSize:16,
      fontWeight:"500",
      fontFamily:"Roboto",
    },
    text_body1:{
      fontSize:14,
      fontWeight:"500",
      fontFamily:"Roboto",
      opacity:0.5,
    },
  }
)

