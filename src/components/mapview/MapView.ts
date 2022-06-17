import { usePlacesStore, useMapStore } from '@/composables';
import { defineComponent, onMounted, ref, watch } from 'vue';
import Mapboxgl from 'mapbox-gl';

export default defineComponent({
    name: 'MapView',
    setup() {
        /* const { isLoading, userLocation, isUserLocationReady } = usePlacesStore(); */
        const { userLocation, isUserLocationReady } = usePlacesStore();
        const mapElement = ref<HTMLDivElement>();
        const { setMap } = useMapStore();

        const initMap = async () => {
            if (!mapElement.value) throw new Error("Div Element no existe");
            if (!userLocation.value) throw new Error("User Location no existe");

            await Promise.resolve();
            
            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL streets-v11 light-v10
                center: userLocation.value, //[-74.5, 40], // starting position [lng, lat]
                zoom: 12 // starting zoom,
            });

            // Add geolocate control to the map.
            /* map.addControl(
                new Mapboxgl.GeolocateControl({
                positionOptions: {
                enableHighAccuracy: true
                },
                // When active the map will receive updates to the device's location as it changes.
                trackUserLocation: true,
                // Draw an arrow next to the location dot to indicate which direction the device is heading.
                showUserHeading: true
                })
            ); */

            // Add zoom and rotation controls to the map.
            /* map.addControl(new Mapboxgl.NavigationControl()); */

            const myLocationPopup = new Mapboxgl.Popup()
                .setLngLat(userLocation.value)
                .setHTML(`
                    <h4>Aquí estoy</h4>
                    <p>Actualmente en CDMX</p>
                `)

            const myLocationMarket = new Mapboxgl.Marker()
                .setLngLat(userLocation.value)
                .setPopup(myLocationPopup)
                .addTo(map);
            
            
            // TODO establecer el mapa en vuex
            setMap(map);

        }

        onMounted(() => {
            /* console.log(mapElement.value); */
            if (isUserLocationReady.value) return initMap();

            console.log("No tengo localización todavía");
        });

        watch( isUserLocationReady, (newVal) => {
            if (isUserLocationReady.value) {
                initMap();
            }
        });

        return {
            /* isLoading,
            userLocation, */
            isUserLocationReady,
            mapElement
        }
    },
})