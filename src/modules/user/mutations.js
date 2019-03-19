import { User, id } from './constants';
import { pubsub, USER_ADDED } from '../../subscription';

const Mutation = {
  addUser: (parent, { name, email }) => {
    const temp = {
      id: id + 1,
      name,
      email,
    };
    User.push(temp);
    pubsub.publish(USER_ADDED, { userAdded: temp });
    return temp;
  },
}

export default Mutation;
