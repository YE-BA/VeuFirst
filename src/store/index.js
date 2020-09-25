import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogs: [
      {
        title: "MOBILE FIRST & RESPONSIVE",
        url:
          "https://post-phinf.pstatic.net/MjAxNzA2MjlfMjk4/MDAxNDk4Njk4OTYzMTIz.RC7_Z7bSDD0noFihxaBGb5axQwFltnhYJnfXhCOlDu4g.ksRlpD9YhJQAwRFH0iw5qQvuZYkuAFDO5uoDZrHsfhcg.PNG/20170517_130400.png?type=w1200",
        text:
          "Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.",
      },
      {
        title: "THINK OUTSIDE THE BOX",
        url:
          "https://images.mypetlife.co.kr/wp-content/uploads/2018/07/13200320/puppies-1871260_1280-390x220.jpg",
        text:
          "Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.",
      },
      {
        title: "SMALL CHANGES, BIG DIFFERENCE",
        url:
          "https://myanimals.com/ko/wp-content/uploads/2018/09/%EA%B3%A8%EB%93%A0%EB%A6%AC%ED%8A%B8%EB%A6%AC%EB%B2%84.jpg",
        text: "Vestibulum in dict",
      },
    ],
    etc: "",
    //----------------------------------
    files: [
      {
        title: "firstFile",
        url:
          "https://stickershop.line-scdn.net/stickershop/v1/product/3022317/LINEStorePC/main.png;compress=true",
        subtitle: "나는 시바입니다",
      },
    ],
  },
  mutations: {
    addBlog(state, payload) {
      state.blogs.push(payload);
    },
    addFile(state, payload) {
      state.files.push(payload);
    },
  },
  actions: {},
  modules: {},
});
