<template>
  <main>
    <div v-if="entries" class="entries">
      <div v-for="entry in entries.rows" :key="entry.id">
        <nuxt-link :to="{ name: 'articles-id', params: { id: entry.id } }" class="entry">
          <h3 class="subject">{{entry.subject}}</h3>
          <p class="headline">{{entry.headline}}</p>
          <div class="published">
            <time>{{entry.created_at}}</time>
          </div>
        </nuxt-link>
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

<style lang="stylus" scoped>
.entries {
  padding: 8px 0;

  .entry {
    display: block;
    margin: 0 0 10px;
    padding: 4px 8px;
    border: 1px solid #ccc;
    border-radius: 2px;
    background: $color-black;
    color: $color-white;
    text-decoration: none;
    font-size: 12px;

    .subject {
    }

    .headline {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .published {
      text-align: right;
    }
  }
}
</style>
