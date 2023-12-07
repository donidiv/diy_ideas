import * as request from '../lib/request';

const base_url = 'http://localhost:3030/jsonstore/comments';

export const create = async (ideaId, username, text) => {
    const newComment = await request.post(base_url, {
        ideaId,
        username,
        text,
    });
    return newComment;
};