<template>
  <div class="app" :class="[mode === 'dark' ? 'dark' : 'light']">
    <div class="container">
      <header class="header">
        <h1 class="heading">Social media dashboard</h1>
        <p class="description">Total followers : 23,004</p>
        <div class="header__toggle">
          <p class="description">dark mode</p>
        </div>
      </header>
      <main>
        *card* <br />
        *card*
      </main>
    </div>

    <div class="bg bg--top"></div>
    <div class="bg bg--bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      mode: 'dark',
    };
  },
};
</script>

<style lang="scss" scoped>
.app {
  height: 100vh;
  position: relative;
}

.container {
  max-width: 144rem;
  border: 1px solid gold;
  margin: 0 auto;
  padding: 4rem 16.5rem 7.5rem;
}

.header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr max-content;
  grid-row-gap: 0.5rem;

  &__toggle {
    grid-row: 1/3;
    grid-column: 2/3;
    align-self: center;
    justify-self: end;
  }
}

.heading {
  font-size: 2.4rem;
  color: var(--font-color-primary);
}

.description {
  font-size: 1.4rem;
  color: var(--font-color-secondary);
  font-weight: bold;
}

.dark {
  --bg-color-top: var(--very-dark-blue-top);
  --bg-color: var(--very-dark-blue);
  --font-color-primary: var(--white);
  --font-color-secondary: var(--desaturated-blue);
}

.light {
  --bg-color-top: var(--very-pale-blue);
  --bg-color: var(--white);
  --font-color-primary: var(--very-dark-blue);
  --font-color-secondary: var(--dark-grayish-blue);
}

.bg {
  width: 100%;
  position: absolute;
  z-index: -2;

  &--top {
    background-color: var(--bg-color-top);
    height: 25%;
    top: 0;
  }

  &--bottom {
    background-color: var(--bg-color);
    height: 75%;
    top: 25%;
  }
}
</style>
