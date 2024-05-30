<template>
  <h1 class="text-center my-5">{{ $route.params.id }}</h1>
  <v-container>
    <v-row>
      <v-col cols="3" v-for="product in products" :key="product.id">
        <v-card elevation="0" rounded style="border-radius: 10px">
          <v-hover v-slot="{ isHovering, props }">
            <div class="image-parent" style="height: 200px; overflow: hidden">
              <img
                class="w-100 h-100"
                :src="product.thumbnail"
                alt=""
                :style="`transition: 0.5s all ease-in-out; scale: ${
                  isHovering ? 1.1 : 1
                }`"
                v-bind="props"
              />
            </div>
          </v-hover>
          <v-card-text>
            <p class="description mb-3" style="min-height: 50px">
              {{
                product.description.split(" ").length <= 10
                  ? product.description
                  : product.description.split(" ").slice(0, 8).join(" ") +
                    " ..."
              }}
            </p>

            <v-rating
              readonly
              v-model="product.rating"
              color="orange-lighten-1"
              size="x-small"
            ></v-rating>
            <p class="price mb-3">
              <span style="text-decoration: line-through"
                >${{ product.price }}
              </span>
              From
              <span style="font-weight: bold; color: red">
                ${{
                  Math.ceil(
                    product.price -
                      (product.price / 100) * product.discountPercentage
                  )
                }}</span
              >
            </p>
            <router-link :to="{ name: 'product', params: { id: product.id } }">
              <v-btn class="my-2" variant="outlined" rounded="xl"
                >choose options</v-btn
              >
            </router-link>
          </v-card-text>
        </v-card></v-col
      >
    </v-row>
  </v-container>
</template>
<script>
import { mapActions, mapState } from "pinia";
import { categoriesModule } from "@/stores/categories";
export default {
  computed: {
    ...mapState(categoriesModule, ["products"]),
  },
  methods: {
    ...mapActions(categoriesModule, ["getCategoryProducts"]),
  },
  async mounted() {
    await this.getCategoryProducts(this.$route.params.id);
  },
  watch: {
    $route() {
      this.getCategoryProducts(this.$route.params.id);
    },
  },
};
</script>
