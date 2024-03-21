import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    products: [],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("http://localhost:8000/api/v1/products")
        .then((data) => (this.products = data.data.data))
        .catch((err) => console.log(err));
    },
  },
});
