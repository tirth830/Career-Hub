import axios from 'axios';

export const apiConnector = async (method, url, data = null, headers = {}) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    return response;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};