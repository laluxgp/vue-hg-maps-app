import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoibGFsdXhncCIsImEiOiJjbDRkN2Y3ZjkwMHQ5M2RtbmF3eXRvc2NzIn0.nuEo__XHVqv20TRWA2-BPQ'
    }
})

export default searchApi;