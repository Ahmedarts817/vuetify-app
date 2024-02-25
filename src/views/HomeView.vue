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
  <FlashDeal :flashdeals="flashdeals" />
</template>
<script>
import UpperBanner from "@/components/homepage/UpperBanner.vue";
import TheFatures from "@/components/homepage/TheFatures.vue";
import TopOffers from "@/components/homepage/TopOffers.vue";
import FlashDeal from "@/components/homepage/FlashDeal.vue";
import { productsModule } from "@/stores/products";
import { mapState, mapActions } from "pinia";
export default {
  components: { UpperBanner, TheFatures, TopOffers, FlashDeal },
  computed: {
    ...mapState(productsModule, ["flashdeals"]),
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
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
