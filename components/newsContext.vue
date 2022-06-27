<template>
  <div>
    <!--main content-->
    <div class="main_content sidebar_right pb-50">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12">
            {{text.src}}
          </div>
          <div class="col-lg-4 col-md-12 col-sm-12 primary-sidebar sticky-sidebar">
            <!-- <right-lists :right-lists=""></right-lists> -->
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
    detail: {
      type: Object,
      default() {
        return {}
      },
    },
    // hots: {
    //   type: Array,
    //   default(){
    //     return []
    //   }
    // }
  },
  data() {
    return {
      text: this.detail || [],
    }
  }

}
</script>

<style scoped lang="scss"></style>
