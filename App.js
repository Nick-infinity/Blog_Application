import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import IndexScreen from './src/screens/IndexScreen';
import { BlogProvider } from './src/context/BlogContext';

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Index">
				<Stack.Screen
					name="Index"
					component={IndexScreen}
					options={{ title: 'Blog Index', headerTitleAlign: 'center' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default () => {
	return (
		<BlogProvider>
			<App />
		</BlogProvider>
	);
};
