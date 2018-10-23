const defaultState = {
  posts: [
    { title: 'hello' }
  ]
}

const posts = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        {
          posts: [...state.posts, action.post]
        }
      ]
    default:
      return state
  }
};

export const getPosts = (state) => {
  return state.posts.posts
}

export default posts;