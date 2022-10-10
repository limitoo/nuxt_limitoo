<template>
  <div>
    <!--main content-->
    <main class="position-relative">
      <!--main content-->
      <div class="main_content sidebar_right pb-50 pt-50">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-12 col-sm-12">
              <div class="entry-header entry-header-1 mb-30">
                <div class="entry-meta meta-0 font-small mb-15">
                  <span
                    class="post-cat color-white"
                    :class="info.menu | bgcolor"
                  >
                    {{ info.menu }}
                  </span>
                </div>
                <h3 class="post-title">
                  {{ info.title }}
                </h3>
                <div
                  class="entry-meta meta-1 font-small color-grey mt-15 mb-15"
                >
                  <span class="post-by">By {{ info.source }}</span>
                  <span class="post-on has-dot">{{
                    info.create_time | prettyDate
                  }}</span>
                  <span class="time-reading has-dot">
                    {{ Math.floor(Math.random() * (10 - 1) + 1) }} mins read
                  </span>
                  <span class="hit-count"
                    ><i class="ti-bolt"></i>
                    {{ Math.floor(Math.random() * (100 - 1) + 1) }}k Views</span
                  >
                </div>

                <!-- end entry header
                <figure class="single-thumnail">
                  <div class="featured-slider-1 border-radius-5">
                    <div class="featured-slider-1-items">
                      <div class="slider-single">
                        <img
                          :src="errorRNZimg(info)"
                          alt=""
                          class="single-img"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="arrow-cover"></div>
                  <div class="credit mt-15 font-small color-grey">
                    <i class="ti-credit-card mr-5"></i>
                    <span>Image credit: Behance</span>
                  </div>
                </figure>

                <div class="single-excerpt">
                  <p class="font-large">
                    {{ info.description }}
                  </p>
                </div> -->

                <!-- <div class="bt-1 border-color-1 mt-30 mb-30"></div> -->
                <div class="single-social-share clearfix">
                  <!-- <div
                    class="entry-meta meta-1 font-small color-grey float-left mt-10"
                  >
                    <span class="hit-count"
                      ><i class="ti-comment mr-5"></i>82 comments</span
                    >
                    <span class="hit-count"
                      ><i class="ti-heart mr-5"></i>68 likes</span
                    >
                    <span class="hit-count"
                      ><i class="ti-star mr-5"></i>8/10</span
                    >
                  </div> -->
                  <!-- <ul class="d-inline-block list-inline float-right">
                    <li class="list-inline-item">
                      <a
                        class="social-icon facebook-icon text-xs-center color-white"
                        target="_blank"
                        href="#"
                        ><i class="ti-facebook"></i
                      ></a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon twitter-icon text-xs-center color-white"
                        target="_blank"
                        href="#"
                        ><i class="ti-twitter-alt"></i
                      ></a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon pinterest-icon text-xs-center color-white"
                        target="_blank"
                        href="#"
                        ><i class="ti-pinterest"></i
                      ></a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon instagram-icon text-xs-center color-white"
                        target="_blank"
                        href="#"
                        ><i class="ti-instagram"></i
                      ></a>
                    </li>
                  </ul> -->
                </div>
              </div>

              <div class="entry-main-content">
                <div
                  v-for="(item, index) in JSON.parse(detail.content)"
                  :key="index"
                >
                  <div v-html="showHTML(item)"></div>
                  <div class="h1rem"></div>
                </div>
              </div>
              <!--Comments-->
              <!-- <div class="comments-area">
                <h3 class="mb-30">03 Comments</h3>
                <div class="comment-list">
                  <div class="single-comment justify-content-between d-flex">
                    <div class="user justify-content-between d-flex">
                      <div class="thumb">
                        <img src="assets/imgs/author.png" alt="" />
                      </div>
                      <div class="desc">
                        <p class="comment">
                          Vestibulum euismod, leo eget varius gravida, eros enim
                          interdum urna, non rutrum enim ante quis metus. Duis
                          porta ornare nulla ut bibendum
                        </p>
                        <div class="d-flex justify-content-between">
                          <div class="d-flex align-items-center">
                            <h5>
                              <a href="#">Robert</a>
                            </h5>
                            <p class="date">December 4, 2020 at 3:12 pm</p>
                          </div>
                          <div class="reply-btn">
                            <a href="#" class="btn-reply text-uppercase"
                              >reply</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="comment-list">
                  <div class="single-comment justify-content-between d-flex">
                    <div class="user justify-content-between d-flex">
                      <div class="thumb">
                        <img src="assets/imgs/author-2.png" alt="" />
                      </div>
                      <div class="desc">
                        <p class="comment">
                          Sed ac lorem felis. Ut in odio lorem. Quisque magna
                          dui, maximus ut commodo sed, vestibulum ac nibh.
                          Aenean a tortor in sem tempus auctor
                        </p>
                        <div class="d-flex justify-content-between">
                          <div class="d-flex align-items-center">
                            <h5>
                              <a href="#">Maria</a>
                            </h5>
                            <p class="date">December 4, 2020 at 3:12 pm</p>
                          </div>
                          <div class="reply-btn">
                            <a href="#" class="btn-reply text-uppercase"
                              >reply</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="comment-list">
                  <div class="single-comment justify-content-between d-flex">
                    <div class="user justify-content-between d-flex">
                      <div class="thumb">
                        <img src="assets/imgs/author.png" alt="" />
                      </div>
                      <div class="desc">
                        <p class="comment">
                          Donec in ullamcorper quam. Aenean vel nibh eu magna
                          gravida fermentum. Praesent eget nisi pulvinar,
                          sollicitudin eros vitae, tristique odio.
                        </p>
                        <div class="d-flex justify-content-between">
                          <div class="d-flex align-items-center">
                            <h5>
                              <a href="#">Robert</a>
                            </h5>
                            <p class="date">December 4, 2020 at 3:12 pm</p>
                          </div>
                          <div class="reply-btn">
                            <a href="#" class="btn-reply text-uppercase"
                              >reply</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
              <!--comment form-->
              <div class="comment-form">
                <h3 class="mb-30">Leave a Reply</h3>
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <textarea
                        id="comment"
                        class="form-control w-100"
                        name="comment"
                        cols="30"
                        rows="9"
                        placeholder="Write Comment"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <input
                        id="name"
                        class="form-control"
                        name="name"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <input
                        id="email"
                        class="form-control"
                        name="email"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <input
                        id="website"
                        class="form-control"
                        name="website"
                        type="text"
                        placeholder="Website"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <button type="submit" class="button button-contactForm">
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
            <!--col-lg-8-->
            <!--Right sidebar-->
            <div
              class="col-lg-4 col-md-12 col-sm-12 primary-sidebar sticky-sidebar"
            >
              <div class="widget-area pl-30">
                <!--Widget about-->
                <!-- <div
                  class="sidebar-widget widget-about mb-50 pt-30 pr-30 pb-30 pl-30 background12 border-radius-5"
                >
                  <h5 class="mb-20">
                    Hello, I'm Robert<img
                      class="about-author-img float-right ml-30"
                      src="assets/imgs/author.png"
                      alt=""
                    />
                  </h5>
                  <p class="font-medium">
                    You should write because you love the shape of stories and
                    sentences and the creation of different words on a page.
                    Writing comes from reading, and reading is the finest
                    teacher of how to write.
                  </p>
                  <ul
                    class="header-social-network d-inline-block list-inline color-white mb-20"
                  >
                    <li class="list-inline-item">
                      <a
                        class="social-icon facebook-icon text-xs-center"
                        target="_blank"
                        href="#"
                        ><i class="ti-facebook"></i
                      ></a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon twitter-icon text-xs-center"
                        target="_blank"
                        href="#"
                        ><i class="ti-twitter-alt"></i
                      ></a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon pinterest-icon text-xs-center"
                        target="_blank"
                        href="#"
                        ><i class="ti-pinterest"></i
                      ></a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon instagram-icon text-xs-center"
                        target="_blank"
                        href="#"
                        ><i class="ti-instagram"></i
                      ></a>
                    </li>
                  </ul>
                  <p>
                    <a
                      class="readmore-btn font-small text-uppercase font-weight-ultra"
                      >Contact me<i class="ti-arrow-right ml-5"></i
                    ></a>
                  </p>
                </div> -->
                <!--Widget latest posts style 1-->
                <div class="sidebar-widget widget_alitheme_lastpost mb-50">
                  <div class="widget-header position-relative mb-20 pb-10">
                    <h5 class="widget-title mb-10">Latest Posts</h5>
                    <div class="bt-1 border-color-1"></div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 col-sm-6 sm-grid-content mb-30">
                      <div
                        class="post-thumb d-flex border-radius-5 img-hover-scale mb-15"
                      >
                        <a>
                          <img src="~/assets/imgs/news-1.jpg" alt="" />
                        </a>
                      </div>
                      <div class="post-content media-body">
                        <h6 class="post-title mb-10 text-limit-2-row">
                          The litigants on the screen are not actors
                        </h6>
                        <div class="entry-meta meta-1 font-x-small color-grey">
                          <span class="post-on">25 April</span>
                          <span class="hit-count has-dot">126k Views</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6 sm-grid-content mb-30">
                      <div
                        class="post-thumb d-flex border-radius-5 img-hover-scale mb-15"
                      >
                        <a>
                          <img src="~/assets/imgs/news-2.jpg" alt="" />
                        </a>
                      </div>
                      <div class="post-content media-body">
                        <h6 class="post-title mb-10 text-limit-2-row">
                          6 Ways to Instantly Improve your Ui Design.
                        </h6>
                        <div
                          class="entry-meta meta-1 font-x-small color-grey mt-10"
                        >
                          <span class="post-on">25 April</span>
                          <span class="hit-count has-dot">126k Views</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6 sm-grid-content mb-30">
                      <div
                        class="post-thumb d-flex border-radius-5 img-hover-scale mb-15"
                      >
                        <a>
                          <img src="~/assets/imgs/news-3.jpg" alt="" />
                        </a>
                      </div>
                      <div class="post-content media-body">
                        <h6 class="post-title mb-10 text-limit-2-row">
                          Water Partners With Rag &amp; Bone To Consume
                        </h6>
                        <div class="entry-meta meta-1 font-x-small color-grey">
                          <span class="post-on">25 April</span>
                          <span class="hit-count has-dot">126k Views</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6 sm-grid-content mb-30">
                      <div
                        class="post-thumb d-flex border-radius-5 img-hover-scale mb-15"
                      >
                        <a>
                          <img src="~/assets/imgs/news-4.jpg" alt="" />
                        </a>
                      </div>
                      <div class="post-content media-body">
                        <h6 class="post-title mb-10 text-limit-2-row">
                          The loss is not all that surprising
                        </h6>
                        <div
                          class="entry-meta meta-1 font-x-small color-grey mt-10"
                        >
                          <span class="post-on">25 April</span>
                          <span class="hit-count has-dot">126k Views</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6 sm-grid-content">
                      <div
                        class="post-thumb d-flex border-radius-5 img-hover-scale mb-15"
                      >
                        <a>
                          <img src="~/assets/imgs/news-5.jpg" alt="" />
                        </a>
                      </div>
                      <div class="post-content media-body">
                        <h6 class="post-title mb-10 text-limit-2-row">
                          We got a right to pick a little fight, Bonanza
                        </h6>
                        <div
                          class="entry-meta meta-1 font-x-small color-grey mt-10"
                        >
                          <span class="post-on">25 April</span>
                          <span class="hit-count has-dot">126k Views</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6 sm-grid-content">
                      <div
                        class="post-thumb d-flex border-radius-5 img-hover-scale mb-15"
                      >
                        <a>
                          <img src="~/assets/imgs/news-8.jpg" alt="" />
                        </a>
                      </div>
                      <div class="post-content media-body">
                        <h6 class="post-title mb-10 text-limit-2-row">
                          My entrance exam was on a book of matches
                        </h6>
                        <div
                          class="entry-meta meta-1 font-x-small color-grey mt-10"
                        >
                          <span class="post-on">25 April</span>
                          <span class="hit-count has-dot">126k Views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--Widget categories-->
                <div class="sidebar-widget widget_categories mb-50">
                  <div class="widget-header position-relative mb-20 pb-10">
                    <h5 class="widget-title mb-10">Categories</h5>
                    <div class="bt-1 border-color-1"></div>
                  </div>
                  <div class="post-block-list post-module-1 post-module-5">
                    <ul>
                      <li class="cat-item cat-item-2"><a>Beauty</a> (3)</li>
                      <li class="cat-item cat-item-3"><a>Book</a> (6)</li>
                      <li class="cat-item cat-item-4"><a>Design</a> (4)</li>
                      <li class="cat-item cat-item-5"><a>Fashion</a> (3)</li>
                      <li class="cat-item cat-item-6"><a>Lifestyle</a> (6)</li>
                      <li class="cat-item cat-item-7"><a>Travel</a> (2)</li>
                    </ul>
                  </div>
                </div>
                <!--Widget latest posts style 2-->
                <div class="sidebar-widget widget_alitheme_lastpost mb-50">
                  <div class="widget-header position-relative mb-20 pb-10">
                    <h5 class="widget-title mb-10">Trending Posts</h5>
                    <div class="bt-1 border-color-1"></div>
                  </div>
                  <div class="post-block-list">
                    <article class="mb-30">
                      <div
                        class="post-thumb position-relative thumb-overlay mb-30"
                      >
                        <div
                          class="img-hover-slide border-radius-5 position-relative"
                          style="
                            background-image: url(~/assets/imgs/news-7.jpg);
                          "
                        >
                          <a class="img-link"></a>
                          <span class="top-right-icon background8"
                            ><i class="mdi mdi-camera-alt"></i
                          ></span>
                        </div>
                      </div>
                      <div class="post-content">
                        <div class="entry-meta meta-0 font-small mb-15">
                          <a
                            ><span class="post-cat background9 color-white"
                              >Beauty</span
                            ></a
                          >
                        </div>
                        <h4 class="post-title">
                          <a>The litigants on the screen are not actors</a>
                        </h4>
                        <div
                          class="entry-meta meta-1 font-small color-grey mt-15 mb-15"
                        >
                          <span class="post-on">15 April 2020</span>
                          <span class="time-reading has-dot">12 mins read</span>
                          <span class="hit-count"
                            ><i class="ti-bolt"></i> 19k Views</span
                          >
                        </div>
                      </div>
                    </article>
                    <article class="mb-30">
                      <div
                        class="post-thumb position-relative thumb-overlay hover-box-shadow-2 mb-30"
                      >
                        <div
                          class="img-hover-slide border-radius-5 position-relative"
                          style="
                            background-image: url(~/assets/imgs/news-9.jpg);
                          "
                        >
                          <a class="img-link"></a>
                        </div>
                      </div>
                      <div class="post-content">
                        <div class="entry-meta meta-0 font-small mb-15">
                          <a
                            ><span class="post-cat background3 color-white"
                              >Global</span
                            ></a
                          >
                        </div>
                        <h4 class="post-title">
                          <a>Essential Qualities of Highly Successful Music</a>
                        </h4>
                        <div
                          class="entry-meta meta-1 font-small color-grey mt-15 mb-15"
                        >
                          <span class="post-on">9 April 2020</span>
                          <span class="time-reading has-dot">8 mins read</span>
                          <span class="hit-count"
                            ><i class="ti-bolt"></i> 129k Views</span
                          >
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <!--End sidebar-->
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    detail: {
      type: Object,
      default() {
        return {}
      },
    },
    info: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      text: '',
    }
  },
  methods: {
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
    showHTML(htmlText) {
      let ret = htmlText
      const divImg = '<img src="https://www.rnz.co.nz'
      const isImg = htmlText.includes(divImg)
      if (isImg) {
        const num = divImg.length
        const url = htmlText.slice(num)
        ret = `<img src="${url}`
      }
      return ret
    },
  },
}
</script>

<style scoped>
.imgText {
  margin-top: -0.5rem;
  color: #a1a1a1;
  font-size: 0.6rem;
}
.single-img {
  width: 100%;
  height: 100%;
}
.h1rem {
  height: 1rem;
}
</style>
