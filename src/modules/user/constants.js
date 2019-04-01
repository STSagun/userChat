/* eslint-disable import/no-mutable-exports */
// eslint-disable-next-line import/no-mutable-exports
let lastChannelId;
let lastMessageId;
const User = [
  {
    id: 0,
    name: "John",
    email: "sagunsaluja13@gmail.com",
    messages: [{
        id: 0,
        text: 'baseball is life',
      }],
  },
  {
    id: 1,
    name: "Sagun",
    email: "sagunsaluja113@gmail.com",
    messages: [{
      id: 1,
      text: 'basewwwball is life',
    }],
  },
  {
    id: 2,
    name: "rahul",
    email: "sagunsaluja1223@gmail.com",
    messages: [{
      id: 2,
      text: 'baseeeeeeball is life',
    },
    ],

  },
];


export { User,  lastChannelId, lastMessageId };
