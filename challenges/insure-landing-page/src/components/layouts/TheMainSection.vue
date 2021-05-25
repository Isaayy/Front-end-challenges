<template>
  <section class="work" id="work">
    <div class="container">
      <Heading color="dark">We're different</Heading>
      <div class="work__cards">
        <Card
          v-for="card in data"
          :key="card.id"
          :source="card.image"
          :label="card.label"
          :desc="card.value"
        />
      </div>
    </div>
  </section>
</template>

<script>
import cardsData from '@/data/data';
import Card from '../Card.vue';

export default {
  name: 'TheMainSection',
  components: {
    Card,
  },
  data() {
    return {
      data: null,
    };
  },
  beforeMount() {
    this.data = cardsData;
  },
};
</script>

<style lang="scss" scoped>
.work {
  margin-top: 40rem;
  margin-bottom: 15rem;
  position: relative;

  .container::before {
    content: '';
    background-color: #ccc;
    width: 15.5rem;
    height: 2px;
    position: absolute;
    top: -3rem;
  }

  &__cards {
    margin-top: 8rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;
  }
}
</style>
