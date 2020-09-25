<template>
  <div class="blog-view">
    <h2>{{ "blog".toUpperCase() }}</h2>
    <div class="fivider"></div>
    <v-row justify="center">
      <v-col cols="12" sm="3" md="4" v-for="(blog, i) in blogs" :key="i">
        <blog-item
          :title="blog.title"
          :imgUrl="blog.url"
          :text="blog.text"
          class="blog-item"
        ></blog-item
      ></v-col>
    </v-row>
    <v-btn @click="addBlogItem">addBlog</v-btn>
  </div>
</template>

<script>
// // @ is an alias to /src
import { mapState } from "vuex";
export default {
  name: "blog",
  components: { BlogItem: () => import("@/components/main/blogitem.vue") },
  data() {
    return {};
  },
  computed: { ...mapState(["blogs", "etc"]) },
  methods: {
    addBlogItem() {
      // click
      this.$store.commit("addBlog", {
        title: "시바견",
        url:
          "https://lh3.googleusercontent.com/proxy/luq3tbp-Rgv8RTW8nixBe7DIa7-iyrCTGABSM1gD-pwxP0NHrlfcVie0bYuNNSNLwBQt9nl7asiPbFuxKjeHrXdu0bvYbBLpM1nfughGvfbhHFfrlleaf7xgo3X7UC2VFhX-VqtvROyQ7tuPVa_lrAAAmEsdAVQyMLQKxVWGng",
        text: "시바!"
      });
    }
  }
};
</script>
<style lang="scss">
.blog-view {
  padding: 20px;
}
.wrapper {
  display: flex;
  flex-flow: row;
  justify-content: center;
}
.blog-item {
  margin: 0 10px;
}
</style>
