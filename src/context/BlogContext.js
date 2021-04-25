import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
	switch (action.type) {
		case 'add':
			return [
				...state,
				{
					id: Math.floor(Math.random() * 99999),
					title: `Blog Post #${state.length + 1}`,
				},
			];
		case 'delete':
			return state.filter((blogPost) => blogPost.id !== action.payload);

		default:
			return state;
	}
};

const addBlogPost = (dispatch) => {
	return () => {
		dispatch({ type: 'add' });
	};
};

const deleteBlogPost = (dispatch) => {
	return (id) => {
		dispatch({ type: 'delete', payload: id });
	};
};

export const { Context, Provider } = createDataContext(
	blogReducer,
	{ addBlogPost: addBlogPost, deleteBlogPost: deleteBlogPost },
	[]
);
