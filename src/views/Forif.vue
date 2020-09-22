<template>
  <div class="forif">
    <h1>New For / If page</h1>
    <h1 v-if="awesome">Vue is 보인다</h1>
    <h1 v-if="!awesome">Vue is 안보인다</h1>
    <h2 v-else-if="isElse">이것은 Else If</h2>
    <h1 v-else>oh no</h1>
    <h1 v-show="ok">안녕하세요!</h1>
  </div>
</template>

<script>
export default {
  name: "ForIf",
  component: {},
  data() {
    return { awesome: true, isElse: true, ok: true };
  },
  computed: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
</style>