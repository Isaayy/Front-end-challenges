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
.heading {
  color: var(--very-light-gray);
  font-size: 5.2rem;
  font-family: var(--font-heading);
  letter-spacing: 3px;
  line-height: 5rem;
}

.heading-dark {
  color: var(--very-dark-violet);
}
</style>
