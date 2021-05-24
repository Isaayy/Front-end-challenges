<template>
  <main class="main">
    <div class="container">
      <div class="main__content">
        <Heading>Humanizing your insurance.</Heading>
        <Description>
          Get your life insurance coverage easier and faster. We blend our expertise and technology
          to help you find the plan that’s right for you. Ensure you and your loved ones are
          protected.
        </Description>
        <Button>View plans</Button>
      </div>
      <div class="main__img">
        <img src="@/assets/images/image-intro-desktop.jpg" alt="image" />
      </div>
    </div>
    <img src="@/assets/images/bg-pattern-intro-right-desktop.svg" alt="pattern" class="pattern" />
  </main>
</template>

<script>
export default {
  name: 'TheLandingPage',
};
</script>

<style lang="scss" scoped>
.main {
  padding: 10rem 0;
  background-color: var(--dark-violet);
  position: relative;

  .container {
    display: flex;
    gap: 3rem;
  }

  &__content {
    max-width: 55rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: flex-start;

    &::before {
      content: '';
      background-color: var(--very-light-gray);
      width: 15.5rem;
      height: 2px;
    }
  }

  &__img {
    position: relative;
    flex: 1;

    img {
      position: absolute;
      width: 100%;
    }
  }
}

.pattern {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
