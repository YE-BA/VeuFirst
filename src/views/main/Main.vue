<template>
  <div>
    <main-content></main-content>
  </div>
</template>

<script>
// // @ is an alias to /src

export default {
  name: "Main",
  components: {
    MainContent: () => import("@/components/main/Content.vue")
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss">
</style>