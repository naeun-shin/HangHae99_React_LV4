import axios from 'axios';
import { Cookies } from 'react-cookie';
// import { useNavigate } from 'react-router-dom';

const cookies = new Cookies();

export const getMain = async () => {
  //   const navigate = useNavigate();
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
