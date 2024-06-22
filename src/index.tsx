import { View, StyleSheet, FlatList } from 'react-native';
import tweets from '../assets/tweets';
import Tweet from './components/Tweet';

const TabOneScreen = ({navigation}) => {
    console.warn(tweets[0].content);
    return (
        <View>
            <FlatList data={tweets} renderItem={(item) => <Tweet tweet={item.item} navigation={navigation} />}/>
        </View>
    );

}

const styles = StyleSheet.create({
});

export default TabOneScreen;