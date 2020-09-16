import history from 'utils/history';
import { URI } from 'utils/constants';

const localStorage = global.window.localStorage;

/**
 * Checks if a user is logged in
 */
export function loggedIn() {
  return !!localStorage.token;
}

/**
 * Returns the token
 */
export function token() {
  return localStorage.token;
}
/**
 * Logs a user in, returning a promise with `true` when done
 * @param  {string} username The username of the user
 * @param  {string} password The password of the user
 */
export async function login(email, pass) {
  if (loggedIn()) {
    return Promise.resolve(true);
  }
  return fetch(`${URI}/rpc/login`, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: 'POST',
    body: JSON.stringify({
      email: email,
      pass: pass
    })})
    .then(r =>  r.json()
    .then(data => ({status: r.status, body: data})))
    .then((response) => {
      if (response.status === 200){
        localStorage.token = response.body[0].token;
        return Promise.resolve(response.body[0].payload);
      } else {
        return Promise.reject(new Error(response.body.message));
      }
    });
}

/**
 * Logs the current user out by removing the authentication token
 */
export function logout() {
  localStorage.removeItem('token');
  return Promise.resolve(true);
}

/**
 * Registers a user and then logs them in
 * @param  {string} email The email of the user
 * @param  {string} pass The password of the user
 */
export async function signup(email, pass) {
  return fetch(`${URI}/rpc/login`, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: 'POST',
    body: JSON.stringify({
      email: email,
      pass: pass
    })})
    .then(() => {
      // Log user in after registering
      history.push('/');
    });
}

/**
 * Refreshes a users JWT Token
 */
export async function refreshToken(){
  return fetch(`${URI}/rpc/refresh_token`, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": `Bearer ${token()}`
      },
      method: 'POST',
    })
    .then(r =>  r.json()
    .then(data => ({status: r.status, body: data})))
    .then((response) => {
      if (response.status === 200){
        localStorage.token = response.body;
        return Promise.resolve(response.body);
      } else {
        return Promise.reject(new Error(response.body.message));
      }
    });
}

