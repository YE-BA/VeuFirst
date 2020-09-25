<template>
  <div class="featureitem">
    <v-avatar class="feature_avatar" color="#1976d2" size="88">
      <v-icon dark size="36">{{ icon }}</v-icon>
    </v-avatar>
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
  </div>
  <!--featureitem-->
</template>

<script>
// @ is an alias to /src

export default {
  name: "featureitem",
  props: ["icon", "title", "text"],
  components: {}, //위에 import시킨 파일을 여기에 등록
  //그리고 html영역에 <이름 :msg="쓰고 싶은 메시지?">형식으로 쓰기
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.featureitem {
  padding: 50px;
  text-align: center;
}
.feature_avatar {
  margin-bottom: 16px;
}
h2 {
  margin-bottom: 20px;
  font-size: 20px;
}
p {
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  line-height: 1.75;
}
</style>