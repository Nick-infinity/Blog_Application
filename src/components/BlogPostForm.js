import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { Context } from '../context/BlogContext';

const BlogPostForm = ({ onSubmit, initialValues }) => {
	const [title, setTitle] = useState(initialValues.title);
	const [content, setContent] = useState(initialValues.content);
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
			<Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
		</View>
	);
};

BlogPostForm.defaultProps = {
	initialValues: {
		title: '',
		content: '',
	},
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
export default BlogPostForm;
