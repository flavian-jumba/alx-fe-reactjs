import axios from 'axios'

const API_BASE_URL = 'https://api.github.com';

export const fetchUserData = async (username, location, minRepos) => {
 try{
    const response = await axios.get(
        `https://api.github.com/search/users?q=${username},+location;${location},+repos:${minRepos}`, 
        {headers:{
            Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
        },
    });
    return response.data.items;
 } catch (error) {
    console.error('Error finding user data:', error);
    throw error;
 }
};
