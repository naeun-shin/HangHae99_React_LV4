import useCookies from 'react-cookie';

export const setCookie = (name, value, options = {}) => {
  const [, setCookie] = useCookies([name]);
  setCookie(name, value, options);
};

export const getCookie = (name) => {
  const [cookies] = useCookies([name]);
  return cookies[name];
};

export const removeCookie = (name) => {
  const [, removeCookie] = useCookies([name]);
  removeCookie(name);
};
