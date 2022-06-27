<template>
  <section class="main">
    <div>
      <b-img :src="item.src" fluid alt="Responsive image"></b-img>
    </div>
    <!-- 1. {{detail.src}} -->
    2. {{item.src}}
    <div v-for="(text, index) in item.content" :key="index">
    {{text}}
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
		const id = params.id
		if(id) {
			try {
				const [detail] = await Promise.all([
					$axios.get(`/api/v1/${id}`)
				])
				console.error('first', detail.src)
				return detail
			} catch (e) {
				console.error(e)
			}
		}
  },
  data() {
    return {
      item: this.detail || {}
    }
  },
}
</script>

<style lang="scss" scoped></style>
