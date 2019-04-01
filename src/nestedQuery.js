import { User } from './modules/user/constants';

export const nestedQuery = {
  User: {
    // messages: parent => Message.filter(data => parent.messages.indexOf(data.id) !== -1),
  },
};

export default nestedQuery;
