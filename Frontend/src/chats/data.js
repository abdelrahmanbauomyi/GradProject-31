// data.js

let roomId = null;

function setRoomId(id) {
  roomId = id;
}

function getRoomId() {
  return roomId;
}

module.exports = {
  setRoomId,
  getRoomId
};
