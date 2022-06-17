import axios from "axios";

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoibGFsdXhncCIsImEiOiJjbDRkN2Y3ZjkwMHQ5M2RtbmF3eXRvc2NzIn0.nuEo__XHVqv20TRWA2-BPQ'
    }
})

export default directionsApi;