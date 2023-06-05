import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

const getUserRepos = async (username) => {
  try {
    const response = await api.get(`/users/${username}/repos`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching user repositories.');
  }
};

export default getUserRepos;