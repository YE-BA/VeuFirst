<template>
  <div class="about">
    <div class="a_text">
      <h1 class="text1">ABOUT ME</h1>
      <div class="text2">
        Vuetify is the #1 component library for Vue.js and has been in active
        development since 2016. The goal of the project is to provide users with
        everything that is needed to build rich and engaging web applications
        using the Material Design specification. It accomplishes that with a
        consistent update cycle, Long-term Support (LTS) for previous versions,
        responsive community engagement, a vast ecosystem of resources and a
        dedication to quality components.
      </div>
    </div>
    <div class="avata">
      <v-card elevation="11" rounded="circle" width="180">
        <v-avatar size="180">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
      </v-card>
    </div>
    <div class="vb">
      <v-btn class="ma-2" outlined color="indigo">Outlined Button</v-btn>
    </div>
  </div>
</template>

<script>
// // @ is an alias to /src

export default {
  name: "Aboutme",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.text1 {
  font-size: 60px;
  text-align: center;
  margin: 80px 0;
}
.text2 {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  line-height: 2;
  font-size: 22px;
}
.avata {
  width: 180px;
  margin: 0 auto;
  margin-top: 50px;
}
.vb {
  width: 200px;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 50px;
}
</style>
