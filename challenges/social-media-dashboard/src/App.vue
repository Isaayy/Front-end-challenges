<template>
  <Main />
</template>

<script>
import Main from './components/Main.vue';

export default {
  name: 'App',
  components: { Main },
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
}
</style>
