import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    products: [],
    newProducts: [],
    smartphones: [],
    fragrances: [],
    groceries: [],
    product: "",
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
          this.smartphones = data.data.products.filter((el) => {
            return el.category === "smartphones";
          });
          this.fragrances = data.data.products.filter((el) => {
            return el.category === "fragrances";
          });
          this.groceries = data.data.products.filter((el) => {
            return el.category === "groceries";
          });
        })
        .catch((err) => console.log(err));
    },
    async getOneProduct(id) {
      await axios.get(`http://dummyjson.com/products/${id}`).then((data) => {
        console.log(data);
        this.product = data.data;
      });
    },
  },
});
