<template>
  <div class="parallax">
    <v-parallax :height="isMobile ? 800 : 500" :src="img">
      <div class="wrap" align="center" justify="center">
        <parallax-item
          v-for="(parallax, i) in parallaxs"
          :key="i"
          :title="parallax.title"
          :text="parallax.text"
          class="flex-item"
        ></parallax-item>
      </div>
    </v-parallax>
  </div>
  <!--Parallax-->
</template>

<script>
// @ is an alias to /src

export default {
  name: "Parallax",
  components: {
    ParallaxItem: () => import("@/components/main/parallaxitem.vue")
  }, //위에 import시킨 파일을 여기에 등록
  //그리고 html영역에 <이름 :msg="쓰고 싶은 메시지?">형식으로 쓰기
  data() {
    return {
      parallaxs: [
        { title: "24K", text: "GITHUB STARS" },
        { title: "330+", text: "RELEASES" },
        { title: "1m", text: "DOWNLOADS / MO" },
        { title: "5m", text: "TOTAL DOWNLOADS" }
      ],
      isMobile: false,
      img:
        "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    };
  },
  methods: {},
  mounted() {
    let onresize = () => {
      let width = document.body.clientWidth;
      console.log(width);
      if (width < 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    };
    window.addEventListener("resize", onresize);
  }
};
</script>

<style lang="scss" scoped>
.parallax {
}
.wrap {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
.flex-item {
  width: 550px;
  margin: 0 10px;
  text-align: center;
}
@media only screen and(max-width: 768px) {
  .wrap {
    flex-flow: column nowrap;
  }
  .flex-item {
    width: 100%;
  }
}
</style>