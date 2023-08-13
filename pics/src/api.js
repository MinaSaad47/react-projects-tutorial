import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 7iw-Fb6G4CoOL2ZsCg6udHvA0oMkzcdU5fHK1e1moSs'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
};

export { searchImages };