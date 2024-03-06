import postApiAxios from './authtokenApi';
export const login = async (id, password) => {
  console.log(id, password);
  const result = await postApiAxios
    .post('/login', {
      id,
      password,
    })
    .catch((error) => {
      console.log(error.message);
      // alert()
    });
  return result;
};
