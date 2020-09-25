<template>
  <div>
    <main-content></main-content>
    <main-about></main-about>
    <main-features></main-features>
    <main-parallax></main-parallax>
    <main-blog></main-blog>
    <main-vuexex></main-vuexex>
    <main-input></main-input>
  </div>
</template>

<script>
// // @ is an alias to /src

export default {
  name: "Main",
  components: {
    MainContent: () => import("@/components/main/Content.vue"),
    MainAbout: () => import("@/components/main/Aboutme.vue"),
    MainFeatures: () => import("@/components/main/feature.vue"),
    MainParallax: () => import("@/components/main/parallax.vue"),
    MainBlog: () => import("@/components/main/blog.vue"),
    MainVuexex: () => import("@/components/main/VuexEx.vue"),
    MainInput: () => import("@/components/main/input.vue")
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss">
</style>