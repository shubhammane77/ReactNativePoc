import { View, Text, StyleSheet, Image } from 'react-native';
const Tweet = ({ tweet, navigation }) => {
    return (
        <View style={styles.container}>
            <Image src={tweet.user?.image} style={styles.userImage}></Image>
            <View style={styles.mainContainer}>
                <Text style={styles.userName}>{tweet.user.username}</Text>
                <Text style={styles.tweet} onPress={() =>
                    navigation.navigate('TweetDetails', { tweet: tweet })
                }>{tweet.content}</Text>
                {tweet.image && <Image src={tweet.image} style={styles.tweetImage} />}
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
        backgroundColor:'black'
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
        aspectRatio: 16 / 9,
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