<template>
  <v-app-bar color="white">
    <v-avatar class="logo">
      <img :src="require('../../assets/logo.svg')" alt="John" />
    </v-avatar>
    <v-toolbar-title>Page title</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
// // @ is an alias to /src

export default {
  name: "AppBar",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss">
.logo {
  margin-left: 20px;
}
</style>