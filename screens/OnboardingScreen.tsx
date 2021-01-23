import { StackNavigationProp } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, View, StyleSheet, ImageBackground } from 'react-native';
import {
  currentHeight,
  height,
  onboardingPictureOne,
  width,
} from '../constants';
import { RootStackParamList } from '../navigation/StackNavigation';

type OnboardingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Onboarding'
>;
type OnboardingScreenProps = {
  navigation: OnboardingScreenNavigationProp;
};
const styles = StyleSheet.create({
  containerBackground: {
    flex: 1,
    top: currentHeight,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    opacity: 0.8,
  },
});
const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.containerBackground}>
      <ImageBackground source={onboardingPictureOne} style={styles.image}>
        <StatusBar style="light" />
        <Button
          title="Go"
          onPress={() => navigation.navigate('HomeScreen', { screen: 'Save' })}
        >
          Go to Explore
        </Button>
      </ImageBackground>
    </View>
  );
};
export default OnboardingScreen;
