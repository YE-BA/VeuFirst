<template>
  <div class="blog-item">
    <v-img :src="imgUrl" height="300"></v-img>
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
    <v-btn>continue reading</v-btn>
  </div>
</template>

<script>
export default {
  props: ["imgUrl", "title", "text"]
};
</script>

<style lang="scss" scoped>
.blog-item {
}
</style>