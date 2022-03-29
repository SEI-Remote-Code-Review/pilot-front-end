import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/locations`

function create(location) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`
  },
    body: location
  })
  .then(res => res.json())
}

function createComment(location, comment) {
  return fetch(`${BASE_URL}/${location}/comments`, {
    method: 'POST',
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`, 
    'content-type': 'application/json'},
    body: JSON.stringify(comment)
  })
  .then(res => res.json())
}

function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json())
}

function getLocation(name) {
  //  new Map('MyMap')
  return fetch (`/api/locations/${name}`)
  .then(res => res.json)
}

function update(location) {
  console.log('this is the url in location services update', BASE_URL, location._id)
  return fetch(`${BASE_URL}/${location._id}`, {
    method: 'PUT',
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`, 
    'content-type': 'application/json'},
    body: JSON.stringify(location)
  })
  .then(res => res.json())
}

function show(location, comment) {
  return fetch(`${BASE_URL}/${location}/comments`, {
    method: 'GET',
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`, 
    'content-type': 'application/json'},
  })
  .then(res => res.json())
}

function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  .then(res => res.json())
}

export {
  create,
  getAll,
  getLocation,
  update,
  createComment,
  show,
  deleteOne
}