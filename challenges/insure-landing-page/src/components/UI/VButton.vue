<template>
  <button class="button" :class="[isDark ? 'button-dark' : '']">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'VButton',
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
.button {
  font-size: 1.6rem;
  font-family: var(--font-body);
  padding: 1.4rem 2.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--very-light-gray);
  border: 2px solid var(--very-light-gray);
  font-weight: bold;
  background: none;
}

.button-dark {
  color: var(--very-dark-violet);
  border: 2px solid var(--very-dark-violet);
}
</style>
