<template>
  <main>
    <article v-if="entry">
      <h1>{{entry.subject}}</h1>
      <div v-html="$md.render(entry.body)"></div>
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

