import React, { useState } from 'react';
import { Children } from 'react/cjs/react.development';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
	const [blogPosts, setBlogPosts] = useState([]);
	const addBlogPost = () => {
		setBlogPosts([
			...blogPosts,
			{ title: `Blog Post #${blogPosts.length + 1}` },
		]);
	};

	return (
		<BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>
			{children}
		</BlogContext.Provider>
	);
};

export default BlogContext;
