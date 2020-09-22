<template>
  <div>
    <h1>EventPage : {{pageH1}}</h1>
    <button v-on:click="counter += 1">Add 1</button>
    <p>위 버튼을 클릭한 횟수는 {{ counter }} 번 입니다.</p>
    <button @click="greet">greet</button>
    <button v-on:click="say('hi')">Say hi</button>
    <button v-on:click="say('what')">Say what</button>
  </div>
</template>

<script>
// // @ is an alias to /src

export default {
  name: "Event",
  props: ["pageH1"],
  components: {},
  data() {
    return {
      counter: 0,
      name: "Vue.js"
    };
  },
  methods: {
    greet: function(event) {
      // 메소드 안에서 사용하는 `this` 는 Vue 인스턴스를 가리킵니다
      alert("Hello " + this.name + "!");
      // `event` 는 네이티브 DOM 이벤트입니다
      if (event) {
        alert(event.target.tagName);
      }
    },
    say: function(message) {
      alert(message);
    }
  }
};
</script>
<style lang="scss">
</style>