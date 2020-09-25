<template>
  <v-app-bar color="white" fixed="true">
    <v-avatar class="logo">
      <img :src="require('../../assets/logo.svg')" alt="John" />
    </v-avatar>
    <v-toolbar-title>HYO JUN</v-toolbar-title>
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
h2 {
  font-weight: 700;
  font-size: 3rem; //폰트 사이즈 전용 "rem"
  text-align: center;
  margin-top: 100px;
}
p {
  font-weight: 300;
  font-size: 1.25rem;
  color: rgba(0, 0, 0, 0.87);
}
.divider {
  width: 56px;
  height: 5px;
  margin: 0 auto 32px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
</style>