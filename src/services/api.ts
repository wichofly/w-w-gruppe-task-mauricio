import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const fetchPosts = () => api.get('/posts');
export const fetchUser = (userId: number) => api.get(`/users/${userId}`);
export const createPost = (data: {
  userId: number;
  title: string;
  body: string;
}) => api.post('/posts', data);
