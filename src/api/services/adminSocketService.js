import { io } from 'socket.io-client';
import Cookies from 'js-cookie';

let socket = null;

export const initAdminSocket = () => {
  const token = Cookies.get('adminToken') || localStorage.getItem('adminToken') || localStorage.getItem('token');

  if (socket && socket.connected) {
    return socket;
  }

  // Socket server endpoint (same origin or API base domain)
  const SERVER_URL = import.meta.env.VITE_API_URL 
    ? import.meta.env.VITE_API_URL.replace(/\/api\/v1\/?$/, '') 
    : 'http://localhost:5000';

  socket = io(SERVER_URL, {
    auth: {
      token: token ? `Bearer ${token}` : ''
    },
    transports: ['websocket', 'polling'],
    autoConnect: true,
    reconnection: true,
    reconnectionAttempts: 10,
    reconnectionDelay: 2000,
  });

  socket.on('connect', () => {
    console.log('⚡ Admin Socket Connected:', socket.id);
  });

  socket.on('disconnect', (reason) => {
    console.log('⚡ Admin Socket Disconnected:', reason);
  });

  socket.on('connect_error', (error) => {
    console.warn('⚡ Admin Socket Connection Error:', error.message);
  });

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
