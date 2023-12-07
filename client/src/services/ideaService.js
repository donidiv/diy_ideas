import * as request from "../lib/request";


const base_url = 'http://localhost:3030/jsonstore/ideas';

export const getAll = async () => {
    const result = await request.get(base_url);
    return Object.values(result);
};


export const create = async (ideaData) => {
    
    const result = await request.post(base_url, ideaData);

    return result;
};