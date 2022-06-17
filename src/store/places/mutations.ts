import { Feature } from '@/interfaces/places';
import { MutationTree } from 'vuex';
import { PlacesState } from './state';

const mutation: MutationTree<PlacesState> = {
    //someMutation( /* state: PlacesState */) {
        // a line to prevent linter errors
    //}
    /* setLngLat(state: PlacesState, coords) { */
    setLngLat(state: PlacesState, { lng, lat }: { lng: number, lat: number }) {
        /* state.userLocation = coords; */
        state.userLocation = [ lng, lat ];
        state.isLoading = false;
    },

    setIsLoadingPlaces(state) {
        state.isLoadingPlaces = true;
    },

    setPlaces(state, places: Feature[]) {
        state.places = places;
        state.isLoadingPlaces = false;
    }

}


export default mutation;