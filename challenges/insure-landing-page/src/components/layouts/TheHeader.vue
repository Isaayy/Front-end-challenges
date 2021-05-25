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
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

<style lang="scss" scoped>
.header {
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__nav ul {
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
</style>
