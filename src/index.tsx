import { View, StyleSheet, FlatList } from 'react-native';
import tweets from '../assets/tweets';
import Tweet from './components/Tweet';
import { ScrollView } from 'react-native';

const TabOneScreen = ({ navigation }) => {
    return (
        <ScrollView>
                <FlatList data={tweets} renderItem={(item) => <Tweet tweet={item.item} navigation={navigation} />} />
        </ScrollView>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',

    },
});

export default TabOneScreen;