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
        <img
          src="@/assets/images/bg-pattern-intro-left-mobile.svg"
          alt="pattern"
          class="pattern-mobile pattern-mobile--left"
        />
      </div>
      <div class="main__img">
        <img src="@/assets/images/image-intro-desktop.jpg" alt="image" />
      </div>
    </div>
    <img
      src="@/assets/images/bg-pattern-intro-right-desktop.svg"
      alt="pattern"
      class="pattern-desktop"
    />
    <img
      src="@/assets/images/bg-pattern-intro-right-mobile.svg"
      alt="pattern"
      class="pattern-mobile pattern-mobile--right"
    />
  </main>
</template>

<script>
export default {
  name: 'TheLandingPage',
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins.scss';

.main {
  padding: 10rem 0;
  background-color: var(--dark-violet);
  position: relative;
  z-index: 0;

  @include respond(tab-big) {
    padding-top: 0;
  }

  .container {
    display: flex;
    gap: 3rem;

    @include respond(tab-big) {
      flex-direction: column-reverse;
      align-items: center;
      gap: 7rem;
      padding: 0;
    }
  }

  &__content {
    max-width: 55rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: flex-start;

    @include respond(tab-big) {
      align-items: center;
      padding: 0 3rem;
      position: relative;
      &::before {
        display: none;
      }
    }

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

    @include respond(tab-big) {
      width: 100%;
    }

    img {
      position: absolute;
      max-width: 100%;
      z-index: 10;

      @include respond(tab-big) {
        position: relative;
        width: 100%;
      }
    }
  }
}

.pattern-mobile {
  position: absolute;
  display: none;
  z-index: -1;

  &--right {
    right: 0;
    bottom: -15rem;
  }

  &--left {
    left: -1rem;
    top: -7rem;
  }

  @include respond(mobile) {
    display: block;
  }
}

.pattern-desktop {
  position: absolute;
  top: 0;
  right: 0;

  @include respond(tab-big) {
    display: none;
  }
}
</style>
