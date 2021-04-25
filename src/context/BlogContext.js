import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
	switch (action.type) {
		case 'add':
			return [
				...state,
				{
					id: Math.floor(Math.random() * 99999),
					title: action.payload.title,
					content: action.payload.content,
				},
			];
		case 'delete':
			return state.filter((blogPost) => blogPost.id !== action.payload);

		default:
			return state;
	}
};

const addBlogPost = (dispatch) => {
	return /*async*/ (title, content, callback) => {
		try {
			//await azios.post(p,p,p);
			dispatch({ type: 'add', payload: { title: title, content: content } });
			callback();
		} catch (e) {}
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
