import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type RootTabParamList = {
  Explore: undefined;
  Save: undefined;
};
export type OnboardingScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  'Explore'
>;
export type HomeScreenScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  'Save'
>;
