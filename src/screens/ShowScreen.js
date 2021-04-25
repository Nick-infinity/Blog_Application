import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShowScreen = ({ route }) => {
	const { id } = route.params;

	return (
		<View>
			<Text>ShowScreen</Text>
		</View>
	);
};

const styles = StyleSheet.create({});
export default ShowScreen;
