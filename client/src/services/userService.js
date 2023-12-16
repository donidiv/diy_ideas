import * as request from '../lib/request';

const base_url = 'http://localhost:3030/jsonstore/users';

export const create = async (userData) => {
    
    const result = await request.post(base_url, userData);

    return result;
};

export const getAll = async () => {
    const result = await request.get(base_url);
    console.log(result);
    return result;
};

export const getOne = async (userId) => {
    const result = await request.get(`${base_url}/${userId}`);
    return result;
};