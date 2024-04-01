import React from 'react';
import { StyleSheet, View, Image, Pressable } from 'react-native';

const TopBar = () => {
    return (
        <View style={styles.topBar}>
            <Pressable style={styles.iconBTN}>
                <Image style={styles.iconImg} source={require("../../assets/icons/icon_menu.png")} />
            </Pressable>
            <Pressable style={styles.iconBTN}>
                <Image style={styles.iconImg} source={require("../../assets/icons/icon_search.png")} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        topBar: {
            padding: 8,
            backgroundColor: "fff",
            flexDirection: "row",
            justifyContent: 'space-between',
        },
        iconBTN: {
            padding: 8,
        },
        iconImg: {
            width: 24,
            height: 24,
        },
    }
);

export default TopBar;