import React, { useContext, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const ShowScreen = ({ route, navigation }) => {
	const { id } = route.params;

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity
					style={{ marginRight: 20 }}
					onPress={() => navigation.navigate('Edit', { id: id })}
				>
					<Feather name="edit" size={30} />
				</TouchableOpacity>
			),
		});
	});

	const { state } = useContext(Context);
	const blogPostWithId = state.find((blogPost) => blogPost.id === id);

	return (
		<View>
			<Text style={styles.label}>Post Title</Text>
			<Text style={styles.inputStyle}>{blogPostWithId.title}</Text>
			<Text style={styles.label}>Post Content</Text>
			<Text style={styles.inputStyle}>{blogPostWithId.content}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	inputStyle: {
		fontSize: 18,
		borderWidth: 1,
		borderColor: 'black',
		fontStyle: 'italic',
		marginBottom: 15,
		padding: 5,
		margin: 5,
	},
	label: {
		fontWeight: 'bold',
		fontSize: 20,
		marginLeft: 5,
		marginBottom: 5,
	},
});
export default ShowScreen;
