<template>
  <section class="main">
    <main-head></main-head>
    <section class="main">
      <h1>Login</h1>
      <div class="form-group">
        <input
          v-model="username"
          type="email"
          name="email"
          class="input-text"
          placeholder="Email Address"
        />
      </div>
      <div class="form-group">
        <input
          v-model="password"
          type="password"
          name="Password"
          class="input-text"
          placeholder="Password"
        />
      </div>
      <div class="form-group mb-0">
        <button type="submit" class="btn btn-primary btn-block" @click="submit">
          Login
        </button>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  data() {
    return {
      title: 'Contact Limitoo News',
      username: '',
      password: '',
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
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
  methods: {
    submit() {
      console.error('object: ', this.username, this.password)
      console.error('object: ', this)
      this.$axios
        .post('/api/user/register', {
          username: this.username,
          password: this.password,
        })
        .then((result) => {
          console.error('object', result)
        })
        .catch((err) => {
          return err
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.main-about {
  height: 100%;
  width: 100%;
}
</style>
