const getUsers = () => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};

const setUsers = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
};

export const authenticate = (email, password) => {
  const users = getUsers();
  const user = users.find(user => user.email === email && user.password === password);
  return user ? true : false;
};

export const register = (email, password) => {
  const users = getUsers();
  const userExists = users.some(user => user.email === email);
  if (userExists) {
    return false;
  }
  users.push({ email, password });
  setUsers(users);
  return true;
};

export const getUser = () => {
  const user = localStorage.getItem('currentUser');
  return user ? JSON.parse(user) : null;
};

export const setUser = (user) => {
  localStorage.setItem('currentUser', JSON.stringify(user));
};

export const logout = () => {
  localStorage.removeItem('currentUser');
};



