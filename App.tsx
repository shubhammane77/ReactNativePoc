/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import TweetDetails from './src/components/TweetDetails';
import Stack from './src/navigator/Stack';
import React, {useRef}from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import TabOneScreen from './src';
import { ScrollView } from 'react-native-gesture-handler';
type SectionProps = PropsWithChildren<{
  title: string;
}>;
function App(): React.JSX.Element {
  return (
      <NavigationContainer>
         <Stack.Navigator>
                  <Stack.Screen 
                      name="Home"
                      component={TabOneScreen}
                      options={{ title: 'Welcome',cardStyle: {flex:1} }}
                  />
                  <Stack.Screen name="TweetDetails" component={TweetDetails} options={{
                      title: 'Tweet Details',cardStyle: {flex:1}
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
