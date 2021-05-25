<template>
  <p class="desc" :class="[isDark ? 'desc-dark' : '']">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: 'VDescription',
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

.desc {
  font-size: 1.6rem;
  font-family: var(--font-body);
  color: var(--very-light-gray);

  @include respond(tab-big) {
    text-align: center;
  }
}

.desc-dark {
  color: var(--very-dark-violet);
}
</style>
