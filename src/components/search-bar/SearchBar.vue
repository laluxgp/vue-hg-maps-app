<template>
    <div class="searchbar-container">
        <input class="form-control-sm" v-model="searchTerm" type="text" placeholder="Buscar lugares...">
        <SearchResults />
    </div>
</template>

<script lang="ts" src="./SearchBar.ts" />

<style scoped>
.searchbar-container {
    position: fixed;
    top: 30px;
    left: 30px;
    background-color: white;
    z-index: 999;
    box-shadow: 0 5px 10px rgb(0, 0, 0, 0.2);
    border-radius: 10px !important;
    overflow: hidden;
    padding: 5px;
    width: 250px;
}
</style>