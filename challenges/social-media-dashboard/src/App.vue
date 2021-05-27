<template>
  <h1>app</h1>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style lang="scss">
@import './assets/abstracts/variables.css';

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  font-family: 'Inter', sans-serif;
  font-size: 1.4rem;
}
</style>
