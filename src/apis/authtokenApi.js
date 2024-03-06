import axios from 'axios';
import { Cookies } from 'react-cookie';

const postApiAxios = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export default postApiAxios;

//SECTION -  authtoken 인증 파트
const cookies = new Cookies();

export const getAuthAxios = async () => {
  const accessToken = cookies.get('accessToken');
  try {
    const result = axios.get('http://3.38.191.164/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return result;
  } catch (error) {
    if (error.response.status === 401) {
      alert('token이 만료되었습니다.');
    }
  }
};
