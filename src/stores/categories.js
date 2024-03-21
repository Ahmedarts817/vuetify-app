import { defineStore } from "pinia";
import axios from "axios";

export const categoriesModule = defineStore("categoriesModule", {
  store: () => ({
    categories: [],
  }),
  actions: {
    async getCategories() {
      axios
        .get("http://localhost:8000/api/v1/categories")
        .then((data) => (this.categories = data.data.data))
        .catch((err) => console.log(err));
    },
  },
});
