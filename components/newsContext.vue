<template>
  <div>
    <!--main content-->
    <main class="position-relative">
      <!--Search Form-->
      <div class="main-search-form transition-02s">
        <div class="container">
          <div class="pt-50 pb-50 main-search-form-cover">
            <div class="row mb-20">
              <div class="col-12">
                <form
                  action="#"
                  method="get"
                  class="search-form position-relative"
                >
                  <div class="search-form-icon"><i class="ti-search"></i></div>
                  <label>
                    <input
                      type="text"
                      class="search_field"
                      placeholder="Enter keywords for search..."
                      value=""
                      name="s"
                    />
                  </label>
                  <div class="search-switch">
                    <ul class="list-inline">
                      <li class="list-inline-item">
                        <a href="#" class="active">Articles</a>
                      </li>
                      <li class="list-inline-item"><a href="#">Authors</a></li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
            <div class="row">
              <div class="col-12 font-small suggested-area">
                <p class="d-inline font-small suggested">
                  <strong>Suggested:</strong>
                </p>
                <ul class="list-inline d-inline-block">
                  <li class="list-inline-item"><a href="#">Covid-19</a></li>
                  <li class="list-inline-item"><a href="#">Health</a></li>
                  <li class="list-inline-item"><a href="#">WFH</a></li>
                  <li class="list-inline-item"><a href="#">UltraNet</a></li>
                  <li class="list-inline-item"><a href="#">Hospital</a></li>
                  <li class="list-inline-item"><a href="#">Policies</a></li>
                  <li class="list-inline-item"><a href="#">Energy</a></li>
                  <li class="list-inline-item"><a href="#">Business</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--main content-->
      <div class="main_content sidebar_right pb-50 pt-50">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-12 col-sm-12">
              <div class="entry-header entry-header-1 mb-30">
                <div class="entry-meta meta-0 font-small mb-15">
                  <a href="category.html"
                    ><span class="post-cat background2 color-white">{{
                      detail.menu
                    }}</span></a
                  >
                </div>
                <h1 class="post-title">
                  {{ detail.title }}
                </h1>
                <div
                  class="entry-meta meta-1 font-small color-grey mt-15 mb-15"
                >
                  <span class="post-by"
                    >By <a href="author.html">{{ detail.source }}</a></span
                  >
                  <span class="post-on has-dot">{{
                    detail.create_time | prettyDate
                  }}</span>
                  <span class="time-reading has-dot">10 mins read</span>
                  <span class="hit-count"
                    ><i class="ti-bolt"></i>
                    {{ Math.floor(Math.random() * (100 - 1) + 1) }}k Views</span
                  >
                </div>
                <div class="bt-1 border-color-1 mt-30 mb-30"></div>
                <div class="single-social-share clearfix">
                  <div
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
                  </div>
                  <ul class="d-inline-block list-inline float-right">
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
                  </ul>
                </div>
              </div>
              <!--end entry header-->
              <figure class="single-thumnail">
                <div class="featured-slider-1 border-radius-5">
                  <div class="featured-slider-1-items">
                    <div class="slider-single">
                      <img :src="errorRNZimg(detail)" alt="" />
                    </div>
                  </div>
                </div>
                <div class="arrow-cover"></div>
                <div class="credit mt-15 font-small color-grey">
                  <i class="ti-credit-card mr-5"></i
                  ><span>Image credit: Behance</span>
                </div>
              </figure>
              <div class="single-excerpt">
                <p class="font-large">
                  {{ detail.description }}
                </p>
              </div>
              <div class="entry-main-content">
                <div
                  v-for="(item, index) in JSON.parse(detail.content)"
                  :key="index"
                >
                  {{ item }}
                </div>
              </div>
              <!--Comments-->
              <div class="comments-area">
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
              </div>
              <!--comment form-->
              <div class="comment-form">
                <h3 class="mb-30">Leave a Reply</h3>
                <form
                  id="commentForm"
                  class="form-contact comment_form"
                  action="#"
                >
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
                </form>
              </div>
            </div>
            <!--col-lg-8-->
            <!--Right sidebar-->
            <div
              class="col-lg-4 col-md-12 col-sm-12 primary-sidebar sticky-sidebar"
            >
              <div class="widget-area pl-30">
                <!--Widget about-->
                <div
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
                      href="contact.html"
                      >Contact me<i class="ti-arrow-right ml-5"></i
                    ></a>
                  </p>
                </div>
                <!--Widget social-->
                <div class="sidebar-widget widget-social-network mb-50">
                  <div class="widget-header position-relative mb-20 pb-10">
                    <h5 class="widget-title mb-10">Follow Us</h5>
                    <div class="bt-1 border-color-1"></div>
                  </div>
                  <div class="social-network">
                    <div class="follow-us d-flex align-items-center">
                      <a
                        class="follow-us-facebook clearfix mr-5 mb-10"
                        href="#"
                        target="_blank"
                      >
                        <div class="social-icon">
                          <i class="ti-facebook mr-5 v-align-space"></i>
                          <i class="ti-facebook mr-5 v-align-space nth-2"></i>
                        </div>
                        <span class="social-name">Facebook</span>
                        <span class="social-count counter-number">65</span
                        ><span class="social-count">K</span>
                      </a>
                      <a
                        class="follow-us-twitter clearfix ml-5 mb-10"
                        href="#"
                        target="_blank"
                      >
                        <div class="social-icon">
                          <i class="ti-twitter-alt mr-5 v-align-space"></i>
                          <i
                            class="ti-twitter-alt mr-5 v-align-space nth-2"
                          ></i>
                        </div>
                        <span class="social-name">Twitter</span>
                        <span class="social-count counter-number">75</span
                        ><span class="social-count">K</span>
                      </a>
                    </div>
                    <div class="follow-us d-flex align-items-center">
                      <a
                        class="follow-us-instagram clearfix mr-5"
                        href="#"
                        target="_blank"
                      >
                        <div class="social-icon">
                          <i class="ti-instagram mr-5 v-align-space"></i>
                          <i class="ti-instagram mr-5 v-align-space nth-2"></i>
                        </div>
                        <span class="social-name">Instagram</span>
                        <span class="social-count counter-number">32</span
                        ><span class="social-count">K</span>
                      </a>
                      <a
                        class="follow-us-youtube clearfix ml-5"
                        href="#"
                        target="_blank"
                      >
                        <div class="social-icon">
                          <i class="ti-youtube mr-5 v-align-space"></i>
                          <i class="ti-youtube mr-5 v-align-space nth-2"></i>
                        </div>
                        <span class="social-name">Youtube</span>
                        <span class="social-count counter-number">28</span
                        ><span class="social-count">K</span>
                      </a>
                    </div>
                  </div>
                </div>
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
                        <a href="single.html">
                          <img src="assets/imgs/news-1.jpg" alt="" />
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
                        <a href="single.html">
                          <img src="assets/imgs/news-2.jpg" alt="" />
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
                        <a href="single.html">
                          <img src="assets/imgs/news-3.jpg" alt="" />
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
                        <a href="single.html">
                          <img src="assets/imgs/news-4.jpg" alt="" />
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
                        <a href="single.html">
                          <img src="assets/imgs/news-5.jpg" alt="" />
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
                        <a href="single.html">
                          <img src="assets/imgs/news-8.jpg" alt="" />
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
                      <li class="cat-item cat-item-2">
                        <a href="category.html">Beauty</a> (3)
                      </li>
                      <li class="cat-item cat-item-3">
                        <a href="category.html">Book</a> (6)
                      </li>
                      <li class="cat-item cat-item-4">
                        <a href="category.html">Design</a> (4)
                      </li>
                      <li class="cat-item cat-item-5">
                        <a href="category.html">Fashion</a> (3)
                      </li>
                      <li class="cat-item cat-item-6">
                        <a href="category.html">Lifestyle</a> (6)
                      </li>
                      <li class="cat-item cat-item-7">
                        <a href="category.html">Travel</a> (2)
                      </li>
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
                          style="background-image: url(assets/imgs/news-7.jpg)"
                        >
                          <a class="img-link" href="single.html"></a>
                          <span class="top-right-icon background8"
                            ><i class="mdi mdi-camera-alt"></i
                          ></span>
                        </div>
                      </div>
                      <div class="post-content">
                        <div class="entry-meta meta-0 font-small mb-15">
                          <a href="category.html"
                            ><span class="post-cat background9 color-white"
                              >Beauty</span
                            ></a
                          >
                        </div>
                        <h4 class="post-title">
                          <a href="single.html"
                            >The litigants on the screen are not actors</a
                          >
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
                          style="background-image: url(assets/imgs/news-9.jpg)"
                        >
                          <a class="img-link" href="single.html"></a>
                        </div>
                      </div>
                      <div class="post-content">
                        <div class="entry-meta meta-0 font-small mb-15">
                          <a href="category.html"
                            ><span class="post-cat background3 color-white"
                              >Global</span
                            ></a
                          >
                        </div>
                        <h4 class="post-title">
                          <a href="single.html"
                            >Essential Qualities of Highly Successful Music</a
                          >
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
  },
  data() {
    return {
      text: '',
    }
  },
  methods: {
    context(text) {
      return text
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
  },
}
</script>

<style scoped lang="scss"></style>
