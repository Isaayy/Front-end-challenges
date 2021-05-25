<template>
  <div class="container">
    <TheHeader />
  </div>
  <TheLandingPage />
  <TheMainSection />
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheLandingPage from './components/layouts/TheLandingPage.vue';
import TheMainSection from './components/layouts/TheMainSection.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheLandingPage,
    TheMainSection,
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
  max-width: 112rem;
  margin: 0 auto;
  position: relative;
}
</style>
