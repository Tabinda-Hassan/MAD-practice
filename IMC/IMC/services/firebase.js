// services/firebase.js
import axios from 'axios';

const DATABASE_URL = 'https://islamabadmotorcompany-1d5f0-default-rtdb.firebaseio.com/';
const API_KEY = 'AIzaSyBGLThrVRncHFb9I4tIdjAfGUo8YZeFLPE'; // ← replace this with your actual API key

const firebase = axios.create({
  baseURL: DATABASE_URL,
});

// Firebase Auth REST endpoints
const AUTH_BASE_URL = 'https://identitytoolkit.googleapis.com/v1/accounts';

/**
 * Sign up a new user with email and password
 */
export const signup = (email, password) => {
  return axios.post(`${AUTH_BASE_URL}:signUp?key=${API_KEY}`, {
    email,
    password,
    returnSecureToken: true,
  });
};

/**
 * Sign in an existing user with email and password
 */
export const login = (email, password) => {
  return axios.post(`${AUTH_BASE_URL}:signInWithPassword?key=${API_KEY}`, {
    email,
    password,
    returnSecureToken: true,
  });
};

export default firebase;
