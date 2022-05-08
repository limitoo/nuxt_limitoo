<template>
  <div>
    <!--Widget latest posts style 1-->
    <div class="sidebar-widget widget_alitheme_lastpost mb-50">
      <div class="widget-header position-relative mb-20 pb-10">
        <h5 class="widget-title mb-10">Latest Posts</h5>
        <div class="bt-1 border-color-1"></div>
      </div>
      <div class="post-block-list post-module-1">
        <ul class="list-post">
          <li v-for="item in lists" :key="item.id" class="mb-30">
            <div class="d-flex">
              <div
                class="post-thumb d-flex mr-15 border-radius-5 img-hover-scale"
              >
                <a href="single.html">
                  <div class="rigthImg">
                    <img class="imgsize" :src="item.img_url" alt="" />
                  </div>
                </a>
              </div>
              <div class="post-content media-body">
                <div class="entry-meta meta-0 mb-10">
                  <a href="category.html"
                    ><span class="post-in background5 color-white font-small">{{
                      item.menu
                    }}</span></a
                  >
                </div>
                <h6 class="post-title mb-10 text-limit-2-row">
                  {{ item.title }}
                </h6>
                <div class="entry-meta meta-1 font-x-small color-grey">
                  <span class="post-on">25 April</span>
                  <span class="hit-count has-dot">26k Views</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightLists',
  props: {
    rightLists: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      lists: this.rightLists || [],
    }
  },
}
</script>

<style scoped lang="scss">
.rigthImg {
  width: 130px;
  height: 130px;
}
.imgsize {
  width: 100%;
  height: 100%;
  vertical-align: middle;
  object-fit: cover;
  object-position: contain center;
}
</style>
