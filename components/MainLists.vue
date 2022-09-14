<template>
  <div v-if="laster && laster.length > 0">
    <div class="height50"></div>
    <!--main content-->
    <div class="main_content sidebar_right pb-50">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12">
            <div class="loop-list loop-list-1">
              <article v-for="item in laster" :key="item.id" class="row mb-50">
                <div class="col-md-6">
                  <div class="post-thumb position-relative thumb-overlay mr-20">
                    <div
                      class="img-hover-slide border-radius-5 position-relative"
                      :style="`background-image: url(${errorRNZimg(item)})`"
                    >
                      <a class="img-link" href="single.html"></a>
                      <span class="top-right-icon background8"
                        ><i class="mdi mdi-flash-on"></i
                      ></span>
                    </div>
                    <ul class="social-share">
                      <li>
                        <a href="#"><i class="ti-sharethis"></i></a>
                      </li>
                      <li>
                        <a
                          class="fb"
                          href="#"
                          title="Share on Facebook"
                          target="_blank"
                          ><i class="ti-facebook"></i
                        ></a>
                      </li>
                      <li>
                        <a class="tw" href="#" target="_blank" title="Tweet now"
                          ><i class="ti-twitter-alt"></i
                        ></a>
                      </li>
                      <li>
                        <a class="pt" href="#" target="_blank" title="Pin it"
                          ><i class="ti-pinterest"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6 align-center-vertical">
                  <div class="post-content">
                    <div class="entry-meta meta-0 font-small mb-15">
                      <a href="category.html">
                        <span class="post-cat background2 color-white">
                          {{ item.menu }}
                        </span>
                      </a>
                    </div>
                    <h4 class="post-title">
                      <nuxt-link :to="'/news/' + item.id">{{
                        item.title
                      }}</nuxt-link>
                    </h4>
                    <div
                      class="entry-meta meta-1 font-small color-grey mt-15 mb-15"
                    >
                      <span class="post-on"
                        ><i class="ti-marker-alt"></i
                        >{{ item.create_time | prettyDate }}</span
                      >
                      <span class="time-reading"
                        ><i class="ti-timer"></i>10 mins read</span
                      >
                      <span class="hit-count"
                        ><i class="ti-bolt"></i
                        >{{ Math.floor(Math.random() * (100 - 1) + 1) }}k
                        Views</span
                      >
                    </div>
                    <p class="font-medium">
                      {{ item.description }}
                    </p>
                    <nuxt-link :to="'/news/' + item.id">
                      <div
                        class="readmore-btn font-small text-uppercase font-weight-ultra"
                      >
                        Read More
                        <i class="ti-arrow-right ml-5 transition-02s"></i>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-12 col-sm-12 primary-sidebar sticky-sidebar"
          >
            <right-lists :right-lists="hotlists"></right-lists>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainLaster',
  props: {
    items: {
      type: Object,
      default() {
        return {}
      },
    },
    // hots: {
    //   type: Array,
    //   default() {
    //     return []
    //   },
    // },
  },
  data() {
    return {
      laster: this.items.lists || [],
      hotlists: this.hots || [],
    }
  },
  methods: {
    gotoDetail(id) {
      this.$linkTo(`/news/${id}`)
    },
    errorRNZimg(item) {
      // eslint-disable-next-line camelcase
      const { img_url, source } = item
      // eslint-disable-next-line camelcase
      let url = img_url
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
    saveDesc(item) {
      console.error('object', item)
      this.$router.push('/news/' + item.id)
    },
  },
}
</script>

<style scoped lang="scss">
.height50 {
  height: 50px;
}
</style>
