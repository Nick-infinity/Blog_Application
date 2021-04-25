import React from 'react';
import { Children } from 'react/cjs/react.development';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
	return <BlogContext.Provider>{children}</BlogContext.Provider>;
};
