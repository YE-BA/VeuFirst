<template>
  <div class="home">
    <h2 class="text">CONTACT ME</h2>
    <v-row justify="center">
      <v-col cols="12">
        <v-text-field label="Name*" single-line solo></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field label="Email*" single-line solo></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field label="Subject*" single-line solo></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-textarea label="Name*" single-line solo></v-textarea>
      </v-col>
      <div>
        <v-btn depressed large color="primary">SUBMIT</v-btn>
      </div>
    </v-row>
  </div>
</template>

<script>
// // @ is an alias to /src

export default {
  name: "input",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.home {
  background: #333;
  padding: 50px;
}
.text {
  margin-top: -20px;
  margin-bottom: 30px;
  color: #ffffff;
}
.text_box {
  margin: 0 auto;
}
</style>