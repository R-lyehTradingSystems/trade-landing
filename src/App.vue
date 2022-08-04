<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
:root {
  --main-background: #fff;
  --cta-color: #00a985;
  --secondary-color: #fa7964;
  --color: #333;
}

html {
  scroll-behavior: smooth;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--secondary-color);
  background-color: var(--main-background);
}
</style>
