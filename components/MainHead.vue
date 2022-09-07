<template>
  <section>
    <header class="main-header header-style-1">
      <div
        class="header-logo background-white text-center pt-40 pb-40 d-none d-lg-block"
      >
        <div class="container">
          <div class="row">
            <div class="col-12">
              <NuxtLink to="/">
                <img
                  class="logo-img d-inline"
                  src="~/assets/imgs/logo.png"
                  alt=""
                />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <!--End logo-->
      <div class="header-bottom header-sticky background-white text-center">
        <div class="mobile_menu d-lg-none d-block"></div>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <!-- <div class="off-canvas-toggle-cover">
                <div
                  id="off-canvas-toggle"
                  class="off-canvas-toggle hidden d-inline-block ml-15"
                >
                  <span></span>
                  <p class="font-small d-none d-md-inline">All Sections</p>
                </div>
              </div> -->
              <div class="logo-tablet d-md-inline d-lg-none d-none">
                <!-- <a href="index.html">
                  <img
                    class="logo-img d-inline"
                    src="~/assets/imgs/logo-tablet.png"
                    alt=""
                  />
                </a> -->
                <NuxtLink to="/">
                  <div class="logo-img d-inline">Limitoo News</div>
                </NuxtLink>
              </div>
              <div class="logo-mobile d-inline d-md-none">
                <NuxtLink to="/">
                  <img
                    class="logo-img d-inline"
                    src="~/assets/imgs/logo-mobile.png"
                    alt=""
                  />
                </NuxtLink>
              </div>
              <!-- Main-menu -->
              <div class="main-nav text-center d-none d-lg-block">
                <nav>
                  <ul id="navigation" class="main-menu">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'Limitoo News',
    }
  },
}
</script>
