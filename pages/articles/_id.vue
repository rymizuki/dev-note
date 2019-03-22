<template>
  <main>
    <article v-if="entry" class="article">
      <h1>{{entry.subject}}</h1>
      <div v-html="$md.render(entry.body)"></div>
      <footer>
        <div class="published">
          <time>{{entry.created_at}}</time>
        </div>
      </footer>
    </article>
  </main>
</template>

<script>
export default {
  computed: {
    entry() {
      return this.$store.getters.getEntry()
    }
  },
  async created() {
    const { id } = this.$route.params
    this.$store.dispatch('fetchEntry', id)
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/foundation.styl';

.article {
  padding: 4px 8px;
  background: $color-white;
  color: $color-black;
}
</style>
