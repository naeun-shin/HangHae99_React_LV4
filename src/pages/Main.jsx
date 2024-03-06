import React, { useEffect } from 'react';
import { getAuthAxios } from '../apis/authtokenApi';
import { useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';

const Main = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();

  useEffect(() => {
    // 메인 페이지 정보를 불러오기
    getAuthAxios()
      .then((response) => {
        console.log(response.data.message + Date());
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert('token이 만료되었습니다.');
          cookies.remove('accessToken');
          navigate('/');
        }
      });
  }, [navigate]);

  const handleLogoutClick = () => {
    cookies.remove('accessToken');
    navigate('/');
  };
  return (
    <>
      <div>이 페이지는 메인 페이지 입니다.</div>
      <button onClick={handleLogoutClick}>로그아웃</button>
      {/* <button >투두리스트</button> */}
    </>
  );
};

export default Main;
