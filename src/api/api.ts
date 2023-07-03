import axios from 'axios';

export const postProfile = async (data: any) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', data);
      return response.data; // Return the newly created profile
    } catch (error) {
      console.error('Error posting profile:', error);
      throw error;
    }
  };  

export const fetchProfiles = async (page: number, limit: number) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching profiles:', error);
    throw error;
  }
};

export const fetchAvatar = (username: string) => {
  return `https://avatars.dicebear.com/api/avataaars/${username}.svg`;
};

//Here we are making all the api calls with the dummy API.
//Post Profile for posting the profile on click of submit button.
//Fetch Profiles for fetching the profiles from the API.
//Fetch Avatar for fetching the avatar from the API.