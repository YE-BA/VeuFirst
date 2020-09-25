<template>
  <div class="vuex-ex-comp">
    <div v-for="(file, i) in files" :key="i">
      <v-card class="mx-auto" max-width="344">
        <v-list-item-title class="headline mb-1">
          {{ file.title }}
        </v-list-item-title>
        <v-img :src="file.url"></v-img>
        <v-list-item-subtitle>
          {{ file.subtitle }}
        </v-list-item-subtitle>
      </v-card>
    </div>
    <v-btn @click="addFile">
      addFile
    </v-btn>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "shiba",
  computed: { ...mapState(["files"]) },
  methods: {
    addFile() {
      this.$store.commit("addFile", {
        title: "새로 추가되는 타이틀 이름 시바견",
        url:
          "https://lh3.googleusercontent.com/proxy/luq3tbp-Rgv8RTW8nixBe7DIa7-iyrCTGABSM1gD-pwxP0NHrlfcVie0bYuNNSNLwBQt9nl7asiPbFuxKjeHrXdu0bvYbBLpM1nfughGvfbhHFfrlleaf7xgo3X7UC2VFhX-VqtvROyQ7tuPVa_lrAAAmEsdAVQyMLQKxVWGng",
        subtitle: "이건 새로 추가되는 서브타이틀"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>