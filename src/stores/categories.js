import { defineStore } from "pinia";
import axios from "axios";

export const categoriesModule = defineStore("categoriesModule", {
  store: () => ({
    categories: [],
    products: [],
  }),
  actions: {
    async getCategories() {
      axios
        .get("http://dummyjson.com/products/categories")
        .then((data) => (this.categories = data.data.slice(0, 8)))
        .catch((err) => console.log(err));
    },
    async getCategoryProducts(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => {
          this.products = res.data.products;
        })
        .catch((err) => console.log(err));
    },
  },
});
