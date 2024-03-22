import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    products: [],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("http://dummyjson.com/products")
        .then((data) => {
          console.log(data.data.products);
          this.products = data.data.products;
        })
        .catch((err) => console.log(err));
    },
  },
});
