<template>
  <section class="main">
    <main-lists :info="lists" :hots="hots"></main-lists>
  </section>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      const [lists, hots] = await Promise.all([
        $axios.get('/api/v1/laster'),
        $axios.get('/api/v1/hot'),
      ])
      return { lists, hots }
    } catch (e) {
      console.error(e)
    }
  },
  data() {},
}
</script>

<style lang="scss" scoped></style>
