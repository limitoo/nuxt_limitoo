<template>
  <section class="main">
    <main-head></main-head>
    <news-context :detail="list" :info="info"></news-context>
  </section>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const id = params.id
    if (id) {
      try {
        const [one, ret] = await Promise.all([
          $axios.get(`/api/v1/indexOne/${id}`),
          $axios.get(`/api/v1/news/${id}`),
        ])
        const list = ret.data.lists
        const info = one.data.lists
        return { list, info }
      } catch (e) {
        console.error(e)
      }
    }
  },
  data() {
    return {
      list: {},
      info: {},
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.content,
        },
      ],
    }
  },
  methods: {
    errorRNZimg(item) {
      const { src, source } = item
      let url = src
      const website = 'https://www.rnz.co.nz'
      const img = 'https://rnz-ressh.cloudinary.com/'
      if (source === 'rnz') {
        const str = url.includes(img)
        const web = url.includes(website)
        if (str && web) {
          const num = website.length
          url = url.slice(num)
        }
      }
      return url
    },
  },
}
</script>

<style lang="scss" scoped></style>
