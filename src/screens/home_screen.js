import { View, Text, StyleSheet,Pressable} from 'react-native'

const home_screen = ()=>{
    return(
        <View style={styles.topBar}>
            <Image></Image>
            <Image></Image>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        topBar:{
            padding:"8px",
            backgroundColor:"fff",
        }
    }
)

export default home_screen