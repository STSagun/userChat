import { User } from './constants';

const Query = {
  getAllUser: () => User,
  getUser: (parent, { id }) => User.filter(data => data.id === id)[0],
  login: (parent, { email, name }) => User.filter(data => (data.name === name && data.email === email))[0],
}

export default Query;
