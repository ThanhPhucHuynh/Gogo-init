import { StackNavigationProp } from '@react-navigation/stack';
import { NavigatorScreenParams } from '@react-navigation/native';
import { RootTabParamList } from './TabNavigation';

export type RootStackParamList = {
  Onboarding: undefined;
  HomeScreen: NavigatorScreenParams<RootTabParamList>;
};

export type OnboardingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Onboarding'
>;
export type HomeScreenScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;
