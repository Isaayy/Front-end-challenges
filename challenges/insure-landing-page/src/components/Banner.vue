<template>
  <div class="container">
    <div class="banner">
      <Heading>Find out more about how we work</Heading>
      <Button>How we work</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins.scss';

.banner {
  padding: 8rem;
  margin-bottom: 15rem;

  background: url('../assets/images/bg-pattern-how-we-work-desktop.svg') right top no-repeat;
  background-color: var(--dark-violet);

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  @include respond(tab-big) {
    background-image: url('../assets/images/bg-pattern-how-we-work-mobile.svg');
    flex-direction: column;
    gap: 4.5rem;
  }

  h1 {
    max-width: 53rem;
  }
}
</style>
