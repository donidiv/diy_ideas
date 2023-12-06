const base_url = 'http://localhost:3030/jsonstore';

export const create = async (ideaData) => {
    const response = await fetch(`${base_url}/ideas`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(ideaData)
    });

    const result = await response.json();

    return result;
};