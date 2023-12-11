import * as request from '../lib/request';

const base_url = 'http://localhost:3030/data/comments';



export const getAll = async (ideaId) => {
    
    const query = new URLSearchParams({
        where: `ideaId="${ideaId}"`
    });

    const result = await request.get(`${base_url}?${query}`);
    
    return result;

};


export const create = async (ideaId, username, text) => {
    const newComment = await request.post(base_url, {
        ideaId,
        username,
        text,
    });
    return newComment;
};