import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Index">
				<Stack.Screen
					name="Index"
					component={IndexScreen}
					options={{
						title: 'Blog Index',
						headerTitleAlign: 'center',
					}}
				/>
				<Stack.Screen
					name="Show"
					component={ShowScreen}
					options={{
						title: 'Post Content',
						headerTitleAlign: 'center',
					}}
				/>
				<Stack.Screen
					name="Create"
					component={CreateScreen}
					options={{
						title: 'Create Post',
						headerTitleAlign: 'center',
					}}
				/>
				<Stack.Screen
					name="Edit"
					component={EditScreen}
					options={{
						title: 'Edit Index',
						headerTitleAlign: 'center',
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default () => {
	return (
		<Provider>
			<App />
		</Provider>
	);
};
