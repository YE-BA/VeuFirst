<template>
  <div class="playground">
    <span>메시지 : {{msg + ' 어쩌라고'}}</span>
    <div v-html="msg"></div>
    <div v-bind:title="title">타이틀</div>
    <div>{{ title.split('').reverse().join('') }}</div>
    <div>{{reverseTitle}}</div>
    <div>{{reverse()}}</div>
    <div :class="{active:isActive}" class="text-danger">클래스 바인딩</div>
    <div :class="['active', 'text-danger']">클래스 바인딩</div>
    <div v-bind:class="{ active: !isActive }">클래스 바인딩 반전</div>
    <div :style="{color : 'red',fontSize: size + 'px'} ">인라인 스타일 바인딩</div>
    <div :style="fontStyle">인라인 스타일 바인딩</div>
    <div :style="{fontStyle}">인라인 스타일 바인딩</div>
  </div>
</template>

<script>
// // @ is an alias to /src

export default {
  name: "playGround",
  components: {},
  data() {
    return {
      msg: '<p style="color:red;">안녕하세요</p>',
      title: "소주 만 병만 주소.",
      ok: true,
      firstName: "Foo",
      lastName: "Bar",
      fullName: "Foo Bar",
      isActive: true,
      size: 30,
      fontStyle: { color: "blue", fontSize: "30px" }
    };
  },
  computed: {
    reverseTitle() {
      this.title
        .split("")
        .reverse()
        .join("");
      let result = this.title + "이건 computed";
      return result;
    }
  },
  watch: {
    firstName: function(val) {
      this.fullName = val + " " + this.lastName;
    },
    lastName: function(val) {
      this.fullName = this.firstName + " " + val;
    }
  },
  methods: {
    reverse() {
      this.title
        .split("")
        .reverse()
        .join("");
      let result = this.title + "이건 computed";
      return result;
    }
  }
};
</script>
<style lang="scss">
.active {
  font-size: 30px;
  color: red;
}
.text-danger {
  border: 1px solid red;
}
</style>