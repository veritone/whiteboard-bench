export const addPost = post => ({
  type: 'ADD_POST',
  post
})

export const getPostsFromAPI = dispatch => {
  return dispatch => { 
    dispatch({
      type: 'GET_POST'
    })
    return fetch("https://jsonplaceholder.typicode.com/posts",{
      method: 'GET',//GET and ...
      headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json',
      }
    })
    .then((response)=>response.json()) //   <------ this line 
    .then((response)=> 
    {
      return dispatch({
        type: 'GET_POST_SUCESS',
        posts: response
      })
    });
  }
}