import * as request from '../lib/request';

const base_url = 'http://localhost:3030/jsonstore/comments';



export const getAll = async (ideaId) => {
    
    const query = new URLSearchParams({
        where: `ideaId='${ideaId}'`
    });

    const result = await request.get(base_url);
    
    //TODO: temp solution until migration to collections service
    return Object.values(result).filter(comment => comment.ideaId === ideaId);

};


export const create = async (ideaId, username, text) => {
    const newComment = await request.post(base_url, {
        ideaId,
        username,
        text,
    });
    return newComment;
};