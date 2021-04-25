import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ route, navigation }) => {
	const { state, editBlogPost } = useContext(Context);
	const { id } = route.params;
	const blogPostWithId = state.find((blogPost) => blogPost.id === id);

	return (
		<BlogPostForm
			initialValues={{
				title: blogPostWithId.title,
				content: blogPostWithId.content,
			}}
			onSubmit={(title, content) => {
				editBlogPost(id, title, content, () => navigation.navigate('Index'));
			}}
		/>
	);
};

const styles = StyleSheet.create({});
export default EditScreen;
