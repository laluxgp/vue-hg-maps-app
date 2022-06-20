<template>
    <button v-if="isBtnReady" class="btn btn-primary" @click="onMyLocationClicked">
        Ir a mi ubicación
    </button>
</template>

<script lang="ts">
import { useMapStore, usePlacesStore } from '@/composables'
import { computed, defineComponent } from 'vue'

export default defineComponent({
    name: "MyLocationBtn",
    setup() {
        const { userLocation, isUserLocationReady } = usePlacesStore();
        const { map, isMapReady } = useMapStore();


        return {

            isBtnReady: computed<boolean>(() => isUserLocationReady.value && isMapReady.value),

            onMyLocationClicked: () => {
                map.value?.flyTo({
                    center: userLocation.value,
                    zoom: 14
                });
            }

        }
    },
})
</script>


<style scoped>
button {
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
    position: fixed;
    right: 30px;
    top: 30px;
}

/* Landscape phones and down */
@media (max-width: 480px) {
    button {
        bottom: 140px;
        right: 16px;
        top: auto;
    }
}
</style>