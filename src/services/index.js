import Axios from 'axios';

const URL = 'https://192.168.0.1:3001/';

export default async (path, method, data) => {
  try {
    return await Axios({
      url: URL + path,
      method: method,
      data: data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response?.data;
      })
      .catch((error) => {
        throw error;
      });
  } catch (err) {
    throw err;
  }
};
