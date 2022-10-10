<template>
  <section class="main">
    <main-head></main-head>
    <news-context :detail="list" :info="info"></news-context>
  </section>
</template>

<script>
import { createSEOMeta } from '~/utils/seo'
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
        return { list, info, id }
      } catch (e) {
        console.error(e)
      }
    }
  },
  data() {
    return {
      list: {},
      info: {},
      id: 0,
    }
  },
  head() {
    return {
      title: `${this.info.title} - The Limitoo News`,
      meta: [
        ...createSEOMeta({
          title: `${this.info.title} - The Limitoo News`,
          description: this.info.description,
          image: this.info.img_url,
          url: `https://limitoo.com/news/${this.id}`,
        }),
      ],
    }
  },
  mounted() {
    console.error('object', this.list, this.info)
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
