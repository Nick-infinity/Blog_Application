import React, { useContext, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const ShowScreen = ({ route, navigation }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity
					style={{ marginRight: 20 }}
					onPress={() => navigation.navigate('Edit')}
				>
					<Feather name="edit" size={30} />
				</TouchableOpacity>
			),
		});
	});

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
