<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
  <img src="./assets/logo.png" alt="Vue Logo" class="logo">
</template>

<style>
#app {
  font-family: Roboto, Avenir, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.logo {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 100px;
}
/* Landscape phones and down */
@media (max-width: 480px) {
    .logo {
      width: 60px;
    }
}
</style>
