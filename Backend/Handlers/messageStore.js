/* abstract */ class MessageStore {
  saveMessage(message) { }
  findMessagesForUser(userID) { }
}

class InMemoryMessageStore extends MessageStore {
  constructor() {
    super();
    this.messages = [];
  }

  saveMessage(message) {
    this.messages.push(message);
  }

  findMessagesForUser(userID) {
    return this.messages.filter(
      ({ from, to }) => from === userID || to === userID
    );
  }
  deleteMessagesForUser(userID) {
    this.messages = this.messages.filter(
      ({ from, to }) => from !== userID || to !== user);
  };
}

module.exports = {
  InMemoryMessageStore,
};