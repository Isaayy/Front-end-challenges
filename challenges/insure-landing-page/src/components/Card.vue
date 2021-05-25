<template>
  <div class="card">
    <img :src="source" alt="icon" class="card__icon" />
    <h2 class="card__label">{{ label }}</h2>
    <p class="card__value">{{ desc }}</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    source: String,
    label: String,
    desc: String,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins.scss';

.card {
  @include respond(tab-small) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__icon {
    width: 6.5rem;
    height: 6.5rem;
  }

  &__label {
    font-size: 2.4rem;
    font-family: var(--font-heading);
    color: var(--very-dark-violet);

    margin-top: 2rem;
    margin-bottom: 1rem;

    @include respond(mobile) {
      font-size: 2.2rem;
    }
  }

  &__value {
    font-size: 1.6rem;
    font-family: var(--font-body);
    color: var(--dark-grayish-violet);

    @include respond(tab-small) {
      text-align: center;
      max-width: 45rem;
    }
  }
}
</style>
