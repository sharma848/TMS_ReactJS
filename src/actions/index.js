import axios from 'axios';

export const FETCH_DATA = 'fetch_data';

const ROOT_URL = 'http://localhost:1337/172.23.36.197:8080';//http://192.168.43.3:3000/

export function fetchLoginData(username, password) {
    const params = {
        username: username,
        password: password
    };
    const request = axios.post(`${ROOT_URL}/tms/login`, params);

    return {
        type: FETCH_DATA,
        payload: request
    };
}

export function registerUser(data) {
    const params = {
        firstname: data.firstName,
        lastname: data.lastName,
        username: data.userName,
        password: data.password,
        address: data.address,
        email: data.email
    };

    const request = axios.post(`${ROOT_URL}/tms/register`, params);

    return {
        type: FETCH_DATA,
        payload: request
    };
}