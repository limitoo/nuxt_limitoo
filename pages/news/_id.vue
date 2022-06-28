<template>
  <section class="main">
    <news-context :detail="text"></news-context>
  </section>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const id = params.id
    if (id) {
      try {
        const [text] = await Promise.all([$axios.get(`/api/v1/${id}`)])
        return { text }
      } catch (e) {
        console.error(e)
      }
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
