<template>
  <div class="page">
    <header class="page__header">
      <h1>dev-note</h1>
    </header>
    <div class="page__body">
      <nuxt/>
    </div>
  </div>
</template>

<style lang="stylus">
@import '../assets/styles/reset';

html {
  font-size: 16px;
  font-family: 'M PLUS Rounded 1c';
}

body {
  height: 100%;
  background: #303030;
}

.page {
  padding: 0 8px;

  .page__header {
    color: #F5F5F5;
  }

  .page__body {
  }
}
</style>
