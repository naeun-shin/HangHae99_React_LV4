import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../apis/login';
import { useCookies } from 'react-cookie';
import IsEmpty from '../utils/IsEmpty';

const Home = () => {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies();

  const handleIDChange = (e) => {
    setId(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  //SECTION - 로그인 api
  const handleLoginclick = async () => {
    if (!IsEmpty({ id, password })) {
      // 아이디 또는 패스워드에 공백이 있는 경우
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }
    await login(id, password).then((response) => {
      const { token } = response.data;
      setCookie('accessToken', token);
      navigate('/main');
    });
  };

  return (
    <>
      <div>로그인하기</div>
      <div>
        <input
          placeholder='ID'
          type='text'
          value={id}
          onChange={handleIDChange}
        />
        <input
          placeholder='PWD'
          type='password'
          value={password}
          onChange={handlePasswordChange}
        />
        <button onClick={handleLoginclick}>로그인</button>
      </div>
      <Link to='/SignUp'>회원가입하기</Link>
    </>
  );
};

export default Home;
