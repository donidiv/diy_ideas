import * as request from "../lib/request";


const base_url = 'http://localhost:3030/data/ideas';

export const getAll = async () => {
    const result = await request.get(base_url);
    console.log(result);
    return result;
};

export const getOne = async (ideaId) => {
    const result = await request.get(`${base_url}/${ideaId}`);
    return result;
};

export const create = async (ideaData) => {
    
    const result = await request.post(base_url, ideaData);

    return result;
};

export const edit = async (ideaId, ideaData) => {
    const result = await request.put(`${base_url}/${ideaId}`, ideaData);
    return result;
};

export const remove = async (ideaId) => request.remove(`${base_url}/${ideaId}`);