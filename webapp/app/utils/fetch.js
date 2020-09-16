/**
 *
 * Some helperd to perform queries faster
 *
 */

import { token } from 'utils/auth';
import { URI } from 'utils/constants';

const handleErrors = (response) =>  {
    if (!response.ok) throw Error(response.statusText);
    return response;
}


export function POST(address, payload, extraHeaders = {}) {
  return fetch(`${URI}${address}`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${token()}`,
      ...extraHeaders,
    },
    method: 'POST',
    body: JSON.stringify(payload),
  }).then(handleErrors).then(r => r.json().then(data => ({ status: r.status, body: data })));
}

export function POST_ONLY(address, payload, extraHeaders = {}) {
  return fetch(`${URI}${address}`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${token()}`,
      ...extraHeaders,
    },
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export function GET(address) {
  return fetch(`${URI}${address}`, {
    headers: {
      Authorization: `Bearer ${token()}`,
    },
    method: 'GET',
  }).then(handleErrors).then(r => r.json().then(data => ({ status: r.status, body: data })));
}

export function GET_CSV(address) {
  return fetch(`${URI}${address}`, {
    headers: {
      Authorization: `Bearer ${token()}`,
      Accept: 'text/csv',
    },
    method: 'GET',
  }).then(r => r.blob().then(blob => ({ status: r.status, blob })));
}

export function GET_EXTERNAL(address) {
  return fetch(address, { method: 'GET' }).then(handleErrors)
    .then(r => r.json().then(data => ({ status: r.status, body: data })));
}

export function PUT(address, payload) {
  return fetch(`${URI}${address}?id=eq.${payload.id}`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${token()}`,
    },
    method: 'PUT',
    body: JSON.stringify(payload),
  }).then(handleErrors).then(r => r.json().then(data => ({ status: r.status, body: data })));
}

export function PATCH(address, payload) {
  let fetchURI = `${URI}${address}?`;
  let body;
  if (payload.keys && typeof payload.keys === 'object') {
    fetchURI = fetchURI.concat(
      Object.entries(payload.keys)
        .map(concept =>
          String(concept[0])
            .concat('=eq.')
            .concat(String(concept[1])),
        )
        .join('&'),
    );
    body = payload.values;
  } else {
    fetchURI = fetchURI.concat(`id=eq.${payload.id}`);
    body = payload;
  }
  return fetch(fetchURI, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${token()}`,
    },
    method: 'PATCH',
    body: JSON.stringify(body),
  }).then(handleErrors).then(r => ({ status: r.status }));
}

export function DELETE(address, payload) {
  return fetch(`${URI}${address}?id=eq.${payload.id}`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${token()}`,
    },
    method: 'DELETE',
    body: JSON.stringify(payload),
  }).then(handleErrors).then(r => r.json().then(data => ({ status: r.status, body: data })));
}

export function DELETE_ONLY(address) {
  return fetch(`${URI}${address}`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${token()}`,
    },
    method: 'DELETE',
  });
}

export function HEAD(address, extraHeaders = {'Prefer': 'count=exact'}) {
  return fetch(`${URI}${address}?limit=10000`, {
    headers: {
      Authorization: `Bearer ${token()}`,
      ...extraHeaders
    },
    method: 'HEAD'
  });
}
