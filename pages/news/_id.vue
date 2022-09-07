<template>
  <section class="main">
    <news-context :detail="list"></news-context>
  </section>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const id = params.id
    if (id) {
      try {
        const [text] = await Promise.all([$axios.get(`/api/v1/news/${id}`)])
        const title = ''
        const content = ''
        const imgsrc = text.src
        const list = text.lists
        console.error('object', text)
        return { list, title, content, imgsrc }
      } catch (e) {
        console.error(e)
      }
    }
  },
  data() {
    return {
      list: {},
      title: '',
      conternt: '',
      imgsrc: '',
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
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
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
