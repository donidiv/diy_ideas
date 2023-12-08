import * as request from '../lib/request';

const base_url = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const result = await request.post(`${base_url}/login`, {
        email,
        password
    });
    return result;
};