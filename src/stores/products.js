import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    products: [],
    newProducts: [],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("http://dummyjson.com/products")
        .then((data) => {
          console.log(data.data.products);
          this.products = data.data.products;
          this.newProducts = data.data.products.filter((el) => {
            return el.category === "laptops";
          });
        })
        .catch((err) => console.log(err));
    },
  },
});
