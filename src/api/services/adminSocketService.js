// Mock socket service to prevent connection errors when backend is not running

class DummySocket {
  constructor() {
    this.connected = true;
    this.listeners = {};
    console.log('⚡ Initialized Mock Admin Socket (Local mode)');
  }

  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
    return this;
  }

  off(event, callback) {
    if (!this.listeners[event]) return this;
    if (!callback) {
      delete this.listeners[event];
    } else {
      this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
    }
    return this;
  }

  emit(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(cb => {
        try {
          cb(data);
        } catch (err) {
          console.error(`Error in socket listener for ${event}:`, err);
        }
      });
    }
    return this;
  }

  disconnect() {
    this.connected = false;
    this.listeners = {};
    console.log('⚡ Mock Admin Socket Disconnected');
    return this;
  }
}

let socket = null;

export const initAdminSocket = () => {
  if (!socket) {
    socket = new DummySocket();
  }
  return socket;
};

export const getAdminSocket = () => {
  if (!socket) {
    return initAdminSocket();
  }
  return socket;
};

export const disconnectAdminSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};
