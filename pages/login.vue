<template>
  <section class="main">
    <main-head></main-head>
    <div class="main-register">
      <div class="login">
        <h1>Login</h1>
        <div class="form-group mb-20 mt-20">
          <input
            v-model="email"
            type="email"
            name="email"
            class="input-text"
            placeholder="Email Address"
          />
        </div>
        <div class="form-group mb-20">
          <input
            v-model="password"
            type="password"
            name="Password"
            class="input-text"
            placeholder="Password"
          />
        </div>
        <div class="form-group mb-20">
          <button
            type="submit"
            class="btn btn-primary btn-block"
            @click="submit"
          >
            Login
          </button>
        </div>
        <span class="mt-10">
          You don't have an account?
          <a href="/register" class="color2">Register now </a>
        </span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      title: 'Login - Limitoo News',
      email: '',
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
  methods: {
    submit() {
      console.error('object: ', this.email, this.password)
      console.error('object: ', this)
      this.$axios
        .post('/api/v1/user/login', {
          email: this.email,
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
.main {
  width: 100%;
  height: 100%;
}
.main-register {
  width: 400px;
  margin: 100px auto;
}

.login {
  text-align: center;
  margin-top: 50px;
  padding: 20px;
  border: 1px #ccc solid;
  width: 400px;
  height: 350px;
}
</style>
