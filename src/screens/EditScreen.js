import React, { useContext, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Button,
	TextInput,
} from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({ route, navigation }) => {
	const { state } = useContext(Context);
	const { id } = route.params;
	const blogPostWithId = state.find((blogPost) => blogPost.id === id);

	const [title, setTitle] = useState(blogPostWithId.title);
	const [content, setContent] = useState(blogPostWithId.content);

	return (
		<View>
			<Text style={styles.label}>Enter Title</Text>
			<TextInput
				style={styles.inputStyle}
				value={title}
				onChangeText={(text) => setTitle(text)}
			></TextInput>
			<Text style={styles.label}>Enter Content</Text>
			<TextInput
				style={styles.inputStyle}
				value={content}
				onChangeText={(text) => setContent(text)}
			></TextInput>
			<Button
				title="Add Blog Post"
				onPress={() => {
					//editBlogPost
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	inputStyle: {
		fontSize: 18,
		borderWidth: 1,
		borderColor: 'black',
		marginBottom: 15,
		padding: 5,
		margin: 5,
	},
	label: {
		fontSize: 20,
		marginLeft: 5,
		marginBottom: 5,
	},
});
export default EditScreen;
