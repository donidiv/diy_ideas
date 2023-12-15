import * as request from '../lib/request';

const base_url = 'http://localhost:3030/jsonstore/users';

export const create = async (userData) => {
    
    const result = await request.post(base_url, userData);

    return result;
};