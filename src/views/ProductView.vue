<template>
  <div class="product-details mt-16">
    <v-container fluid>
      <v-row>
        <v-col cols="7">
          <img
            class="w-100"
            height="500"
            :src="tab ? tab : product.thumbnail"
          />
          <v-tabs center-active height="220" v-model="tab">
            <v-tab
              class="mx-10 mt-3"
              v-for="(img, i) in product.images"
              :key="i"
              :value="img"
            >
              <img :src="img" alt="" width="100" height="200" />
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col cols="5">
          <v-card elevation="0">
            <v-card-title
              class="px-0"
              style="font-size: 19px; font-weight: bold"
            >
              ({{ product.title }}) - sample {{ product.category }}
            </v-card-title>
            <div class="rating-parent d-flex align-center" style="gap: 10px">
              <v-rating
                readonly
                half-increments
                v-model="product.rating"
                color="orange-lighten-1"
                size="x-small"
              ></v-rating>
              <span>stock: {{ product.stock }}</span>
            </div>
            <p>{{ product.description }}</p>
            <p class="mt-5">
              Availability : {{ product.stock > 0 ? "In Stock" : "No Stuck" }}
            </p>
            <p class="mt-5 mb-5" style="font-weight: bold">
              Price : <del style="color: red">{{ product.price }}</del>
              {{
                Math.ceil(
                  product.price -
                    (product.price / 100) * product.discountPercentage
                )
              }}
            </p>
          </v-card>
          <p>Quantity</p>
          <div
            class="qu my-3 px-2"
            style="
              border: 1px solid black;
              border-radius: 30px;
              width: fit-content;
            "
          >
            <v-icon @click="quantity > 1 ? quantity-- : false"
              >mdi-minus</v-icon
            >
            <input
              class="py-2"
              type="number"
              name=""
              id=""
              v-model="quantity"
              min="1"
              style="
                border: none;
                outline: none;
                width: 60px;
                text-align: center;
              "
            />
            <v-icon @click="quantity++">mdi-plus</v-icon>
          </div>
          <v-btn
            class="text-white w-75 p-5 mt-5"
            color="black"
            height="50"
            style="border-radius: 30px"
            >Add to card</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { productsModule } from "@/stores/products";
import { mapState, mapActions } from "pinia";
export default {
  data: () => ({
    tab: "",
    quantity: 1,
  }),
  computed: {
    ...mapState(productsModule, ["product"]),
  },
  methods: {
    ...mapActions(productsModule, ["getOneProduct"]),
  },
  async mounted() {
    console.log(this.$route.params.id);
    await this.getOneProduct(this.$route.params.id);
  },
};
</script>
<style>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
