/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';


import React, {useRef}from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import TabOneScreen from './src/index';
import TweetDetails from './src/components/TweetDetails';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
const Stack = createStackNavigator();

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const navigationRef = useNavigationContainerRef(); // You can also use a regular ref with `React.useRef()`

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
       <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={TabOneScreen}
                    options={{ title: 'Welcome' }}
                />
                <Stack.Screen name="TweetDetails" component={TweetDetails} options={{
                    title: 'Tweet Details'
                }} />
            </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
