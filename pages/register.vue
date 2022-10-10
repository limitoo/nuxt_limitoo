<template>
  <section class="main">
    <main-head></main-head>
    <div class="main-register">
      <div class="login">
        <h1>Register</h1>
        <div class="form-group mb-20 mt-20">
          <input
            v-model="username"
            class="input-text"
            placeholder="Input user name"
          />
        </div>
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
            Register
          </button>
        </div>
        <span class="ml-2">
          You have an account?
          <a href="/login" class="color2"> Login here </a>
        </span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      title: 'Contact Limitoo News',
      username: '',
      password: '',
      email: '',
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
      this.$axios
        .post('/api/v1/register', {
          email: this.email,
          username: this.username,
          password: this.password,
        })
        .then((result) => {
          console.error('object', result)
          if (result.data.code === 0) {
            this.$notify({
              title: 'Success',
              message: 'Register is success!',
              type: 'success',
            })
          }
          if (result.data.code === 500) {
            this.$notify({
              title: 'Warning',
              message: 'You are already registered.',
              type: 'warning',
            })
          }
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
  height: 380px;
}
</style>
