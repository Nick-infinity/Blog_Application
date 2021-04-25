import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
	switch (action.type) {
		// case 'add':
		// 	return [
		// 		...state,
		// 		{
		// 			id: Math.floor(Math.random() * 99999),
		// 			title: action.payload.title,
		// 			content: action.payload.content,
		// 		},
		// 	];
		case 'delete':
			return state.filter((blogPost) => blogPost.id !== action.payload);
		case 'edit':
			return state.map((blogPost) => {
				if (blogPost.id === action.payload.id) {
					return action.payload;
				} else {
					return blogPost;
				}
			});

		case 'get_blogposts':
			return action.payload;

		default:
			return state;
	}
};

// make requsts to server
const getBlogPosts = (dispatch) => {
	return async () => {
		const response = await jsonServer.get('/blogposts');
		// resposne.data === [{},{},{}]

		dispatch({ type: 'get_blogposts', payload: response.data });
	};
};

// add blog posts to server and show in ui
const addBlogPost = (dispatch) => {
	return async (title, content, callback) => {
		// 	try {
		// 		//await azios.post(p,p,p);
		// 		dispatch({ type: 'add', payload: { title: title, content: content } });
		// 		callback();
		// 	} catch (e) {}
		// };

		await jsonServer.post('/blogposts', { title: title, content });
		if (callback) {
			callback();
		}
	};
};

// delete posts from server
const deleteBlogPost = (dispatch) => {
	return async (id) => {
		await jsonServer.delete(`/blogposts/${id}`);
		// we can either call dispatch fucntion to delete the post in ui (less overhead)
		// or we can cal getblogposts again to reload the blogposts after deletion
		dispatch({ type: 'delete', payload: id });
	};
};

const editBlogPost = (dispatch) => {
	return /*async*/ (id, title, content, callback) => {
		try {
			//await azios.post(p,p,p);
			dispatch({
				type: 'edit',
				payload: { id: id, title: title, content: content },
			});
			callback();
		} catch (e) {}
	};
};

export const { Context, Provider } = createDataContext(
	blogReducer,
	{
		addBlogPost: addBlogPost,
		deleteBlogPost: deleteBlogPost,
		editBlogPost,
		getBlogPosts,
	},
	[]
);
