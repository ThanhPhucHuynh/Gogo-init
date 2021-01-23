import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ExploreScreen, OnboardingScreen, SaveScreen } from '../screens';
import { RootTabParamList } from './TabNavigation';
import { RootStackParamList } from './StackNavigation';

// Tab
const Tab = createBottomTabNavigator<RootTabParamList>();

export const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Save" component={SaveScreen} />
    </Tab.Navigator>
  );
};

// Stack
const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigation: React.FC = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="HomeScreen" component={TabNavigation} />
    </Stack.Navigator>
  );
};

export const RootNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

// export default RootNavigation;
