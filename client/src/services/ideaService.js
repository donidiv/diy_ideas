const base_url = 'http://localhost:3030/jsonstore';

export const create = async (gameData) => {
    const response = await fetch(`${base_url}/ideas`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(gameData)
    });

    const result = await response.json();

    return result;
};