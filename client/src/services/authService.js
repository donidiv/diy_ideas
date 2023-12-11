import * as request from '../lib/request';

const base_url = 'http://localhost:3030/users';

export const login = async (email, password,) => {
    const result = await request.post(`${base_url}/login`, {
        email,
        password
    });
    return result;
};

export const register = (email, password, username) => request.post(`${base_url}/register`, {
    email,
    password,
    username
});

export const logout = () => request.get(`${base_url}/logout`);
