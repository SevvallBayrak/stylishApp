// Bilgisayarının IP adresi ve portu
export const BASE_URL = 'http://192.168.151.81:5001/api';

// Endpoint'ler
export const ENDPOINTS = {
  REGISTER: `${BASE_URL}/auth/register`,
  LOGIN: `${BASE_URL}/auth/login`,
  FORGOT_PASSWORD: `${BASE_URL}/auth/forgot-password`,
};