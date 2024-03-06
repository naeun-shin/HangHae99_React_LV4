import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IsEmpty from '../utils/IsEmpty';
import { signUp } from '../apis/signUp';

const SignUp = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleIDChange = (e) => {
    setId(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUpclick = async () => {
    if (!IsEmpty({ id, password })) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }
    const result = await signUp(id, password);
    // console.log(result);
  };

  return (
    <>
      <div>회원가입</div>
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
        <button onClick={handleSignUpclick}>회원가입</button>
      </div>
      <Link to='/'>로그인하기</Link>
    </>
  );
};

export default SignUp;
