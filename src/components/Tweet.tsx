import { View, Text, StyleSheet, Image } from 'react-native';
const Tweet = ({ tweet, navigation }) => {
    console.log(tweet.user?.image);
    return (
        <View style={styles.container}>
            <Image source={{uri: tweet.user?.image}} style={{height:50, width:50}}></Image>
            <View style={styles.mainContainer}>
                <Text style={styles.userName}>{tweet.user.username}</Text>
                <Text style={styles.tweet} onPress={() =>
                    navigation.navigate('TweetDetails', { tweet: tweet })
                }>{tweet.content}</Text>
                {tweet.image && <Image  style={styles.tweetImage} source={{uri: tweet.image}} />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: 'lightgrey',
        padding: 10,
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    mainContainer: {
        marginLeft: 10,
        flex: 1
    },
    tweetImage: {
        aspectRatio: 10 / 4,
        padding: 10
    },
    tweet: {
        margin: 10,
    },
    userName: {
        marginLeft: 10,
        fontWeight: '900'
    }
})
export default Tweet;