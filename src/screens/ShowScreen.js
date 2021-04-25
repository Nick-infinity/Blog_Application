import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
const ShowScreen = ({ route }) => {
	const { id } = route.params;

	const { state } = useContext(Context);
	const blogPostWithId = state.find((blogPost) => blogPost.id === id);

	return (
		<View>
			<Text>{blogPostWithId.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});
export default ShowScreen;
