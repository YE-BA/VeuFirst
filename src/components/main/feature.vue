<template>
  <div class="feature">
    <h2 class="feature_title">VUETIFY FEATURES</h2>
    <div class="divider"></div>
    <div class="wrap">
      <feature-item
        v-for="(feature, i) in features"
        :key="i"
        :icon="feature.icon"
        :title="feature.title"
        :text="feature.text"
        class="flex-item"
      >
      </feature-item>
    </div>
  </div>
  <!--feature-->
</template>

<script>
// @ is an alias to /src

export default {
  name: "feature",
  components: {
    FeatureItem: () => import("@/components/main/featureitem.vue")
  }, //위에 import시킨 파일을 여기에 등록
  //그리고 html영역에 <이름 :msg="쓰고 싶은 메시지?">형식으로 쓰기
  data() {
    return {
      features: [
        {
          icon: "mdi-account-group-outline",
          title: "VIBRANT COMMUNITY",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
        },
        {
          icon: "mdi-update",
          title: "FREQUENT UPDATES",
          text:
            "Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit."
        },
        {
          icon: "mdi-shield-outline",
          title: "LONG-TERM SUPPORT",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.feature {
  background: #eee;
  padding: 100px 0;
}
.feature_title {
  text-align: center;
  font-size: 48px;
}
.divider {
  width: 56px;
  height: 5px;
  opacity: 0.5;
  margin: 0 auto 60px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.features {
  padding: 20px;
}
.wrap {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
.flex-item {
  width: 550px;
  margin: 0 10px;
  background: white;
  border-radius: 1%;
}
@media only screen and(max-width: 768px) {
  .wrap {
    flex-flow: column nowrap;
  }
  .flex-item {
    width: 100%;
    margin: 10px 0;
  }
}
</style>