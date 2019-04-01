import { User } from './constants';
import { pubsub, USER_ADDED, MESSAGE_ADDED } from '../../subscription';

let lastChannelId = 2;
let lastMessageId = 2;
const Mutation = {
  addUser: (parent, { name, email }) => {
    lastChannelId += 1;
    const temp = {
      id: lastChannelId,
      name,
      email,
      messages: [{ id:lastMessageId, text: 'welcome' }],
    };
    User.push(temp);
    pubsub.publish(USER_ADDED, { userAdded: temp });
    return temp;
  },
  addMessage: (root, { message }) => {
    const Users = User.find(
      user => (user.id) === message.id,
    );
    lastMessageId += 1;
    const newMessage = {
      id: lastMessageId,
      text: message.text,
    };
    Users.messages.push(newMessage);
    console.log(newMessage)
    pubsub.publish(MESSAGE_ADDED, {
      messageAdded: newMessage,
    });

    return newMessage;
  },
}


export default Mutation;
