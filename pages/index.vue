<template>
  <section class="main">
    <main-lists :info="lists"></main-lists>
  </section>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      const lists = await Promise.all([$axios.get('/api/v1/laster')])
      return { lists: lists[0] }
    } catch (e) {
      console.error(e)
    }
  },
  data() {},
}
</script>

<style lang="scss" scoped></style>
