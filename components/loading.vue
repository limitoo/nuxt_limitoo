<template lang="html">
  <div v-if="loading" class="animsition-preloader">
    <div class="utf-spinner-one"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>
<style scoped>
/* [Animsition Loading] */
.animsition-preloader {
  position: fixed;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1da1f2;
  z-index: 99999;
}
.animsition-preloader > div {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.utf-spinner-one {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: transparent;
  border: 5px solid #ffffff;
  border-top-color: #1da1f2;
  animation: 1s spin linear infinite;
}
.utf-spinner-two {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: transparent;
  border: 5px solid transparent;
  border-top: 5px solid #ffffff;
  border-left: 5px solid #ffffff;
  animation: 2s spin linear infinite;
}
.utf-spinner-three {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: transparent;
  border: 5px solid #ffffff;
  border-top-color: #0a0b0b;
  border-bottom-color: #0a0b0b;
  animation: 1s spin linear infinite;
}
.utf-spinner-four {
  width: 50px;
  height: 50px;
  margin: 0;
  background: transparent;
  border-top: 5px solid #ffffff;
  border-right: 5px solid transparent;
  border-radius: 50%;
  animation: 1s spin linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
