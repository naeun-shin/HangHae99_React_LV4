import postApiAxios from './authtokenApi';
export const signUp = async (id, password) => {
  const result = await postApiAxios
    .post('/register', {
      id,
      password,
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
  return result;
};
