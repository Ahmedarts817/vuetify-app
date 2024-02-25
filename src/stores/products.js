import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsMoule", {
  state: () => ({
    flashdeals: [],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((data) => (this.flashdeals = data.data.products.slice(0, 8)))
        .catch((err) => console.log(err));
    },
  },
});
