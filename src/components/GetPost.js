import {useEffect, useReducer} from 'react'
const initialization = {
	loading: true,
	post: {},
	error: ''
};
const reducer = (state, action) => {
	switch (action.type){
		case 'SUCCESS':
			return {
				loading: false,
				post: action.result,
				error: ''
			}
		case 'ERROR':
			return {
				loading: false,
				post: {},
				error: 'Something went wrong. Please try again.'
			}
		default:
			return state;
	}
}
export default function GetPost(){
	const [post, setPost] = useReducer(reducer,initialization)

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts/1')
		      .then(response => response.json())
		      .then((data) => {
		      	setPost({type: 'SUCCESS', result: data})
		      })
		      .catch(() => {
		      	setPost({type: 'ERROR'})
		      })
	})

	return (
		<>
			<p>{post.loading ? 'Loading' : post.post.title}</p>
			<p>{post.error || null}</p>
		</>
	)
}