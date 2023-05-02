const app = Vue.createApp({
  data() {
    return {
      userName: "Barbara Olejniczak",
    };
  },
}).mount("#app");
console.log(app.userName);
