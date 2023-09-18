import axios from "axios";

const url= "https://fastfood-api.com"; 


export const fetchPosts =() => axios.get(url);
//  form sending data to db
export const createPost= (newPost)=> axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`,updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);