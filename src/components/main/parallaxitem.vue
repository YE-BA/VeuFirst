<template>
  <div class="parallaxitem">
    <h1>{{ title }}</h1>
    <h4>{{ text }}</h4>
  </div>
  <!--featureitem-->
</template>

<script>
// @ is an alias to /src

export default {
  name: "parallaxitem",
  props: ["title", "text"],
  components: {}, //위에 import시킨 파일을 여기에 등록
  //그리고 html영역에 <이름 :msg="쓰고 싶은 메시지?">형식으로 쓰기
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.parallaxitem h1 {
  font-size: 60px;
  font-weight: 900;
}
.parallaxitem h4 {
  font-weight: 400;
  font-size: 20px;
}
@media only screen and(max-width: 768px) {
  .parallaxitem {
    margin: 10px 0;
  }
  .parallaxitem h1 {
    font-size: 48px;
  }
  .parallaxitem h4 {
    font-size: 16px;
  }
}
</style>