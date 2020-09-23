<template>
  <v-footer absolute class="font-weight-medium">
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} —
      <strong>Vuetify</strong>
    </v-col>
  </v-footer>
</template>

<script>
// // @ is an alias to /src
export default {
  name: "Footer",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss">
</style>