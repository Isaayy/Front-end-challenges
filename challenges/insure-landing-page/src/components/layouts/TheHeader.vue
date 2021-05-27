<template>
  <div class="container">
    <header class="header">
      <div class="header__logo">
        <img src="@/assets/images/logo.svg" alt="logo" />
      </div>
      <nav class="header__nav">
        <ul>
          <li><a href="#">How we work</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Account</a></li>
          <li><Button color="dark">View plans</Button></li>
        </ul>
        <a href="#" class="hamburger" @click="hamburgerActive = !hamburgerActive">
          <span class="hamburger__box">
            <span class="hamburger__bar" :class="{ active: hamburgerActive }"></span>
          </span>
        </a>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      hamburgerActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins.scss';

.header {
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__nav ul {
    @include respond(tab-small) {
      display: none;
    }

    display: flex;
    gap: 3rem;
    list-style: none;
    align-items: center;

    a {
      text-decoration: none;
      font-size: 1.6rem;
      font-family: var(--font-body);
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--dark-grayish-violet);

      &:hover {
        color: var(--very-dark-violet);
      }
    }
  }
}

@mixin hamburger-bars {
  width: 100%;
  height: 0.3rem;
  position: absolute;
  background-color: var(--very-dark-violet);
}

.hamburger {
  display: none;
  padding: 1rem;
  cursor: pointer;
  border: 2px solid var(--very-dark-violet);

  @include respond(tab-small) {
    display: inline-block;
  }

  &__box {
    width: 2.5rem;
    height: 2rem;
    display: inline-block;
    position: relative;
  }

  &__bar {
    @include hamburger-bars;

    top: 50%;
    transform: translateY(-50%);
    transition: background-color 0.3s 0.1s ease-in-out;

    &::before,
    &::after {
      @include hamburger-bars;

      content: '';
      left: 0;
      transition: transform 0.3s ease-in-out;
    }

    &::before {
      top: -0.7rem;
    }

    &::after {
      top: 0.7rem;
    }
  }
}

.active {
  background-color: transparent;
  transition: background-color 0.1s ease-in-out;

  &::before {
    transform: translatey(0.7rem) rotate(45deg);
  }
  &::after {
    transform: translatey(-0.7rem) rotate(-45deg);
  }
}
</style>
