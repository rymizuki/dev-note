<template>
  <main>
    <h1>dev-note</h1>
    <div v-if="entries">
      <div v-for="entry in entries.rows" :key="entry.id">
        <nuxt-link :to="{ name: 'articles-id', params: { id: entry.id } }">{{entry.subject}}</nuxt-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    entries() {
      return this.$store.getters.getEntries()
    }
  },
  async created() {
    this.$store.dispatch('fetchEntries')
  }
}
</script>
