<template>
  <div class="container">
    <TheHeader />
  </div>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">
@import './assets/styles/variables.css';

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
}

.container {
  max-width: 144rem;
  margin: 0 auto;
  border: 2px solid gold;
}
</style>
