<template>
  <UpperBanner />
  <div class="affirm pa-2">
    <div class="cont">
      <p>
        Buy Now. Pay Later Starting At 0% APR
        <v-btn class="ms-2" variant="outlined">Learn More</v-btn>
      </p>
    </div>
  </div>
  <TheFatures />
  <TopOffers />
  <ProductSwiper :products="products" title="Flashdeals" color="black" />
  <TopCategories :categories="categories" />
  <NewProducts :products="newProducts" />

  <QualityFeatures />
  <ProductSwiper :products="smartphones" title="Smartphones" color="red" />
  <v-container fluid
    ><img src="../assets/images/tv-banner.webp" alt=""
  /></v-container>
  <ProductSwiper :products="fragrances" title="Fragrancies" color="black" />
  <v-container fluid class="d-flex">
    <v-col cols="6">
      <img class="w-100" src="../assets/images/band-left-cover.webp" alt=""
    /></v-col>
    <v-col cols="6">
      <img class="w-100" src="../assets/images/band-right-cover.webp" alt=""
    /></v-col>
  </v-container>
  <ProductSwiper :products="groceries" title="Groceries" color="red" />

  <ShopWithUs />
</template>
<script>
import UpperBanner from "@/components/homepage/UpperBanner.vue";
import TheFatures from "@/components/homepage/TheFatures.vue";
import TopOffers from "@/components/homepage/TopOffers.vue";
import ProductSwiper from "@/components/homepage/ProductSwiper.vue";
import TopCategories from "@/components/homepage/TopCategories.vue";
import ShopWithUs from "@/components/homepage/ShopWithUs.vue";
import NewProducts from "@/components/homepage/NewProducts.vue";
import QualityFeatures from "@/components/homepage/QualityFeatures.vue";
import { productsModule } from "@/stores/products";
import { categoriesModule } from "@/stores/categories";
import { mapState, mapActions } from "pinia";
export default {
  components: {
    UpperBanner,
    TheFatures,
    TopOffers,
    ProductSwiper,
    TopCategories,
    ShopWithUs,
    NewProducts,
    QualityFeatures,
  },
  computed: {
    ...mapState(productsModule, ["products"]),
    ...mapState(productsModule, ["smartphones"]),
    ...mapState(productsModule, ["newProducts"]),
    ...mapState(categoriesModule, ["categories"]),
    ...mapState(productsModule, ["fragrances"]),
    ...mapState(productsModule, ["groceries"]),
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
    ...mapActions(categoriesModule, ["getCategories"]),
  },
  async mounted() {
    await this.getProducts();
    await this.getCategories();
  },
};
</script>
<style scoped lang="scss">
.affirm {
  background-color: rgb(246, 185, 36);
  p {
    margin: 0 auto;
    width: fit-content;
  }
}
</style>
