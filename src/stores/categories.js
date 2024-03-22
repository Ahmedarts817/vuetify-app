import { defineStore } from "pinia";
import axios from "axios";

export const categoriesModule = defineStore("categoriesModule", {
  store: () => ({
    categories: [],
  }),
  actions: {
    async getCategories() {
      axios
        .get("http://dummyjson.com/products")
        .then((data) => (this.categories = data.data.products.slice(0, 12)))
        .catch((err) => console.log(err));
    },
  },
});
