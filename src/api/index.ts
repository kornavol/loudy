import axios from 'axios';
const baseURL = 'https://api-stg.jam-community.com'
const apiKey = "___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8"

const api = axios.create({
    baseURL
});

export const loadSongs = async () => {
    try {
        const response = await api.get('/song/trending')
        return response;
    } catch (err) {
        console.error(err);
    }
}

export const likeSong = async (payload) => {
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    const params = new URLSearchParams()
    params.append('id', payload)

    try {
        const response = await api.post(`/interact/like?apikey=${apiKey}`, params, config)
        return response;
    } catch (err) {
        console.error(err);
    }
}