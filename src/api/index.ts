import axios from 'axios';
const baseURL = 'https://api-stg.jam-community.com'

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

export const likeSong = async (id, apiKey) => {
    try {
        const response = await api.post(`/interact/like'&${apiKey}`)
        return response;
    } catch (err) {
        console.error(err);
    }
}