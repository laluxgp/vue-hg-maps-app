import { useMapStore, usePlacesStore } from "@/composables";
import { Feature } from "@/interfaces/places";
import { defineComponent, ref, watch } from "vue";

export default defineComponent ({
    name: "SearchResults",
    setup() {

        const {isLoadingPlaces, places, userLocation} = usePlacesStore();
        const {map, setPlaceMarkers, getRouteBetweenPoints} = useMapStore();
        const activePlaceId = ref('');

        watch(places, (newPlaces) => {
            setPlaceMarkers(newPlaces);
        });


        return {
            isLoadingPlaces,
            places,
            activePlaceId,

            onPlaceClicked: (place: Feature) => {

                const [lng, lat] = place.center;

                activePlaceId.value = place.id;

                map.value?.flyTo({
                    center: [lng, lat],
                    zoom: 14
                });
            },

            getRouteDirections: (place: Feature) => {
                if(!userLocation.value) return;

                const [lng, lat] = place.center;

                const [startLng, startLat] = userLocation.value;
                
                const start: [number, number]= [startLng, startLat];
                const end: [number, number] = [lng, lat];

                getRouteBetweenPoints(start, end);
            }

        }
    }
});