Vue.createApp({
  data() {
    return {
      isChoosed: false,
      activeTab: [1, 2, 3],
      contentText: ["Content 1", "Content 2", "Content 3"],
    };
  },
  computed: {
    currentTab() {
      if (activeTab[0] === !isChoosed) {
        return this.contentText[0];
      } else if (activeTab[1] === !isChoosed) {
        return this.contentText[1];
      } else if (activeTab[2] === !isChoosed) {
        return this.contentText[2];
      }
    },
  },
  methods: {
    chooseTab() {
      this.isChoosed = !this.isChoosed;
    },
  },
}).mount("#app");
