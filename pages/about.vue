<template>
  <section class="main-about">
    <main-head></main-head>
    <div>
      <h1>About</h1>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      title: 'About Limitoo News',
    }
  },
  head() {
    return {
      title: this.title,
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
}
</script>

<style lang="scss" scoped>
.main-about {
  height: 100%;
  width: 100%;
}
</style>
