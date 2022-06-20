<template>
    <div v-if="isLoadingPlaces" class="alert alert-primary text-center mt-3">
        <h5>Cargando</h5>
        <span>Espere por favor...</span>
    </div>
    <div v-else class="list-group mt-3">
        <a href="#" v-for="(place, index) in places" :key="index" class="list-group-item list-group-item-action"
            :class="{ 'active': place.id === activePlaceId }" aria-current="true" @click="onPlaceClicked(place)">
            <div class="d-flex w-10 justify-content-between">
                <h5 class="mb-1">{{ place.text }}</h5>
            </div>
            <p>
                <small>{{ place.place_name }}</small>
            </p>
            <div align="right">
                <button class="btn btn-outline-primary btn-sm"
                    :class="(place.id === activePlaceId) ? 'btn-outline-light' : 'btn-outline-dark'"
                    @click.self="getRouteDirections(place)">Direcciones</button>
            </div>
        </a>
    </div>
</template>

<script lang="ts" src="./SearchResults.ts" />

<style scoped>
h5 {
    font-size: 18px !important;
}

p {
    font-size: smaller;
}

/* Landscape phones and down */
@media (max-width: 480px) {
    h5 {
        font-size: 12px !important;
        font-weight: 600;
        color: rgb(49, 46, 46);
    }
}
</style>