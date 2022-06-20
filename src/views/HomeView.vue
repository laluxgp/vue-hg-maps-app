<template>
  <div class="row-fluid">
    <div class="span12">
      <MapView />
      <TripDetailsVue />
      <div class="row-fluid">
        <div class="span6">
          <SearchBarVue />
        </div>
        <div class="span6">
          <MyLocationBtnVue />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePlacesStore } from "@/composables";
import MapView from '@/components/mapview/MapView.vue';
import MyLocationBtnVue from '@/components/my-location-btn/MyLocationBtn.vue';
import SearchBarVue from '@/components/search-bar/SearchBar.vue';
import TripDetailsVue from '@/components/trip-details/TripDetails.vue';



export default defineComponent({
  name: 'HomeView',
  components: {
    MapView,
    MyLocationBtnVue,
    SearchBarVue,
    TripDetailsVue,
  },
  setup() {
    usePlacesStore();

  }
});
</script>

<style scoped>
</style>
