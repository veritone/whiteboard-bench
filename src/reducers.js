const defaultState = {
  isLoading: false,
  posts: [
    { title: 'hello' }
  ]
}

const posts = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, action.post]
      }
    case 'GET_POST':
      return {
        ...state,
        isLoading: true
      }
    case 'GET_POST_SUCESS':
      return {
        ...state,
        posts: [...state.posts, ...action.posts],
        isLoading: false
      }
    default:
      return state
  }
};

export const getPosts = (state) => {
  return state.posts.posts
}

export const isLoading = (state) => {
  return state.posts.isLoading;
}

export default posts;