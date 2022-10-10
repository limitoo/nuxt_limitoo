<template>
  <section class="main">
    <main-head></main-head>
    <main-lists :items="lists" :hots="hots"></main-lists>
  </section>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      const [lists, hots] = await Promise.all([
        $axios.get('/api/v1/indexlists'),
        $axios.get('/api/v1/indexlists'),
      ])
      const total = lists.data.totalCount
      return { lists, hots, total }
    } catch (e) {
      console.error(e)
    }
  },
  data() {
    return {
      lists: [],
      hots: [],
      total: 0,
    }
  },
  head() {
    return {
      title: 'The Limitoo News',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'The Limitoo news is global news, entertainment, and life website. It will extract hot news from professional news websites in various countries. Let you watch the news of various countries at any time. visit: https://limitoo.com',
        },
      ],
    }
  },
  mounted() {
    console.error('object', this.lists)
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 100)
    })
  },
}
</script>

<style lang="scss" scoped></style>
