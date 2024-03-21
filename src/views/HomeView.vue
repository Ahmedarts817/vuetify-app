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
  <ProductSwiper :products="products" />
  <TopCategories :categories="categories" />
  <ShopWithUs />
</template>
<script>
import UpperBanner from "@/components/homepage/UpperBanner.vue";
import TheFatures from "@/components/homepage/TheFatures.vue";
import TopOffers from "@/components/homepage/TopOffers.vue";
import ProductSwiper from "@/components/homepage/ProductSwiper.vue";
import TopCategories from "@/components/homepage/TopCategories.vue";
import ShopWithUs from "@/components/homepage/ShopWithUs.vue";
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
  },
  computed: {
    ...mapState(productsModule, ["products"]),
    ...mapState(categoriesModule, ["categories"]),
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
