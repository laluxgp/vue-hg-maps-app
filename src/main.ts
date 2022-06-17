import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoibGFsdXhncCIsImEiOiJjbDRkN2Y3ZjkwMHQ5M2RtbmF3eXRvc2NzIn0.nuEo__XHVqv20TRWA2-BPQ';

if (!navigator.geolocation) {
    throw new Error("Tu navegador no soporta el GeoLocation");
}

createApp(App).use(store).use(router).mount('#app')
