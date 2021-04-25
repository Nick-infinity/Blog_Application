import React from 'react';
import { Children } from 'react/cjs/react.development';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
	const blogPosts = [
		{ title: 'BlogPost 1' },
		{ title: 'BlogPost 2' },
		{ title: 'BlogPost 3' },
	];
	return (
		<BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>
	);
};

export default BlogContext;
