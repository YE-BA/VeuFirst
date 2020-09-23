<template>
  <div class="home">
    <core-app-bar></core-app-bar>
    <core-view></core-view>
    <core-footer></core-footer>
  </div>
</template>

<script>
// // @ is an alias to /src
export default {
  name: "Home",
  components: {
    CoreAppBar: () => import("@/components/core/AppBar.vue"),
    CoreView: () => import("@/components/core/View.vue"),
    CoreFooter: () => import("@/components/core/Footer.vue")
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
</style>
