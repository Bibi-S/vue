Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },
  methods: {
    removeFruit(fruitToRemove) {
      this.fruitBasket = this.fruitBasket.filter((fruit) => {
        return fruit !== fruitToRemove; //hier true/false => FILTER = eine KOPIE von fruitBasket
      });
    },
    updateCoordinates(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
  },
}).mount("#app");
