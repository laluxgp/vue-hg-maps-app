import { createStore } from 'vuex'

/* export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
}) */

// My custom modules
import placesModule from './places';
import { PlacesState } from './places/state';

import mapModule from './map';
import { MapState } from './map/state';

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: PlacesState;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  /* example: PlacesState */
  places: PlacesState,
  map: MapState
}

export default createStore<StateInterface>({
  modules: {
    // example: placesModule
    places: placesModule,
    map: mapModule
  }
});