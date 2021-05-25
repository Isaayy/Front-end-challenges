<template>
  <h1 class="heading" :class="[isDark ? 'heading-dark' : '']">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: 'VHeading',
  props: {
    color: String,
  },
  computed: {
    isDark() {
      return this.color === 'dark';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins.scss';

.heading {
  color: var(--very-light-gray);
  font-size: 5.4rem;
  font-family: var(--font-heading);
  letter-spacing: 3px;
  max-width: 42rem;
  line-height: 5rem;

  @include respond(tab-big) {
    text-align: center;
    max-width: none;
  }

  @include respond(mobile) {
    font-size: 4rem;
  }
}

.heading-dark {
  color: var(--very-dark-violet);
}
</style>
