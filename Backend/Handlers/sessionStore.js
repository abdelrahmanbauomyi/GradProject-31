    // غالبا مش هنحتاجه و هنستخدم الداتا بيز

/* abstract */ class SessionStore {
  findSession(id) {}
  saveSession(id, session) {}
  findAllSessions() {}
}

class InMemorySessionStore extends SessionStore {


    constructor() {
      super();
      this.sessions = new Map();
    }
  
    findSession(email) {
      return this.sessions.get(email);
    }
  
    saveSession(id, session) {
      this.sessions.set(id, session);
    }
  
    findAllSessions() {
      return [...this.sessions.values()];
    }
  }

module.exports = {
  InMemorySessionStore,
};