<template>
  <div class="main-content">
    <v-img
      :src="require('../../assets/banner/banners.jpg')"
      min-height="485"
    ></v-img>
    <div class="textwrap">
      <div class="flex-item">WELCOME TO</div>
      <div class="flex-item big">VUETIFY</div>
    </div>
  </div>
</template>
<script>
// // @ is an alias to /src

export default {
  name: "Content",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.main-content {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
.textwrap {
  position: absolute;
}
.flex-item {
  font-size: 50px;
  color: white;
  text-align: center;
  font-weight: 100;
}
.big {
  font-size: 100px;
  font-weight: bold;
  margin-top: -40px;
}
</style>