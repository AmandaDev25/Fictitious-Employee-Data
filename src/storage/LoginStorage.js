const KEY_STORAGE = 'LOGIN';

const setLoginUser = (data) => {
  localStorage.setItem(KEY_STORAGE, JSON.stringify(data));
};

const getLoginUser = () => {
  const item = localStorage.getItem(KEY_STORAGE);
  if (item && item !== '') {
    return JSON.parse(item);
  }
  return null;
};

const removeLoginUser = () => {
  localStorage.removeItem(KEY_STORAGE);
};

export { setLoginUser, getLoginUser, removeLoginUser };
