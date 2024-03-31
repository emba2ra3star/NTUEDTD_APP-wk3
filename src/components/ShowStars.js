import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const ShowStars = ({ starAmount }) => {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < starAmount) {
      stars.push(<Image style={styles.star} source={{ uri: "https://github.com/emba2ra3star/NTUEDTD_APP-wk3/blob/main/assets/icons/icon_star_filled.png?raw=true" }}></Image>)
    }
    else {
      stars.push(<Image style={styles.star} source={{ uri: "https://github.com/emba2ra3star/NTUEDTD_APP-wk3/blob/main/assets/icons/icon_star_empty.png?raw=true" }}></Image>)
    }
  }
  return (
    <View style={styles.stars}>{stars}</View>
  );
};

const styles = StyleSheet.create(
  {
    star: {
      marginHorizontal: 4,
    },
    stars: {
      marginHorizontal: -4,
    },
  }
);

export default ShowStars;